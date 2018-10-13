import { APP_ACTIONS } from './actions'
import { AppState, getInitialState } from './state'

const app = (state: AppState = getInitialState(), action: APP_ACTIONS): AppState => {
  switch ( action.type ) {
    case '$app/TOGGLE_THEME':
      const theme = state.theme === 'light' ? 'dark': 'light'
      return {
        theme
      }

    default: 
      return state
  }
}

export default app