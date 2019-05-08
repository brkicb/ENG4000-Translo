import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { ButtonWrapper, MainButton } from './common';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
	renderLastSlide(index) {
		if (index === this.props.data.length - 1) {
			return (
				<ButtonWrapper>
					<View style={{ marginTop: 150 }} />
					<MainButton onPress={this.props.onContinue}>
						Continue
					</MainButton>
				</ButtonWrapper>
			);
		}
	}

	renderSlides() {
		return this.props.data.map((slide, index) => {
			return (
				<View key={slide.text} style={styles.slideStyle}>
					<Text style={styles.textStyle}>{slide.text}</Text>
					{this.renderLastSlide(index)}
				</View>
			);
		});
	}

	render() {
		return (
			<ScrollView
				horizontal
				style={{ flex: 1 }}
				pagingEnabled
			>
				{this.renderSlides()}
			</ScrollView>
		);
	}
}

const styles = {
	slideStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH
	},
	textStyle: {
		fontSize: 30,
		color: 'white',
		textAlign: 'center'
	}
};

export default Slides;
