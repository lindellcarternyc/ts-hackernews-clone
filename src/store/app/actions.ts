import { actionCreator } from '../utils'

const toggleTheme = () => actionCreator('$app/TOGGLE_THEME')

export type APP_ACTIONS = ReturnType<typeof toggleTheme>

export default {
  toggleTheme
}