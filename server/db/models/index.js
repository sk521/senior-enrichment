'use strict';

const db = require('../index');
const Campus = require('./campus');
const Student = require('./student');


Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  db,
  Campus,
  Student
}
