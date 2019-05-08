import React from 'react';
import { Text, View } from 'react-native';

const SubHeader = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<View onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</View>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#d3d3d3',
		fontSize: 28,
		fontWeight: '600',
		marginTop: 7,
		marginBottom: 7
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'center'
	}
};

export { SubHeader };
