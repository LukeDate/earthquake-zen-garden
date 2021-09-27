import { createStore } from 'redux'
import { initialState, rootReducer } from './Redux/reducers'

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState
  )

  return store
}

export default configureStore
