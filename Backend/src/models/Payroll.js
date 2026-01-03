const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Payroll = sequelize.define('Payroll', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  employee_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  month: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  base_salary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  deductions: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  net_pay: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  generated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'payroll',
  timestamps: false,
});

module.exports = Payroll;
