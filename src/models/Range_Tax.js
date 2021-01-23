import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Range_Tax = sequelize.define('range_tax', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    tax_id: {
        type: Sequelize.INTEGER
    },
    start: {
        type: Sequelize.BIGINT
    },
    final: {
        type: Sequelize.BIGINT
    }
},{
    timestamps: false
});

export default Range_Tax;