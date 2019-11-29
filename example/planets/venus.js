import { movePlanet } from '../utils/movePlanet'
import { drawOrbit } from '../utils/drawOrbit'
import { drawPlanet } from '../utils/drawPlanet'
import { colors } from '../utils/colors'
import { add } from '../../dist/es/vector-2d'

export const venus = (ctx, state) => {
  const { position, progress } = movePlanet({
    speed: 1.2,
    progress: state.venus.progress,
    delta: state.time.delta,
    orbit: 50,
  })

  const planetPosition = add(position, state.sun.position)

  drawOrbit(ctx, state.sun.position, 50)
  drawPlanet(ctx, planetPosition, 3, colors.venus)

  return {
    ...state.venus,
    position: planetPosition,
    progress,
  }
}
