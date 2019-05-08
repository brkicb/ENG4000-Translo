import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, signupUser, nameChanged } from '../actions';
import { 
	Header, 
	HeaderWrapper, 
	Card, 
	CardSection, 
	Button, 
	Input,
	ButtonWrapper, 
	Spinner 
} from './common';

class SignUpForm extends Component {
	state = {
		accountType: 'translator',
		available: false
	}

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onNameChange(text) {
		this.props.nameChanged(text);
	}

	onButtonPress() {
		const { email, password, name } = this.props;
		const accountType = this.state.accountType;
		const available = this.state.available;

		this.props.signupUser({ email, password, name, accountType, available });
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				CREATE ACCOUNT
			</Button>
		);
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

	render() {
		return (
			<ImageBackground 
				source={require('../img/SignUp_Screen_Background.jpg')} 
				style={{ width: '100%', height: '100%' }}
			>
				<View style={{ marginTop: 25 }} />
				<HeaderWrapper>
					<Header headerText="Sign Up" />
				</HeaderWrapper>
				<View style={{ marginTop: 75 }} />
				<Card>
					<CardSection>
						<Input 
							label="Name"
							placeholder="Full Name"
							onChangeText={this.onNameChange.bind(this)}
							value={this.props.name}
						/>
					</CardSection>
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
							label="Password"
							placeholder="password"
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.props.password}
						/>
					</CardSection>
					{this.renderError()}
					<View style={{ marginTop: 60 }} />
					<ButtonWrapper>
						{this.renderButton()}
					</ButtonWrapper>
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
	emailChanged, passwordChanged, signupUser, nameChanged 
})(SignUpForm);
