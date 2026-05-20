
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const departamento = sequelize.define('departamento', {
  idDepatamento: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: true 
},
  jefeDepartamento: { 
    type: DataTypes.STRING, 
    allowNull: true 
  }
  

});

export default departamento;