const { DataTypes, Model } = require('sequelize');

const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isEmpty: false,
      },
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Post', // We need to choose the model name
  }
);

module.exports = Post;
