import React from 'react';
import { Text, View } from 'react-native';

const InfoText = ({ children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<View style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</View>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 18,
		fontWeight: '600',
		paddingLeft: 10,
		paddingRight: 10,
		marginBottom: 10
	},
	buttonStyle: {
		alignSelf: 'center'
	}
};

export { InfoText };
