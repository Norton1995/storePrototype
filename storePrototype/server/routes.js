const stripeConfig = require('stripe');
//Stripe API key, be sure to use test or production mode key where appropriate
const stripeSK = 'sk_test_RZrgX4ZSrduH2ITNTOjrWsE1';
const stripe = stripeConfig(stripeSK);

//Variables used later on to process returned product and SKU data
var productData;
var parsedData;
var skuData;
var parsedSku;

//If there is an error communicating with Stripe server, return error or success
const errorMessage = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
        res.status(500).send({
            error: stripeErr
        });
    } else {
        res.status(200).send({
            success: stripeRes
        });
    }
}

//Declares payment route for the server, the Stripe payment token and response from server will be routed to this endpoint
const paymentRoute = app => {
    app.get('/payment', (req, res) => {
        res.send('Welcome to the LockdownJS server, this payment route will recieve the Stripe token from the front end, find product and SKU data at /products and /skus respectively')
    });

//Creates a charge using the Stripe token taken from the front end
    app.post('/payment', (req, res) => {
        stripe.charges.create(req.body, errorMessage(res));
    });
    return app;
};

//Creates a products route, product data pulled from the back end will be routed through this endpoint
const productRoute = app => {
//Uses Stripe API call to list products using Stripe secret key
    stripe.products.list({},
        function(err, product) {
            if (err) {
                console.log("Error getting Products");
            } else {
              //Parses the data into the correct format
                productData = JSON.stringify(product);
                parsedData = JSON.parse(productData);
            }
        });

//Uses Stripe API call to collect SKU data (needed for individual product prices)
    stripe.skus.list({},
        function(err, sku) {
            if (err) {
                console.log("Error getting Sku's");
            } else {
              //Parses the data into the correct format
                skuData = JSON.stringify(sku);
                parsedSku = JSON.parse(skuData);
            }
        });

        app.get('/products', (req, res) => {
          //Sends parsed product data to endpoint ready for use on front end
            res.send({
                parsedData
            })
        });

    app.get('/skus', (req, res) => {
      //Sends parsed SKU data to endpoint ready for use on front end
        res.send({
            parsedSku
        })
    });
};

//Enables the product and payment routes for use in the Express server/app
const routes = app => {
    paymentRoute(app);
    productRoute(app);
};

//Exports routes for use in app.js
module.exports = routes;
