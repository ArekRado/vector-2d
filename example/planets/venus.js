import { movePlanet } from '../utils/movePlanet'
import { drawOrbit } from '../utils/drawOrbit'
import { drawPlanet } from '../utils/drawPlanet'
import { colors } from '../utils/colors'
import { add } from '../../dist/es/vector-2d'

export const venus = (ctx, state) => {
  const { position, progress } = movePlanet({
    speed: 1.2,
    progress: state.venus,
    delta: state.time.delta,
    orbit: 50,
  })

  drawOrbit(ctx, state.sun, 50)
  drawPlanet(ctx, add(position, state.sun), 3, colors.venus)

  return progress
}
