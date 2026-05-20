import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const salaHospitalizacion = sequelize.define('salaHospitalizacion', {
  idSala: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  nombreSala: { 
    type: DataTypes.STRING, 
    allowNull: true 
},
 idDepartamento: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  }
  
});

export default salaHospitalizacion;