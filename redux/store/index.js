import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducer'

const ReduxStore = () => {
  const middlewares = [thunk]
  const enhancer = applyMiddleware(...middlewares)

  // create store
  return createStore(reducers, enhancer)
}

export default ReduxStore
