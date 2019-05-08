import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Header, HeaderWrapper } from './common';

const TermsConditions = () => {
	return (
		<ImageBackground 
			source={require('../img/default_background.jpg')} 
			style={{ width: '100%', height: '100%' }}
		>
			<View style={{ marginTop: 25 }} />
			<HeaderWrapper>
				<Header headerText="Terms & Conditions" />
			</HeaderWrapper>
		</ImageBackground>
	);
};

export default TermsConditions;
