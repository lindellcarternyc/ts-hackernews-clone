import { actionCreator } from 'src/store/utils'

import { Story } from 'src/models/story.model'

const fetchStoryIdsRequest = () => actionCreator('@story/FETCH_STORY_IDS_REQUEST')
const fetchStoryIdsSuccess = (storyIds: number[]) => actionCreator('@story/FETCH_STORY_IDS_SUCCESS', storyIds)
const fetchStoryIdsFailure = (error: string) => actionCreator('@story/FETCH_STORY_IDS_FAILURE', error)

type FETCH_STORY_IDS_ACTION = ReturnType<typeof fetchStoryIdsRequest> | ReturnType<typeof fetchStoryIdsSuccess> | ReturnType<typeof fetchStoryIdsFailure>

const fetchStoriesRequest = (params: { storyIds: number[], page: number}) => actionCreator('@story/FETCH_STORIES_REQUEST', params)
const fetchStoriesSuccess = (stories: Story[]) => actionCreator('@story/FETCH_STORIES_SUCCESS', stories)
const fetchStoriesFailure = (error: string) => actionCreator('@story/FETCH_STORIES_FAILURE', error)

type FETCH_STORIES_ACTION = ReturnType<typeof fetchStoriesRequest> | ReturnType<typeof fetchStoriesSuccess> | ReturnType<typeof fetchStoriesFailure>

export type STORY_ACTION = FETCH_STORY_IDS_ACTION | FETCH_STORIES_ACTION

export default {
  fetchStoriesFailure,
  fetchStoriesRequest,
  fetchStoriesSuccess,
  fetchStoryIdsFailure,
  fetchStoryIdsSuccess,
  fetchStoryIdsRequest
}