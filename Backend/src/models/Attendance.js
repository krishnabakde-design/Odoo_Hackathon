const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Attendance = sequelize.define('Attendance', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  employee_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  check_in: DataTypes.TIME,
  check_out: DataTypes.TIME,
  status: {
    type: DataTypes.ENUM('PRESENT', 'ABSENT', 'LEAVE'),
    allowNull: false,
  },
}, {
  tableName: 'attendance',
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['employee_id', 'date'],
    },
  ],
});

module.exports = Attendance;
