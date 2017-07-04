import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Match, Route } from 'react-router-dom';

import App from "./components/App";

import './css/style.css';

import StorePicker from "./components/StorePicker";
import NotFound from './components/NotFound';

const Root = () => {
	return (
		<BrowserRouter>
		<div>
		<Route path="/" component={StorePicker} />
		<Route path="/store/:storeId" component={App} />
		</div>
		</BrowserRouter>
		)
}

render(<Root/>, document.querySelector('#main'));