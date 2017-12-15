import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/main/Main.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
