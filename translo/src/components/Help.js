import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { 
	Header, 
	HeaderWrapper, 
	Separator, 
	SubHeader, 
	ButtonWrapper, 
	TextButton 
} from './common';

const Help = () => {
	return (
		<ImageBackground 
			source={require('../img/default_background.jpg')} 
			style={{ width: '100%', height: '100%' }}
		>
			<View style={{ marginTop: 25 }} />
			<HeaderWrapper>
				<Header headerText="Help" />
			</HeaderWrapper>
			<View style={{ marginTop: 20 }} />
			<Separator />
			<Separator />
			<ButtonWrapper>
				<TextButton onPress={() => Actions.qReportIssue()} >
					Reporting Issue
				</TextButton>
			</ButtonWrapper>
			<Separator />
			<Separator />
			<ButtonWrapper>
				<SubHeader>
					Question Topics
				</SubHeader>
			</ButtonWrapper>
			<Separator />
			<ButtonWrapper>
				<TextButton onPress={() => Actions.qTranslatorReview()} >
					Translator Review
				</TextButton>
			</ButtonWrapper>
			<ButtonWrapper>
				<TextButton onPress={() => Actions.qAccountPayment()} >
					Account and Payment
				</TextButton>
			</ButtonWrapper>
			<ButtonWrapper>
				<TextButton onPress={() => Actions.qTransloGuide()} >
					Translo Guide
				</TextButton>
			</ButtonWrapper>
			<ButtonWrapper>
				<TextButton onPress={() => Actions.qAccessibility()} >
					Accessibility
				</TextButton>
			</ButtonWrapper>
			<Separator />
			<Separator />
			<ButtonWrapper>
				<TextButton onPress={() => Actions.qTranslatingForTranslo()} >
					Translating for Translo
				</TextButton>
			</ButtonWrapper>
		</ImageBackground>
	);
};

export default Help;
