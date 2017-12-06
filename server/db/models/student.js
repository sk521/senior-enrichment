const Sequelize = require('sequelize');
const db = require('../index');

const Student = db.define('Students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 4.0
    }
  },
  fullName: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
    }
  }
})

module.exports = Student
