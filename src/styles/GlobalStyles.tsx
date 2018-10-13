import { injectGlobal } from './styled-components'

import { Palettes } from './palette'

const setGlobalStyles = () => {
  return injectGlobal`
    * {
      box-sizing: border-box;
    }

    html, body {
      font-family: Lato, Helvetica-Neue, sans-serif;
      width: 100vw;
      min-height: 100vh;
      overflow-x: hidden:
      margin: 0;
      padding: 0;
      background-color: ${Palettes.DarkPalette.background};
    }

    ul {
      list-style: none;
      padding: 0;
    }

    a {
      text-decoration: none;

      &:visited {
        color: inherit;
      }
    }
  `
}

export default setGlobalStyles