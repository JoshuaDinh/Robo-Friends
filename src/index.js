import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import Card from './Card';
import { robots } from './robots';
import App from './App'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App /> ,document.getElementById('root'));
serviceWorker.unregister();
