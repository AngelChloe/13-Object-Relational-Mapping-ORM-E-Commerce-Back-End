// import our database connection from config - connection.js
const { Model, DataTypes } = require('sequelize');

// import our database connection from config - connection.js
const sequelize = require('../config/connection.js');

// Initialize tag model (table) by extending off Sequelize's Model class
class Tag extends Model { }

Tag.init(
  {
    // Define fields/columns on model
    //  Data model - for table Tag
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;