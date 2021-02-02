import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Range_Tax = sequelize.define('range_tax', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true 
    },
    taxId: {
        type: Sequelize.INTEGER
    },
    start: {
        type: Sequelize.BIGINT
    },
    final: {
        type: Sequelize.BIGINT
    },
    value: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false,
    freezeTableName: true,

});

export default Range_Tax;