export interface Palette {
  background: string
  backgroundSecondary: string
  text: string
  textSecondary: string
  border: string
}

const DarkPalette: Palette = {
  background: '#272727',
  backgroundSecondary: '#393c3e',
  text: '#bfbebe',
  textSecondary: '#848886',
  border: '#272727'
}

const LightPalette: Palette = {
  background: '#eaeaea',
  backgroundSecondary: '#f8f8f8',
  text: '#848886',
  textSecondary:'#aaaaaa',
  border: '#eaeaea'
}

export const Palettes = {
  DarkPalette,
  LightPalette
}