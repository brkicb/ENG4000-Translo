import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SignUp = ({ onPress }) => {
	const { buttonStyle, textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>Don't have an account? </Text>
			<TouchableOpacity onPress={onPress}>
				<Text style={buttonStyle}>
					Sign Up
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = {
	viewStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'center'
	},
	buttonStyle: {
		fontSize: 14,
		color: '#fff'
	},
	textStyle: {
		color: '#ddd'
	}
};

export { SignUp };
