const { DataTypes, Model } = require('sequelize');

const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init(
  {
    // Model attributes are defined here
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
    modelName: 'Comment', // We need to choose the model name
  }
);

module.exports = Comment;
