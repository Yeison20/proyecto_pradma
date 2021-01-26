import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Sale = sequelize.define('sale',{
    product_id: {
        type: Sequelize.INTEGER 
    },
    tax_id: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false,
    freezeTableName: true,
});

export default Sale;