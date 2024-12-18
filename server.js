const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection')
const {seedAll} = require('./seeds')
let flagSeed = false

const app = express();
const PORT = process.env.PORT || 7243;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, async () => {
  await sequelize.authenticate()
 if(flagSeed){
  seedAll()
 } 

  console.log(`App listening on port ${PORT}!`);
});
