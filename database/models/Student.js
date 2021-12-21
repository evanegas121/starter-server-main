const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },

  imageURL: {
    type: Sequelize.STRING,
  },

  gpa: {
    type: Sequelize.DECIMAL(4),
    validate: {max: 4, min: 0}
  }

});

module.exports = Student;