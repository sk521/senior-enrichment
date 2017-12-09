const Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('Campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://goo.gl/o8v69e"
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Campus
