import React, { Component } from 'react';
import axios from 'axios';
import { View, ImageBackground, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  TwilioVideoLocalView,
  TwilioVideoParticipantView,
  TwilioVideo
} from 'react-native-twilio-video-webrtc';
import { connect } from 'react-redux';
import { setName, getUID } from '../actions';
import { Header, HeaderWrapper, MainButton, TextButton, ButtonWrapper, Spinner } from './common';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Main extends Component {
	state = {
		isAudioEnabled: true,
		isVideoEnabled: true,
		status: 'disconnected',
		participants: new Map(),
		videoTracks: new Map(),
		roomName: '',
		token: '',
		uid: '',
		translatorName: '',
		loading: false
	};

	componentWillMount() {
		this.props.setName();
		this.props.getUID();

		this.setState({ uid: this.props.uid });
	}

	onRenderConnectButton() {
		if (this.state.loading) {
			return <Spinner size="large" />;
		}
		return (
			<MainButton onPress={this.onConnectButtonPress}>
				Connect Now
			</MainButton>
		);
	}

	onConnectButtonPress = () => {
		this.setState({ loading: true });
		axios.post('https://us-central1-translo.cloudfunctions.net/generateToken', { uid: this.props.uid })
			.then(response => {
				this.setState({ token: response.data.token, roomName: response.data.room });
				this.refs.twilioVideo.connect({ roomName: this.state.roomName, accessToken: this.state.token });
				this.setState({ status: 'connecting' });
			})
			.catch(err => {
				console.log(err);
			});
	}

	onEndButtonPress = () => {
		this.refs.twilioVideo.disconnect();
		this.setState({ status: 'disconnected' });
	}

	onMuteButtonPress = () => {
		this.refs.twilioVideo.setLocalAudioEnabled(!this.state.isAudioEnabled)
		.then(isEnabled => this.setState({ isAudioEnabled: isEnabled }));
	}

	onFlipButtonPress = () => {
		this.refs.twilioVideo.flipCamera();
	}

	onRoomDidConnect = () => {
		this.setState({ status: 'connected' });
		this.setState({ loading: false });
	}

	onRoomDidDisconnect = ({ roomName, error }) => {
		console.log('room disconnection error:');
		console.log('ERROR: ', error);

		this.setState({ status: 'disconnected' });
		this.setState({ token: '' });
		this.setState({ roomName: '' });
		this.setState({ loading: false });
	}

	onRoomDidFailToConnect = (error) => {
		console.log('room fail to connect error:');
		console.log('ERROR: ', error);

		this.setState({ status: 'disconnected' });
		this.setState({ token: '' });
		this.setState({ roomName: '' });
		this.setState({ loading: false });
	}

	onParticipantAddedVideoTrack = ({ participant, track }) => {
		console.log('onParticipantAddedVideoTrack: ', participant, track);

		this.setState({
			videoTracks: new Map([
				...this.state.videoTracks,
				[track.trackSid, { participantSid: participant.sid, videoTrackSid: track.trackSid }]
			]),
		});

		axios.post('https://us-central1-translo.cloudfunctions.net/retrieveTranslatorName', { uid: this.state.roomName })
			.then(response => {
				this.setState({ translatorName: response.data.name });
				this.setState({ status: 'connected' });
			})
			.catch(err => {
				console.log(err);
			});
	}

	onParticipantRemovedVideoTrack = ({ participant, track }) => {
		console.log('onParticipantRemovedVideoTrack: ', participant, track);

		const videoTracks = this.state.videoTracks;
		videoTracks.delete(track.trackSid);

		this.setState({ videoTracks: new Map([...videoTracks]) });
		this.setState({ translatorName: '' });
	}

	renderSectionOne() {
		if (this.state.status === 'disconnected') {
			return (
				<View>
					<View style={{ marginTop: 70 }} />
					<HeaderWrapper>
						<Header headerText="TRANSLO" />
					</HeaderWrapper>
					<View style={{ marginTop: 140 }} />
					<ButtonWrapper>
						{this.onRenderConnectButton()}
					</ButtonWrapper>
					<View style={{ marginTop: 20 }} />
					<ButtonWrapper>
						<TextButton onPress={() => Actions.scheduleTime()} >
							Schedule a Time
						</TextButton>
					</ButtonWrapper>
				</View>
			);
		}
	}
	
	renderConnectedSection() {
		if (this.state.status === 'connected') {
			return (
				<View>
					<View style={styles.container}>
							<Text style={styles.textStyle}>Connected to</Text>
							<Text style={styles.textStyle}>{this.state.translatorName}</Text>
						</View>
					<View style={styles.remoteGrid}>
						{
							Array.from(this.state.videoTracks, ([trackSid, trackIdentifier]) => {
								return (
									<TwilioVideoParticipantView
										style={styles.remoteVideo}
										key={trackSid}
										trackIdentifier={trackIdentifier}
									/>
								);
							})
						}
					</View>
				</View>
			);
		}
	}

	renderSectionTwo() {
		if (this.state.status === 'connected' || this.state.status === 'connecting') {
			return (
				<View style={styles.callContainer}>
					{this.renderConnectedSection()}
					<View style={styles.optionsContainer} >
						<TouchableOpacity
							style={styles.optionButton}
							onPress={this.onEndButtonPress}
						>
						<Text style={styles.buttonText}>End</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.optionButton}
							onPress={this.onMuteButtonPress}
						>
							<Text style={styles.buttonText}>{ this.state.isAudioEnabled 
								? 'Mute' : 'Unmute' }</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.optionButton}
							onPress={this.onFlipButtonPress}
						>
							<Text style={styles.buttonText}>Flip</Text>
						</TouchableOpacity>
						<TwilioVideoLocalView
							enabled={true}
							style={styles.localVideo}
						/>
					</View>
				</View>
			);
		}
	}

	render() {
		return (
			<ImageBackground 
				source={require('../img/Main_Background.jpg')} 
				style={{ width: '100%', height: '100%' }}
			>
				<View style={{ marginTop: 25 }} />
				{this.renderSectionOne()}
				{this.renderSectionTwo()}
				<TwilioVideo
					ref="twilioVideo"
					onRoomDidConnect={this.onRoomDidConnect}
					onRoomDidDisconnect={this.onRoomDidDisconnect}
					onRoomDidFailToConnect={this.onRoomDidFailToConnect}
					onParticipantAddedVideoTrack={this.onParticipantAddedVideoTrack}
					onParticipantRemovedVideoTrack={this.onParticipantRemovedVideoTrack}
				/>
			</ImageBackground>
		);
	}
}

