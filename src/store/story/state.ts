import { Story } from 'src/models/story.model'

export interface StoryState {
  storyIds: number[]
  stories: Story[]
  page: number
  isFetching: boolean
  error: string
}

export const getInitialState = (): StoryState => ({
  storyIds: [],
  stories: [],
  page: 0,
  isFetching: false,
  error: ''
})