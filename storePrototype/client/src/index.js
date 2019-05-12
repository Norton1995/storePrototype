import React from 'react';
import ReactDOM from 'react-dom';
//Main app component, import from views folder
import App from './App';
import registerServiceWorker from './logic/registerServiceWorker';
import './styles/App.css';

//render App.js, check it out at "client/views/App.js"

ReactDOM.render(<App />, document.getElementById('root'));

//Activate service worker for use in production, stanfard with Create React App projects
//See more at "client/logic/registerServiceWorker.js"
registerServiceWorker();
