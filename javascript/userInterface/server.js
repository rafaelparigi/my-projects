//express setup
const express = require('express');
const app = express(); //app that handles http requests
const port = 8001;

//handlebars setup
const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

// setup our templating engine
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
});

app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

// serve static assets from the public/ folder
app.use(express.static('/public'));

// support the parsing of incoming requests with urlencoded payloads (e.g. form POST)
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Express server running on port ${port}`));

//UI
const restaurantsRoutes = require('./routes/restaurantsRoutes');
// /restaurants will apply to the start of every path/url inside restaurantsRoutes
app.use('/restaurants', restaurantsRoutes);

const menusRoutes = require('./routes/menusRoutes');
// /menus will apply to the start of every path/url inside menusRoutes
app.use('/menus', menusRoutes);

// serve an index page
app.get('/', (req, res) => {
    res.render('index');
});

const { connection } = require('./sequelize-connect');
/**
 * Synchronize all models with db
 */
 async function start() {
    await connection.sync({
      logging: false, // don't log everything
      //force: true, // drop tables each time
    });
  }
  
  // run start and log any errors
  start()
    .then(() => console.log('Sequelize connected'))
    .catch((e) => console.log(`Caught error: ${e}`));

module.exports = {app};