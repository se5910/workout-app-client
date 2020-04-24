import axios from 'axios'
import { GET_ERRORS, SET_CURRENT_USER, CLEAR_PROFILE, VERIFY_COACH } from './types'
import jwt_decode from 'jwt-decode'
import setJWTToken from '../util/setJWTToken'

export const createNewUser = (newUser, history) => async dispatch => {
  await axios.post("/api/users/register", newUser)
    .then((res) => {
      history.push("/login")
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const clearErrors = () => dispatch => {
  console.log("errors")
  dispatch({
    type: GET_ERRORS,
    payload: {}
  })
}

export const login = LoginRequest => async dispatch => {
  // post => Login Request
  await axios.post("/api/users/login", LoginRequest)
    .then(res => {
      // Extract token from res.data
      const { token } = res.data
      // Store the token in localStorage
      localStorage.setItem("jwtToken", token)
      // Set token in header
      setJWTToken(token)
      // decode token on React
      const decoded = jwt_decode(token)
      // dispatch to securityReducer
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      })
    })
    .catch(err => {
      if (err.response && err.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      }
    })
}

export const verifyCoach = async dispatch => {
  try {
    const res = axios.get("/coach");

    dispatch({
      type: VERIFY_COACH,
      payload: res.data
    });
  } catch (err) {

  }
}

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken")
  setJWTToken(false)
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
  dispatch({
    type: CLEAR_PROFILE
  });
}
