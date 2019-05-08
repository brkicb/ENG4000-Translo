import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { TextButton, ButtonWrapper, Separator } from './common';

class Options extends Component {
	render() {
		return (
			<ImageBackground 
				source={require('../img/Options_Background.jpg')} 
				style={{ width: '100%', height: '100%' }}
			>
				<View style={{ marginTop: 25 }} />
				<Text style={styles.textStyle}>
					{this.props.name}
				</Text>
				<Separator />
				<Separator />
				<ButtonWrapper>
					<TextButton onPress={() => Actions.help()} >
						Help
					</TextButton>
				</ButtonWrapper>
				<Separator />
				<ButtonWrapper>
					<TextButton onPress={() => Actions.payment()} >
						Payment
					</TextButton>
				</ButtonWrapper>
				<Separator />
				<ButtonWrapper>
					<TextButton onPress={() => Actions.settings()} >
						Settings
					</TextButton>
				</ButtonWrapper>
				<Separator />
				<ButtonWrapper>
					<TextButton onPress={() => Actions.legal()} >
						Legal
					</TextButton>
				</ButtonWrapper>
			</ImageBackground>
		);
	}
}

const styles = {
	textStyle: {
		fontSize: 36,
		color: 'white',
		textAlign: 'center',
		marginBottom: 20
	}
};

const mapStateToProps = state => {
	const { name } = state.auth;

	return { name };
};

export default connect(mapStateToProps, {})(Options);
