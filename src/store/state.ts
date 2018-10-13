import { AppState } from './app/state'
import { StoryState } from './story/state'

export interface StoreState {
  app: AppState,
  story: StoryState
}