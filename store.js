/*
  REDUX STORE SETUP
  For simplicity sake everything is in one file, as your application grow you should split the logic, create more reducers etc.
*/

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

export const actionTypes = {
  SAVE_USER_SUCCESS: 'SAVE_USER_SUCCESS',
  SAVE_USER_ERROR: 'SAVE_USER_ERROR',
  SAVE_USER_PENDING: 'SAVE_USER_PENDING',
}

const defaultState = {
  user: null,
  isLoading: false,
  error: null,
}

// REDUCER
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_USER_SUCCESS:
      return {
        isLoading: false,
        user: action.user,
        error: null
      }
    case actionTypes.SAVE_USER_ERROR:
      return {
        isLoading: false,
        user: null,
        error: action.error
      }
    case actionTypes.SAVE_USER_PENDING:
      return {
        isLoading: true,
        user: null,
        error: null
      }
    default:
      return state
  }
}

// ACTIONS
export const saveUserSuccess = user => {
  return { type: actionTypes.SAVE_USER_SUCCESS, user }
}

export const saveUserError = error => {
  return { type: actionTypes.SAVE_USER_ERROR, error }
}

export const saveUserPending = () => {
  return { type: actionTypes.SAVE_USER_PEDNING }
}

// ASYNC ACTIONS
export const fetchUserData = user => async dispatch => {
  dispatch(saveUserPending())
  const data = await fetch('https://api.github.com/users/Karolloza')
    .then(res => res.json())

  dispatch(saveUserSuccess(data))
  // TODO ADD ERROR HANDLING
}



export function initializeStore (initialState = defaultState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}