import React, { Component } from 'react';
import Header from './components/header/Header';
import Routes from './routes';
import { auth } from './firebase/firebaseUtils';
import './App.css';

class App extends Component {
	state = {
		currentUser: null	
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(currentUser => this.setState({ currentUser }));
	}
	
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Routes />
			</div >
		)
	}
}

export default App;
