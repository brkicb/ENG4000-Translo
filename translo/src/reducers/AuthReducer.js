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
} from '../actions/types';

const INITIAL_STATE = { 
	email: '',
	password: '',
	name: '',
	user: null,
	error: '',
	loading: false,
	uid: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case NAME_CHANGED:
			return { ...state, name: action.payload };
		case SET_NAME:
			return { ...state, name: action.payload };
		case GET_UID:
			return { ...state, uid: action.payload };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case LOGIN_USER_SUCCESS:
			return { ...state, email: '', password: '', error: '', loading: false, user: action.payload };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed.', loading: false };
		case SIGNUP_USER:
			return { ...state, loading: true, error: '' };
		case SIGNUP_USER_SUCCESS:
			return { ...state, email: '', password: '', error: '', loading: false, user: action.payload };
		case SIGNUP_USER_FAIL:
			return { ...state, error: 'Authentication Failed.', loading: false };
		case SIGNOUT_USER:
			return { ...state, loading: true };
		case SIGNOUT_USER_SUCCESS:
			return { email: '', password: '', name: '', user: null, error: '', loading: false };
		case SIGNOUT_USER_FAIL:
			return { ...state, loading: false };
		default:
			return state;
	}
};
