import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Sale from './sale';

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    value: {
        type: Sequelize.BIGINT
    }
}, {
    timestamps: false,
    freezeTableName: true,
});

Product.hasMany(Sale, { foreingKey: 'product_id', sourceKey: 'id'});
Sale.belongsTo(Product, { foreingKey: 'product_id', sourceKey: 'id'});

export default Product;