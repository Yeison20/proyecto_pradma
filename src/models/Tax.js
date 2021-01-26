import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Range_Tax from './Range_Tax';
import Sale from './sale';

const Tax = sequelize.define('tax',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    }
},{
    timestamps: false,
    freezeTableName: true,

});

Tax.hasMany(Sale, { foreingKey: 'tax_id', sourceKey: 'id'});
Sale.belongsTo(Tax, { foreingKey: 'tax_id', sourceKey: 'id'});

Tax.hasMany(Range_Tax, { foreingKey: 'tax_id', sourceKey: 'id'});
Range_Tax.belongsTo(Tax, { foreingKey: 'tax_id', souceKey: 'id'});

export default Tax;