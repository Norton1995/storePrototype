//Import React, Axios for the purposes of posting data
//As well as Stripe checkout for the library's functionality
import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

//Stripe public key, remember the test key differs from the key to be used in production
const stripePK = 'pk_test_nA7gSBCdMdnOzmiE0bZAUFIP';

//URL to post the payment token to, localhost in this example
const serverUrl = 'http://localhost:8080/payment';

//Stripe checkout needs a currency value, 'EUR' or 'USD' are two other popular valid options
const currency = 'GBP';

//If payment is successful, notify user
const success = data => {
  alert('Payment Success!');
};

//If payment is unsuccessful, notify user
const error = data => {
  alert('Payment Error!');
};

//Post Stripe token to the back end server
const sendPayment = (amount, description) => token =>
//Send the following required parameters
  axios.post(serverUrl,
    {description, source: token.id, currency: currency, amount: amount}).then(success).catch(error);

//The Stripe Checkout component to be used within the front end as required
const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={(amount)}
    token={sendPayment(amount, description)}
    currency={currency}
    stripeKey={stripePK}/>

//Exports the Checkout component for use where required within the App
export default Checkout;
