import { movePlanet } from '../utils/movePlanet'
import { drawOrbit } from '../utils/drawOrbit'
import { drawPlanet } from '../utils/drawPlanet'
import { colors } from '../utils/colors'
import { add } from '../../dist/es/vector-2d'

export const mars = (ctx, state) => {
  const { position, progress } = movePlanet({
    speed: 0.666,
    progress: state.mars.progress,
    delta: state.time.delta,
    orbit: 260,
  })

  const planetPosition = add(position, state.sun.position)

  drawOrbit(ctx, state.sun.position, 260)
  drawPlanet(ctx, planetPosition, 9, colors.mars)

  return {
    ...state.mars,
    position: planetPosition,
    progress,
  }
}
