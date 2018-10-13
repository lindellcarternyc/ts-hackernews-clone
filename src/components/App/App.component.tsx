import * as React from 'react'
import * as InfiteScroll from 'react-infinite-scroll-component'

import { Palette } from 'src/styles/palette'
import { ThemeProvider } from 'src/styles/styled-components'

import { Title, Wrapper } from './styles'

import List from 'src/components/List'
import Loader from 'src/components/Loader'
import TextButton from 'src/components/TextButton'

import { Story } from 'src/models/story.model'

interface AppProps {
  stories: Story[]
  hasMoreStories: boolean

  fetchStories: () => void
  switchTheme: () => void

  theme: Palette
}

const App: React.SFC<AppProps> = ({ stories, fetchStories, hasMoreStories, switchTheme, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title>Hacker News Reader</Title>
        <TextButton onClick={switchTheme}>
          Switch Theme
        </TextButton>
        <InfiteScroll
          dataLength={stories.length}
          next={fetchStories}
          hasMore={hasMoreStories}
          loader={<Loader />}
          endMessage={<p>More later</p>}
          style={{
            height: '100%',
            overflow: 'visible'
          }}
        >
          <List stories={stories}/>
        </InfiteScroll>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App