import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
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
		fontSize: 20,
		fontWeight: '600',
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 5,
		paddingRight: 5
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'center',
		backgroundColor: '#50D0C1',
		borderRadius: 50,
		marginLeft: 75, 
		marginRight: 75
	}
};

export { Button };