const styles = {
	container: {
		justifyContent: 'center'
  	},
  	callContainer: {
	    flex: 1,
	    position: 'absolute',
	    bottom: 0,
	    top: 0,
	    left: 0,
	    right: 0
  	},
  	welcome: {
	    fontSize: 30,
	    textAlign: 'center',
	    paddingTop: 40
  	},
  	input: {
	    height: 50,
	    borderWidth: 1,
	    marginRight: 70,
	    marginLeft: 70,
	    marginTop: 50,
	    textAlign: 'center',
	    backgroundColor: 'white'
  	},
  	button: {
   	 marginTop: 100
  	},
  	localVideo: {
	    flex: 1,
	    width: SCREEN_WIDTH / 4,
	    height: SCREEN_HEIGHT / 6,
	    position: 'absolute',
	    right: 10,
	    bottom: 10
  	},
  	remoteGrid: {
	    flex: 1,
	    flexDirection: 'row',
	    flexWrap: 'wrap'
  	},
  	remoteVideo: {
	    marginTop: 20,
	    marginLeft: 10,
	    marginRight: 10,
	    width: SCREEN_WIDTH - 20,
	    height: SCREEN_HEIGHT / 2,
  	},
  	optionsContainer: {
	    position: 'absolute',
	    left: 0,
	    bottom: 0,
	    right: 0,
	    height: 100,
	    flexDirection: 'row',
	    alignItems: 'center'
  	},
  	optionButton: {
	    width: 60,
	    height: 60,
	    marginLeft: 10,
	    marginRight: 10,
	    borderRadius: 100 / 2,
	    backgroundColor: '#00dcde',
	    justifyContent: 'center',
	    alignItems: 'center'
  	},
  	buttonText: {
		fontSize: 16,
		color: 'white'
  	},
  	textStyle: {
  		fontSize: 36,
  		textAlign: 'center',
  		color: 'white'
  	}
};

const mapStateToProps = state => {
	const { uid } = state.auth;

	return { uid };
};

export default connect(mapStateToProps, { setName, getUID })(Main);
