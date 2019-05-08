import React from 'react';
import { View } from 'react-native';

const HeaderWrapper = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		marginLeft: 5,
		marginRight: 5
	}
};

export { HeaderWrapper };
