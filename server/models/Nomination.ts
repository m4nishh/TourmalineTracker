import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.ts';

const Nomination = sequelize.define('Nomination', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  organization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_no: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  linkedIn: {
    type: DataTypes.STRING,
  },
  categories: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  upload_photo: {
    type: DataTypes.STRING, // Could be a URL or filename
    allowNull: true,
  },
  write_up: {
  type: DataTypes.TEXT,
  allowNull: false,
  },
  submitted_date: {
  type: DataTypes.DATE,
  allowNull: false,
  },
  },{
    timestamps: false // ⛔ disables createdAt/updatedAt
  });

export default Nomination;
