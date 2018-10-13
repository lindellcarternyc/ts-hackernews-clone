import ApiService from './api.service'

import { parseStoryReponse, StoryApiReponse } from 'src/models/story.model'

const JSON_QUERY = '.json?print=pretty'
const BASE_URL = 'https://hacker-news.firebaseio.com/v0'
const client = new ApiService({baseURL: BASE_URL})

const PAGE_LIMIT = 20

interface PageSlice {
  begin: number
  end: number
}
const getPageSlice = (limit: number, page: number = 0): PageSlice => ({
  begin: page * limit,
  end: (page + 1) * limit
})

const getPageIds = (params: PageSlice & { ids: number[] }): number[] => {
  const { begin, end, ids } = params
  return ids.slice(begin, end)
}

const getTopStoryIds = () => client.get<number[]>(`/topstories${JSON_QUERY}`)

const getStory = (id: number) => client.get<StoryApiReponse>(`/item/${id}${JSON_QUERY}`)

const getStoriesByPage = async (params: { storyIds: number[], page: number}) => {
  const { begin, end } = getPageSlice(PAGE_LIMIT, params.page)
  const activeIds = getPageIds({begin, end, ids: params.storyIds})
  const storyPromises = activeIds.map(id => getStory(id))
  
  try {
    const storyResponses = await Promise.all(storyPromises)
    const stories = storyResponses.map(response => parseStoryReponse(response))
    return stories
  } catch ( err ) {
    throw err
  }
}

export default {
  getTopStoryIds,
  getStory,
  getStoriesByPage
}