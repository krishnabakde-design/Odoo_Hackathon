const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  employee_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  department: DataTypes.STRING,
  designation: DataTypes.STRING,
  joining_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  salary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: 'employees',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

module.exports = Employee;
