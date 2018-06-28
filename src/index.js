import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './components/App';
import './styles/App.css';

render((<HashRouter>
			<App />
		</HashRouter>),
		document.getElementById('root'));