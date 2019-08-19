import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer } from './reducer'

// INIT STORE
export function initializeStore () {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  )
}