import { createStore, DeepPartial } from 'redux'

import middleware from './middleware'
import reducer from './reducer'

import { StoreState } from './state'

const configureStore = (initialState: DeepPartial<StoreState> = { }) => {
  const store = createStore(
    reducer,
    initialState,
    middleware
  )
  return store
}

export default configureStore