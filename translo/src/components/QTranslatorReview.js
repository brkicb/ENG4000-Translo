import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Header, HeaderWrapper, InfoText } from './common';

const QTranslatorReview = () => {
	return (
		<ImageBackground 
			source={require('../img/default_background.jpg')} 
			style={{ width: '100%', height: '100%' }}
		>
			<View style={{ marginTop: 25 }} />
			<HeaderWrapper>
				<Header headerText="Translator Review" />
			</HeaderWrapper>
			<View style={{ marginTop: 20 }} />
			<InfoText>
				If you would like to review the experience you had with a 
				translator, then simple after the translation you can leave 
				a review, or if you would like, you can navigate to "Options", 
				then "Translation History" to view a history of translators 
				that translated for you. Then you can simply leave a review for 
				one of them from there.  You can also do this through the web 
				application after a translation or by navigating to 
				"Translation History" then you can simply review any of the 
				translators that have translated for you in the past. If you 
				have any further questions, you can contact us at translosupport@gmail.com
			</InfoText>
		</ImageBackground>
	);
};

export default QTranslatorReview;
