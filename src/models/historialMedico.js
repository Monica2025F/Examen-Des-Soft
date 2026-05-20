
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const historialMedico = sequelize.define('historialMedico', {
  idHistorial: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  dniPaciente: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
},
  descripcionGraneral: { 
    type: DataTypes.STRING, 
    allowNull: true 
  }
  

});

export default historialMedico;