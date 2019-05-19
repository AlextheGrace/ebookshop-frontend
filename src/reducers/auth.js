import axios from 'axios';
const LOGINREQUEST = 'auth/REQUEST';
const LOGINSUCCESS = 'auth/SUCCESS';
const LOGINFAILURE = 'auth/FAILURE';
const LOGOUTSTART = 'LOGOUT_START';
const LOGOUTFAILURE = 'LOGOUT_FAILURE';
const LOGOUTSUCCESS = 'LOGOUT_SUCCESS';

const initialState = {
	error: null,
	isFetching: false,
	user: {},
	auth: false
};
export default (reduxState = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case LOGINREQUEST:
			return {
				...reduxState,
				isFetching: true
			};
		case LOGINSUCCESS:
			return {
				...reduxState,
				isFetching: false,
				auth: payload.auth,
				user: payload.user
			};
		case LOGINFAILURE:
			return {
				...reduxState,
				error: payload.error,
				isFetching: false
			};
		case LOGOUTSTART:
			return {
				...reduxState,
				isFetching: false
			};
		case LOGOUTFAILURE:
			return {
				...reduxState,
				isFetching: false
			};
		case LOGOUTSUCCESS:
			return {
				...reduxState,
				isFetching: false,
				user: {},
				auth: false
			};
		default:
			return reduxState;
	}
};
export const loginAdmin = (username, password) => dispatch => {
	dispatch({ type: LOGINREQUEST });
	return axios({
    method: 'post',
		url: `${process.env.REACT_APP_API_URL}/auth/login`,
		data: { username, password },
		withCredentials: false
	})
		.then(response => {
			console.log(response);
			localStorage.setItem('user', response.data.token);
			dispatch({
				type: LOGINSUCCESS,
				payload: {
					user: response.data.user,
					auth: response.data.auth
				}
			});
		})
		.catch(error => {
			dispatch({
				type: LOGINFAILURE,
				payload: {
					error,
					auth: false
				}
			});
		});
};

export const logoutAdmin = () => dispatch => {
	dispatch({ type: LOGOUTSTART });

	try {
		localStorage.removeItem('user');
		return dispatch({
			type: LOGOUTSUCCESS
		});
	} catch (e) {
		return dispatch({
			type: LOGOUTFAILURE
		});
	}
};
