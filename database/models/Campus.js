const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {


    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {notEmpty: true}
    },

    imageURL: {
      type: Sequelize.STRING,
      defaultValue: "https://www.nicepng.com/png/detail/888-8880087_college-free-buildings-icons-flaticoncom-high-school-icon.png"
    },


    address: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {notEmpty: true}
    },

 
    description: {
      type: Sequelize.TEXT
    }

});

module.exports = Campus;