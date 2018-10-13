import { STORY_ACTION } from './actions'
import { getInitialState, StoryState } from './state'

const story = (state: StoryState = getInitialState(), action: STORY_ACTION): StoryState => {
  switch ( action.type ) {
    case '@story/FETCH_STORIES_REQUEST':
    case '@story/FETCH_STORY_IDS_REQUEST':
      return {
        ...state,
        isFetching: true
      }
    case '@story/FETCH_STORY_IDS_SUCCESS':
      return {
        ...state,
        storyIds: [ ...action.payload ]
      }
    case '@story/FETCH_STORIES_SUCCESS':
      return {
        ...state,
        stories: [
          ...state.stories,
          ...action.payload
        ],
        page: state.page + 1,
        isFetching: false
      }
    default:
      return state
  }
}

export default story