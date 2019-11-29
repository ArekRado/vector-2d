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

  drawOrbit(ctx, state.sun.position, 260)
  drawPlanet(ctx, add(position, state.sun.position), 9, colors.mars)

  return {
    ...state.mars,
    position,
    progress,
  }
}
