import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/index';

import './index.css';
import App from './App';

//To have access to the store , the provider must wrap the component 
//Tree.Provider with prop as our store , provided by react-redux
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
