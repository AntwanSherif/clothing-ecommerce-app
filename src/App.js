import React, { Component } from 'react';
import Header from './components/header/Header';
import Routes from './routes';
import { auth, createUserProfile } from './firebase/firebaseUtils';
import './App.css';

class App extends Component {
	state = {
		currentUser: null	
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if(userAuth) {
				const userRef = await createUserProfile(userAuth);

				userRef.onSnapshot(snapshot => {
					this.setState({ 
						currentUser: snapshot.data()
					}, () => console.log(this.state));
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
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
