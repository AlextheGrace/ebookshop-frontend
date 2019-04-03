import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import { Book } from './components';
import Main from './Main';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: lightGreen[300],
			main: lightGreen[500],
			dark: lightGreen[700]
		},
		secondary: {
			light: blueGrey[300],
			main: blueGrey[500],
			dark: blueGrey[700]
		},
		type: 'dark'
	}
});

console.log(theme);

render(
	<MuiThemeProvider theme={theme}>
		<Router>
			<Switch>
				<Route path="/" component={Main} />
				<Route path="/books" render={props => <Book {...props} isAuthed={true} />} />
			</Switch>
		</Router>
	</MuiThemeProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
