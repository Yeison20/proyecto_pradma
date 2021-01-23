import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Range_Tax from './Range_Tax';

const Tax = sequelize.define('tax',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    product_id: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.TEXT
    }
},{
    timestamps: false
});

Tax.hasMany(Range_Tax, { foreingKey: 'tax_id', sourceKey: 'id'});
Range_Tax.belongsTo(Tax, { foreingKey: 'tax_id', souceKey: 'id'});

export default Tax;