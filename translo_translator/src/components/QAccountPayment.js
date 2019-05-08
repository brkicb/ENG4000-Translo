import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Header, HeaderWrapper, InfoText } from './common';

const QAccountPayment = () => {
	return (
		<ImageBackground 
			source={require('../img/default_background.jpg')} 
			style={{ width: '100%', height: '100%' }}
		>
			<View style={{ marginTop: 25 }} />
			<HeaderWrapper>
				<Header headerText="Account & Payment" />
			</HeaderWrapper>
			<View style={{ marginTop: 20 }} />
			<InfoText>
				In order to receive a translation, you need to have a payment 
				method in place and be subscribed to the application. In order 
				to put in a payment method, simply navigate to "Options", then 
				"Payment", and from there you can add in your payment information 
				and select which payment method will be your primary payment method.
				You can also add in your payment method through the web application. 
				If you have any further questions, you can contact us at 
				translosupport@gmail.com
			</InfoText>
		</ImageBackground>
	);
};

export default QAccountPayment;
