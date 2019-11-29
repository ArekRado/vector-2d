import { movePlanet } from '../utils/movePlanet'
import { drawOrbit } from '../utils/drawOrbit'
import { drawPlanet } from '../utils/drawPlanet'
import { colors } from '../utils/colors'
import { add } from '../../dist/es/vector-2d'

export const merkury = (ctx, state) => {
  const { position, progress } = movePlanet({
    speed: 2.1,
    progress: state.merkury.progress,
    delta: state.time.delta,
    orbit: 130,
  })

  drawOrbit(ctx, state.sun.position, 130)
  drawPlanet(ctx, add(position, state.sun.position), 5, colors.merkury)

  return {
    ...state.merkury,
    position,
    progress,
  }
}
