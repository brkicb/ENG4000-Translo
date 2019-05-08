import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Slides from './Slides';

const SLIDE_DATA = [
	{ text: 'I am deaf person. This application will connect us to a translator and allow us to communicate.' },
	// { text: 'Welcome to Translo. Translo is an application that allows deaf users to connect to translators to establish communication with non-deaf individuals' },
	{ text: 'You need to first create an account, and after that you can click the \'Connect Now\' button which will search for available translators to connect you to' },
	{ text: 'It\'s that easy, click the button below to get started!' }
];

class WelcomeScreen extends Component {
	onContinueButtonPress = () => {
		Actions.login();
	}

	render() {
		return (
			<ImageBackground 
				source={require('../img/default_background.jpg')} 
				style={{ width: '100%', height: '100%' }}
			>
				<Slides data={SLIDE_DATA} onContinue={this.onContinueButtonPress} />
			</ImageBackground>
		);
	}
}

export default WelcomeScreen;
