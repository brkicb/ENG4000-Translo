import _ from 'lodash';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED,
	NAME_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	SIGNUP_USER,
	SIGNUP_USER_SUCCESS,
	SIGNUP_USER_FAIL,
	SIGNOUT_USER,
	SIGNOUT_USER_SUCCESS,
	SIGNOUT_USER_FAIL,
	SET_NAME,
	GET_UID
} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const nameChanged = (text) => {
	return {
		type: NAME_CHANGED,
		payload: text
	};
};

export const setName = () => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/userInfo`)
			.on('value', snapshot => {
				firebase.database().ref(`/users/${currentUser.uid}/userInfo`).off();
				const value = _.map(snapshot.val());
				dispatch({ type: SET_NAME, payload: value[0].name });
			});
	};
};

export const getUID = () => {
	const { currentUser } = firebase.auth();

	return {
		type: GET_UID,
		payload: currentUser.uid
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => {
				const { currentUser } = firebase.auth();

				firebase.database().ref(`/users/${currentUser.uid}/userInfo`)
					.on('value', snapshot => {
						const value = _.map(snapshot.val());
						if (value[0].accountType === 'translator') {
							loginUserSuccess(dispatch, user);
						} else {
							loginUserFail(dispatch);
						}
					});
			})
			.catch(() => loginUserFail(dispatch));
	};
};

export const signupUser = ({ email, password, name, accountType, available }) => {
	return (dispatch) => {
		dispatch({ type: SIGNUP_USER });

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => {
				signupUserSuccess(dispatch, user);
				const { currentUser } = firebase.auth();

				firebase.database().ref(`/users/${currentUser.uid}/userInfo`)
					.push({ name, accountType, available })
					.then(() => {});
			})
			.catch(() => signupUserFail(dispatch));
	};
};

export const signoutUser = () => {
	return (dispatch) => {
		dispatch({ type: SIGNOUT_USER });

		firebase.auth().signOut()
			.then(user => signoutUserSuccess(dispatch, user))
			.catch(() => signoutUserFail(dispatch));
	};
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	Actions.main();
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};

const signupUserSuccess = (dispatch, user) => {
	dispatch({
		type: SIGNUP_USER_SUCCESS,
		payload: user
	});

	Actions.main();
};

const signupUserFail = (dispatch) => {
	dispatch({ type: SIGNUP_USER_FAIL });
};

const signoutUserSuccess = (dispatch, user) => {
	dispatch({
		type: SIGNOUT_USER_SUCCESS,
		payload: user
	});

	Actions.auth();
};

const signoutUserFail = (dispatch) => {
	dispatch({ type: SIGNOUT_USER_FAIL });
};
