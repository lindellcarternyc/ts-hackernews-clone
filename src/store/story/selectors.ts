import { createSelector } from 'reselect'

import { StoreState } from 'src/store/state'

const storyIdsSelector = (state: StoreState) => state.story.storyIds
const storiesSelector = (state: StoreState) => state.story.stories

export const hasMoreStories = createSelector(
  storyIdsSelector,
  storiesSelector,
  (storyIds, stories) => storyIds.length > stories.length
)