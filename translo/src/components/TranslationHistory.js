import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Header, HeaderWrapper } from './common';

const TranslationHistory = () => {
	return (
		<ImageBackground 
			source={require('../img/default_background.jpg')} 
			style={{ width: '100%', height: '100%' }}
		>
			<View style={{ marginTop: 25 }} />
			<HeaderWrapper>
				<Header headerText="Translation History" />
			</HeaderWrapper>
		</ImageBackground>
	);
};

export default TranslationHistory;
