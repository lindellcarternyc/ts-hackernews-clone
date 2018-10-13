export interface AppState {
  theme: 'light' | 'dark'
}

export const getInitialState = (): AppState => ({
  theme: 'dark'
})