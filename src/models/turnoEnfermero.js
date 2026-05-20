import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const turnoEnfermeria = sequelize.define('turnoEnfermeria', {
  idTurno: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  fecha: { 
    type: DataTypes.DATE,
    validate: { min: 0 } 
  },
  horarioInicio: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  horaFin: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  legajoEnfermero: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  idSala: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  }
});

export default turnoEnfermeria;