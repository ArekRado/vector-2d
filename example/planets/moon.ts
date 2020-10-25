import { movePlanet } from '../utils/movePlanet'
import { drawOrbit } from '../utils/drawOrbit'
import { drawPlanet } from '../utils/drawPlanet'
import { colors } from '../utils/colors'
import { add } from '@arekrado/vector-2d'
import { State } from '..'

export const moon = ({
  ctx,
  state,
  data,
  centerPosition,
  size,
  speed,
  orbit,
}: {
  ctx: CanvasRenderingContext2D,
  state: State,
  data: any,
  centerPosition: any,
  size: any,
  speed: any,
  orbit: any,
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
