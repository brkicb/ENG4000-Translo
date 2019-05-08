import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, HeaderWrapper, Separator, ButtonWrapper, TextButton } from './common';

const Legal = () => {
	return (
		<ImageBackground 
			source={require('../img/default_background.jpg')} 
			style={{ width: '100%', height: '100%' }}
		>
			<View style={{ marginTop: 25 }} />
			<HeaderWrapper>
				<Header headerText="Legal" />
			</HeaderWrapper>
			<View style={{ marginTop: 20 }} />
			<Separator />
			<Separator />
			<ButtonWrapper>
				<TextButton onPress={() => Actions.termsConditions()} >
					Terms and Conditions
				</TextButton>
			</ButtonWrapper>
			<Separator />
			<ButtonWrapper>
				<TextButton onPress={() => Actions.privacyPolicy()} >
					Privacy Policy
				</TextButton>
			</ButtonWrapper>
			<Separator />
			<ButtonWrapper>
				<TextButton onPress={() => Actions.copyright()} >
					Copyright
				</TextButton>
			</ButtonWrapper>
			<Separator />
			<ButtonWrapper>
				<TextButton onPress={() => Actions.locationInformation()} >
					Location Information
				</TextButton>
			</ButtonWrapper>
		</ImageBackground>
	);
};

export default Legal;
