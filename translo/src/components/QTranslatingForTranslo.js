import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Header, HeaderWrapper, InfoText } from './common';

const QTranslatingForTranslo = () => {
	return (
		<ImageBackground 
			source={require('../img/default_background.jpg')} 
			style={{ width: '100%', height: '100%' }}
		>
			<View style={{ marginTop: 25 }} />
			<HeaderWrapper>
				<Header headerText="Translating" />
			</HeaderWrapper>
			<HeaderWrapper>
				<Header headerText="for Translo" />
			</HeaderWrapper>
			<View style={{ marginTop: 20 }} />
			<InfoText>
				If you would like to be a translator for Translo, either navigate on the app 
				to "options", then to "Translate for Translo", then from there 
				simply press continue to go to a sign up form. After you sign up, we will review your 
				information and if you are qualified, you will be called in for an interview. 
				You can also go to our website and navigate to where you can sign up, and 
				again it will be the same procedure as mentioned.
			</InfoText>
			<InfoText>
				Keep in mind that you will need a separate account if you are a translator. 
				You will also either need to download the Translo translator app, or you 
				can use the web application. If there are any further questions feel free to 
				contact us at translosupport@gmail.com
			</InfoText>
		</ImageBackground>
	);
};

export default QTranslatingForTranslo;
