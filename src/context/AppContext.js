import React, { Component } from 'react';

const AppContext = React.createContext();

export const AppConsumer = AppContext.Consumer;

class AppProvider extends Component {
	state = {
		username: 'alexx',
		password: null,
		isAuth: false,
		token: null
	};
	render() {
		return (
			// value prop is where we define what values
			// that are accessible to consumer components
			<AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>
		);
	};
};

export default AppProvider;
