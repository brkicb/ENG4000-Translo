import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		borderColor: '#fff',
		padding: 10,
		backgroundColor: 'transparent',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative'
	}
};

export { CardSection };
