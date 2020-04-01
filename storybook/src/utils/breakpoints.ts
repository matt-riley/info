const baseBreakpoints = [
  320,
  540
]

const breakpoints = baseBreakpoints.map(bp => `@media screen and (max-width: ${bp}px)`)

export default breakpoints