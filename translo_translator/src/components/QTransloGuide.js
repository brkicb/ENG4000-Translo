import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Header, HeaderWrapper } from './common';

const QTransloGuide = () => {
	return (
		<ImageBackground 
			source={require('../img/default_background.jpg')} 
			style={{ width: '100%', height: '100%' }}
		>
			<View style={{ marginTop: 25 }} />
			<HeaderWrapper>
				<Header headerText="Translo Guide" />
			</HeaderWrapper>
		</ImageBackground>
	);
};

export default QTransloGuide;
