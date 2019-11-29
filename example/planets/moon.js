import { movePlanet } from '../utils/movePlanet'
import { drawOrbit } from '../utils/drawOrbit'
import { drawPlanet } from '../utils/drawPlanet'
import { colors } from '../utils/colors'
import { add } from '../../dist/es/vector-2d'

export const moon = ({
  ctx,
  state,
  data,
  centerPosition,
  size,
  speed,
  orbit,
}) => {
  const { position, progress } = movePlanet({
    speed,
    progress: data.progress,
    delta: state.time.delta,
    orbit: orbit,
  })

  const moonPosition = add(centerPosition, position)

  drawOrbit(ctx, centerPosition, orbit)
  drawPlanet(ctx, moonPosition, size, colors.moon)

  return {
    position: moonPosition,
    progress,
  }
}
