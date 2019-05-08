import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const TextButton = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#fff',
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

export { TextButton };
