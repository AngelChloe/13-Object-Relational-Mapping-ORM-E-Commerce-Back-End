// import our database connection from config - connection.js
const { Model, DataTypes } = require('sequelize');

// Initialize Product model (table) by extending off Sequelize's Model class
const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  // Define fields/columns on model
  //  Data model - for table ProductTag
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;