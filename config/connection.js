require('dotenv').config();
const fs = require ('fs');
const path = require ('path');

const Sequelize = require('sequelize');

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL,{
    dialectOptions:{
      ssl: {
        require: true
      }
    }
  })
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

    const schemaquery = fs.readFileSync(path.join(__dirname, '../db/schema.sql'), 'utf-8')
    sequelize.query(schemaquery).then(()=> console.log('schema uploaded'))
module.exports = sequelize;
