const { Company, User, Employee } = require('../models');
const { hashPassword, comparePassword } = require('../utils/password');
const { generateToken } = require('../utils/jwt');

/* =========================
   ADMIN-ONLY SIGNUP
========================= */
async function adminSignup(req, res) {
  try {
    const { company_name, admin_name, email, password } = req.body;

    if (!company_name || !admin_name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // 1. Create Company
    const company = await Company.create({
      name: company_name,
    });

    // 2. Hash password
    const passwordHash = await hashPassword(password);

    // 3. Create Admin User
    const adminUser = await User.create({
      company_id: company.id,
      role: 'ADMIN',
      full_name: admin_name,
      email,
      password_hash: passwordHash,
    });

    // 4. Generate JWT
    const token = generateToken({
      user_id: adminUser.id,
      company_id: company.id,
      role: adminUser.role,
    });

    return res.status(201).json({
      message: 'Admin signup successful',
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Signup failed' });
  }
}

/* =========================
   LOGIN (ADMIN + EMPLOYEE)
========================= */
async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }

    // Find user by email
    const user = await User.findOne({ where: { email } });

    if (!user || !user.is_active) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const passwordMatch = await comparePassword(password, user.password_hash);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = generateToken({
      user_id: user.id,
      company_id: user.company_id,
      role: user.role,
    });

    return res.status(200).json({
      message: 'Login successful',
      token,
      role: user.role,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Login failed' });
  }
}

module.exports = {
  adminSignup,
  login,
};
