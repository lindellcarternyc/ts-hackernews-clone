export interface Story {
  by: string
  kids: number[]
  score: number
  url: string
  title: string
  id: number
  type: string
  time: number
}

export type StoryApiReponse = {
  id: number
} & Partial<Story>

export const parseStoryReponse = (storyResponse: StoryApiReponse): Story => {
  return {
    id: storyResponse.id,
    by: storyResponse.by || '',
    kids: storyResponse.kids || [],
    score: storyResponse.score || 0,
    url: storyResponse.url || '',
    title: storyResponse.title || '',
    type: storyResponse.type || '',
    time: storyResponse.time || Date.now()
  }
}