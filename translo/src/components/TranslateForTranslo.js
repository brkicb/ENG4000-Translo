import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, HeaderWrapper, Separator, ButtonWrapper, ButtonPurple, InfoText } from './common';

const TranslateForTranslo = () => {
	return (
		<ImageBackground 
			source={require('../img/default_background.jpg')} 
			style={{ width: '100%', height: '100%' }}
		>
			<View style={{ marginTop: 25 }} />
			<HeaderWrapper>
				<Header headerText="Earn Money" />
			</HeaderWrapper>
			<HeaderWrapper>
				<Header headerText="Translating" />
			</HeaderWrapper>
			<View style={{ marginTop: 40 }} />
			<InfoText>Sign up and get paid to translate</InfoText>
			<View style={{ marginTop: 25 }} />
			<InfoText>
				You will not be eligible for receiving translation with a translator account
			</InfoText>
			<View style={{ marginTop: 25 }} />
			<Separator />
			<Separator />
			<View style={{ marginTop: 25 }} />
			<InfoText>
				Hamilton
			</InfoText>
			<View style={{ marginTop: 75 }} />
			<ButtonWrapper>
				<ButtonPurple onPress={() => Actions.translatorSignUp()} >
					Continue
				</ButtonPurple>
			</ButtonWrapper>
		</ImageBackground>
	);
};

export default TranslateForTranslo;
