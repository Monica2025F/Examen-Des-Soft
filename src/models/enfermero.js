import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const enfermero = sequelize.define('enfermero', {
  legajo: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: true 
}

});

export default enfermero;