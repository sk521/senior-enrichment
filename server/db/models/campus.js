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
    defaultValue: "https://goo.gl/Kj54uW",
    validate: {
      isUrl: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Campus

