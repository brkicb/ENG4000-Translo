import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { 
	Card, 
	CardSection, 
	Input, 
	Button, 
	ButtonWrapper, 
	Spinner, 
	Header, 
	HeaderWrapper,
	SignUp
} from './common';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	onSignUpPress() {
		Actions.signup();
	}

	renderError() {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: 'transparent', marginTop: 10, height: 40 }} >
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>
				</View>
			);
		}
		return (
			<View style={{ backgroundColor: 'transparent', marginTop: 10, height: 40 }} />
		);
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				LOGIN
			</Button>
		);
	}

	render() {
		return (
			<ImageBackground 
				source={require('../img/Login_Screen_Background.jpg')} 
				style={{ width: '100%', height: '100%' }}
			>
				<View style={{ marginTop: 30 }} />
				<HeaderWrapper>
					<Header headerText="Translo" />
					<Header headerText="Translator" />
				</HeaderWrapper>
				<View style={{ marginTop: 70 }} />
				<Card>
					<CardSection>
						<Input
							label="Email"
							placeholder="email@gmail.com"
							onChangeText={this.onEmailChange.bind(this)}
							value={this.props.email}
						/>
					</CardSection>
					<CardSection>
						<Input
							secureTextEntry
							label="password"
							placeholder="password"
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.props.password}
						/>
					</CardSection>
					{this.renderError()}
					<View style={{ marginTop: 30 }} />
					<ButtonWrapper>
						{this.renderButton()}
					</ButtonWrapper>
					<SignUp onPress={this.onSignUpPress.bind(this)} />
				</Card>
			</ImageBackground>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading, name } = auth;

	return { email, password, error, loading, name };
};

export default connect(mapStateToProps, { 
	emailChanged, passwordChanged, loginUser 
})(LoginForm);
