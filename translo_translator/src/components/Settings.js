import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';
import { 
	Header, 
	HeaderWrapper, 
	ButtonWrapper, 
	Spinner, 
	Separator, 
	TextButton
} from './common';

class Settings extends Component {
	onButtonPress() {
		this.props.signoutUser();
	}

	onEditEmail() {
		Actions.editEmail();
	}

	onEditPassword() {
		Actions.editPassword();
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return (
			<TextButton onPress={this.onButtonPress.bind(this)}>
				Sign Out
			</TextButton>
		);
	}

	render() {
		return (
			<ImageBackground 
				source={require('../img/default_background.jpg')} 
				style={{ width: '100%', height: '100%' }}
			>
				<View style={{ marginTop: 25 }} />
				<HeaderWrapper>
					<Header headerText="Account Settings" />
				</HeaderWrapper>
				<Text style={styles.textStyle}>
					{this.props.name}
				</Text>
				<Separator />
				<Separator />
				<ButtonWrapper>	
					<TextButton onPress={this.onEditEmail.bind(this)}>
						Edit Email
					</TextButton>
				</ButtonWrapper>
				<Separator />
				<ButtonWrapper>							
					<TextButton onPress={this.onEditPassword.bind(this)}>
						Edit Password
					</TextButton>
				</ButtonWrapper>
				<Separator />
				<Separator />
				<ButtonWrapper>
					{this.renderButton()}
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
	const { loading, name } = state.auth;

	return { loading, name };
};

export default connect(mapStateToProps, { 
	signoutUser
})(Settings);
