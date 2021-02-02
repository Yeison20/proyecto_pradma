import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Range_Tax from './Range_Tax';
import Sale from './sale';

const Tax = sequelize.define('tax',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true 
    },
    name: {
        type: Sequelize.TEXT
    }
},{
    timestamps: false,
    freezeTableName: true,

});

Tax.hasMany(Range_Tax, { foreingKey: 'taxId', sourceKey: 'id'});
Range_Tax.belongsTo(Tax, { foreingKey: 'taxId', souceKey: 'id'});

Tax.hasMany(Sale, { foreingKey: 'taxid', sourceKey: 'id'});
Sale.belongsTo(Tax, { foreingKey: 'taxid', sourceKey: 'id'});



export default Tax;