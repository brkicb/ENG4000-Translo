import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const PurpleOutlineButton = ({ onPress, children }) => {
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
		color: '#AD60F2',
		fontSize: 30,
		fontWeight: '600',
		paddingTop: 18,
		paddingBottom: 18,
		paddingLeft: 8,
		paddingRight: 8
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'center',
		borderWidth: 3,
		borderColor: '#AD60F2',
		borderRadius: 50,
		marginLeft: 45, 
		marginRight: 45
	}
};

export { PurpleOutlineButton };
