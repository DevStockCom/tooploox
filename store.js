/*
  REDUX STORE SETUP
  For simplicity sake everything is in one file, as your application grow you should split the logic, create more reducers etc.
*/

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export const actionTypes = {
  TEST: 'TEST',
}

const defaultState = {
  count: 0
}

// REDUCER
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TEST:
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}

// ACTIONS
export const testACtion = () => {
  return { type: actionTypes.TEST }
}

export function initializeStore (initialState = defaultState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}