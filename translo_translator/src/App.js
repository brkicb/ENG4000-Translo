import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyD7gueU22bi5jfwtIY8ZsT3QECYJ4KWlYE',
			authDomain: 'translo.firebaseapp.com',
			databaseURL: 'https://translo.firebaseio.com',
			projectId: 'translo',
			storageBucket: 'translo.appspot.com',
			messagingSenderId: '215430514809'
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
					<Router />
			</Provider>
		);
	}
}

export default App;
