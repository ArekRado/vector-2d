import { movePlanet } from '../utils/movePlanet'
import { drawOrbit } from '../utils/drawOrbit'
import { drawPlanet } from '../utils/drawPlanet'
import { colors } from '../utils/colors'
import { add } from '@arekrado/vector-2d'
import { State } from '..'

export const merkury = (ctx: CanvasRenderingContext2D, state: State) => {
  const { position, progress } = movePlanet({
    speed: 2.1,
    progress: state.merkury.progress,
    delta: state.time.delta,
    orbit: 130,
  })

  const planetPosition = add(position, state.sun.position)

  drawOrbit(ctx, state.sun.position, 130)
  drawPlanet(ctx, planetPosition, 5, colors.merkury)

  return {
    ...state.merkury,
    position: planetPosition,
    progress,
  }
}
