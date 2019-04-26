import axios from 'axios';
const LOGINREQUEST = 'auth/REQUEST';
const LOGINSUCCESS = 'auth/SUCCESS';
const LOGINFAILURE = 'auth/FAILURE';

const initialState = {
  error: null,
  isFetching: false,
  user: {},
  isAuth: false
}
export default (reduxState = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOGINREQUEST:
      return {
        ...reduxState,
        isFetching: true,
      }
    case LOGINSUCCESS:
      return {
        ...reduxState,
        isFetching: false,
      }
    case LOGINFAILURE:
      return {
        ...reduxState,
        error: payload.error,
        isFetching: false,
      }
    default:
      return reduxState
  }
}
export const loginAdmin = (username, password) => dispatch => {
  dispatch({ type: LOGINREQUEST })
  return axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,{ username, password})
    .then((response) => {
      console.log(response);
      localStorage.setItem('user', response.data.token);
      dispatch({
        type: LOGINSUCCESS,
        payload: {
          user: response.data.user,
          auth: response.data.auth,

        },
      })
    })
    .catch((error) => {
      dispatch({
        type: LOGINFAILURE,
        payload: {
          error,
        },
      })
    })
}