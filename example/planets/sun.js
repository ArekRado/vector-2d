import { colors } from '../utils/colors'
import { drawPlanet } from '../utils/drawPlanet'

export const sun = (ctx, state) => {
  drawPlanet(ctx, state.sun.position, 20, colors.sun)
  return state.sun
}
