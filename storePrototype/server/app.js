//Required modules and files, including routes and middleware
const express = require('express');
const app = express();
const path = require('path');
const serverEnv = {PORT: process.env.PORT || 8080,};
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

//Use required Express server middleware
const expressConf = app => {
  app.use(cors());
  app.use(bodyParser.json());
};

//Apply middleware config to app
expressConf(app);
//Apply routes to app
routes(app);

//Listen on port declared as environment variable
app.listen(serverEnv.PORT, error => {
  if (error) throw error;
  console.log('Server running at port ' + serverEnv.PORT + ' Try /products for product data and /skus for sku data');
});


//Disable x-powered-by Express header to prevent enumeration
app.disable('x-powered-by');
