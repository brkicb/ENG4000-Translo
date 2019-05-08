import React from 'react';
import { View } from 'react-native';

const ButtonWrapper = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		padding: 10,
		backgroundColor: 'transparent',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative'
	}
};

export { ButtonWrapper };
