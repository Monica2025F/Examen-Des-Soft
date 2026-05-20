import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const medico = sequelize.define('medico', {
  matricula: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: true 
},
  especialidad: { 
    type: DataTypes.STRING,
    validate: { min: 0 } 
  },
  telefono: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  idDepartamento: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  }

});

export default medico;