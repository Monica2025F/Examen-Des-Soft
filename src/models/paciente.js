
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const paciente = sequelize.define('paciente', {
  dni: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  nombreCompleto: { 
    type: DataTypes.STRING, 
    allowNull: true 
},
  fechaNacimiento: { 
    type: DataTypes.DATE,
    validate: { min: 0 } 
  },
  direccion: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  telefono: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  contactoEmergencia: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  }

});

export default paciente;