import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import AppComponent from './App.component'

import { StoreState } from 'src/store/state'
import { StoryState } from 'src/store/story/state'

import appActions from 'src/store/app/actions'
import storyThunks from 'src/store/story/thunks'

import { hasMoreStories } from 'src/store/story/selectors'
import { Palette, Palettes } from 'src/styles/palette'

type AppContainerStateProps = StoryState & {
  hasMoreStories: boolean
  theme: Palette
}

interface AppContainerDispatchProps {
  fetchStoriesFirstPage: () => void
  fetchStories: (params: { storyIds: number[], page: number }) => void
  switchTheme: () => void
}

type AppContainerProps = AppContainerStateProps & AppContainerDispatchProps

class AppContainer extends React.Component<AppContainerProps> {
  public componentDidMount() {
    this.props.fetchStoriesFirstPage()
  }
  
  public render() {
    return (
      <AppComponent 
        stories={this.props.stories} 
        fetchStories={this.fetchStories} 
        hasMoreStories={this.props.hasMoreStories} 
        switchTheme={this.props.switchTheme} 
        theme={this.props.theme}
      />
    )
  }

  private fetchStories = () => {
    if ( !this.props.isFetching ) {
      const { storyIds, page } = this.props
      this.props.fetchStories({storyIds, page})
    }
  }
}

const mapStateToProps = (state: StoreState): AppContainerStateProps => {
  return {
    hasMoreStories: hasMoreStories(state),
    ...state.story,
    theme: state.app.theme === 'dark' ? Palettes.DarkPalette : Palettes.LightPalette
  }
}

const mapDispatchToProps = (dispatch: Dispatch): AppContainerDispatchProps => {
  return {
    fetchStoriesFirstPage: () => dispatch(storyThunks.fetchStoryIds() as any),
    fetchStories: params => dispatch(storyThunks.fetchStories(params) as any),
    switchTheme: () => dispatch(appActions.toggleTheme())
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer)

export default App