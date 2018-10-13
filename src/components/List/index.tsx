import * as React from 'react'

import ListItem from 'src/components/ListItem'

import { ListWrapper } from './styles'

import { Story } from 'src/models/story.model'

interface ListProps {
  stories: Story[]
}

const List: React.SFC<ListProps> = ({ stories }) => (
  <ListWrapper>
    {stories.map(story => <ListItem key={story.id} {...story}/>)}
  </ListWrapper>
)

export default List