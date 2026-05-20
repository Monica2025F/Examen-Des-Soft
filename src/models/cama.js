
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const cama = sequelize.define('cama', {
  idCama: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  numeroCama: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
},
 estado: { 
    type: DataTypes.STRING, 
    allowNull: true 
},
  idSala: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  }

});

export default cama;