const dbConfig = require("./config.json");
const Sequelize = require("sequelize");

var env = process.env.NODE_ENV || "development"
var config= require(__dirname + "../config/config.json")[env]
const db = {};

if(config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, config);
}


 
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  
  db.articles = require("../articles/articles.model")(sequelize, Sequelize);
  db.products = require("../products/products.model")(sequelize, Sequelize);
  
  module.exports = db; 