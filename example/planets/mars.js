import { movePlanet } from '../utils/movePlanet'
import { drawOrbit } from '../utils/drawOrbit'
import { drawPlanet } from '../utils/drawPlanet'
import { colors } from '../utils/colors'
import { add } from '../../dist/es/vector-2d'

export const mars = (ctx, state) => {
  const { position, progress } = movePlanet({
    speed: 0.6,
    progress: state.mars,
    delta: state.time.delta,
    orbit: 260,
  })

  drawOrbit(ctx, state.sun, 260)
  drawPlanet(ctx, add(position, state.sun), 9, colors.mars)

  return progress
}
