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

  drawOrbit(ctx, centerPosition, orbit)
  drawPlanet(ctx, add(centerPosition, position), size, colors.moon)

  return {
    position,
    progress,
  }
}
