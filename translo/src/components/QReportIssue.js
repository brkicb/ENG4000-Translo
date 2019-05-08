import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Header, HeaderWrapper, InfoText } from './common';

const QReportIssue = () => {
	return (
		<ImageBackground 
			source={require('../img/default_background.jpg')} 
			style={{ width: '100%', height: '100%' }}
		>
			<View style={{ marginTop: 25 }} />
			<HeaderWrapper>
				<Header headerText="Reporting an Issue" />
			</HeaderWrapper>
			<HeaderWrapper>
				<Header headerText="with the Translation" />
			</HeaderWrapper>
			<View style={{ marginTop: 20 }} />
			<InfoText>
				If you had any issues, or perhaps were unsatisfied with the translation 
				you received, then you can report your issue to translosupport@gmail.com 
				and we will review the issue.
			</InfoText>
		</ImageBackground>
	);
};

export default QReportIssue;
