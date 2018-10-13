const mediaQuery = (width: number, max: boolean = true): string => {
  return `@media only screen and (${max === true ? 'max' : 'min'}-width: ${width}px)`
}
export const mobile = mediaQuery(480)
export const tablet = mediaQuery(768)
export const monitor = mediaQuery(1400, false)