import { Dispatch } from 'redux'

import storyActions, { STORY_ACTION } from './actions'

import hackerNewsApi from 'src/services/hacker-news.api'

const fetchStoryIds = () => {
  return async (dispatch: Dispatch<STORY_ACTION>) => {
    dispatch(storyActions.fetchStoryIdsRequest())

    try {
      const storyIds = await hackerNewsApi.getTopStoryIds()
      dispatch(storyActions.fetchStoryIdsSuccess(storyIds))
      dispatch(fetchStories({storyIds, page: 0}) as any)
    } catch ( err ) {
      dispatch(storyActions.fetchStoryIdsFailure(err))
    }
  }
}

const fetchStories = (params: { storyIds: number[], page: number}) => {
  return async (dispatch: Dispatch<STORY_ACTION>) => {
    dispatch(storyActions.fetchStoriesRequest(params))
    try {
      const stories = await hackerNewsApi.getStoriesByPage(params)
      dispatch(storyActions.fetchStoriesSuccess(stories))
    } catch ( err ) {
      dispatch(storyActions.fetchStoryIdsFailure(err))
    }
  }
}

export default {
  fetchStoryIds,
  fetchStories
}