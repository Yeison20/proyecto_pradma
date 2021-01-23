import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Tax from './Tax';

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

Product.hasMany(Tax, { foreingKey: 'product_id', sourceKey: 'id'});
Tax.belongsTo(Product, { foreingKey: 'product_id', sourceKey: 'id'});

export default Product;