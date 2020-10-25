import { State } from '..'
import { colors } from '../utils/colors'
import { drawPlanet } from '../utils/drawPlanet'

export const sun = function (ctx: CanvasRenderingContext2D, state: State) {
  drawPlanet(ctx, state.sun.position, 20, colors.sun)
  return state.sun
}
