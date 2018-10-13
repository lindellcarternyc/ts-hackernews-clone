import { combineReducers } from 'redux'

import { StoreState } from './state'

import app from './app/reducer'
import story from './story/reducer'

const rootReducer = combineReducers<StoreState>({
  app,
  story
})

export default rootReducer