import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const citaMedica = sequelize.define('citaMedica', {
  cita: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  fecha: { 
    type: DataTypes.DATE, 
    allowNull: true 
},
  hora: { 
    type: DataTypes.INTEGER,
    validate: { min: 0 } 
  },
  motivo: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  dniPaciente: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  matriculaMedica: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  idDepartamento: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  }

});

export default citaMedica;