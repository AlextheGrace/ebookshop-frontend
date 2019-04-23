import axios from 'axios';
const LOGINREQUEST = 'auth/REQUEST';
const LOGINSUCCESS = 'auth/SUCCESS';
const LOGINFAILURE = 'auth/FAILURE';

const initialState = {
  error: null,
  isFetching: false,
  user: {},
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
        todos: payload.todos,
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
export const performTodosIndex = () => dispatch => {
  dispatch({ type: LOGINREQUEST })
  return axios.get('https://your-server.com/todos')
    .then((response) => {
      dispatch({
        type: LOGINSUCCESS,
        payload: {
          todos: response.data.todos,
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