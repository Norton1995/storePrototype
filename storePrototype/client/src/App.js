import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Import the page components
import Home from './pages/Home.jsx';
import Header from './pages/components/Header.jsx';
import Footer from './pages/components/Footer.jsx';
import Products from './pages/Products.jsx';
import FAQ from './pages/InfoPage.jsx';

class App extends Component {
    render() {
        return (
      <div>
      <Router>
        <div>
{/*Based on the URL path, display the following components, header and footer will be displayed at all
times as "/" will always be present on a path, using React Router*/}
          <Route path="/" component={Header}/>
          <Route exact path="/" component={Home}/>
          <Route path="/products" component={Products}/>
          <Route path="/about" component={FAQ}/>
          <Route path="/" component={Footer}/>
        </div>
      </Router>
    </div>
    );
  }
}

//Export app for use within project
export default App;
