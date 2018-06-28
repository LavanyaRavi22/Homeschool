import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import Classes from './Classes';
import Printables from './Printables';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/gallery" component={Gallery} />
		<Route path="/classes" component={Classes} />
		<Route path="/printables" component={Printables} />
	</Switch>
);

export default Main;
