
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const tratamiento = sequelize.define('tratamiento', {
  idTratamiento: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  descripcion: { 
    type: DataTypes.STRING, 
    allowNull: true 
},
 fecha: { 
    type: DataTypes.DATE, 
    allowNull: true 
},
  idHistoria: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
   matriculaMedica: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  }

  

});

export default tratamiento;