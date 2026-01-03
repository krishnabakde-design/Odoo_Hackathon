export default function AdminProfile() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">
          My Profile
        </h1>

        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-4xl font-bold">
            A
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Admin User
            </h2>
            <p className="text-gray-500">admin@democorp.com</p>
            <p className="text-sm text-gray-600 mt-1">
              Administrator • Demo Corp
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-700 mb-2">
              Personal Info
            </h3>
            <p><strong>Salary:</strong> ₹15 LPA</p>
            <p><strong>Hobbies:</strong> Reading, Travel</p>
            <p><strong>Experience:</strong> 6 years</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-700 mb-2">
              Work Info
            </h3>
            <p><strong>Department:</strong> Administration</p>
            <p><strong>Location:</strong> India</p>
            <p><strong>Status:</strong> Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}
