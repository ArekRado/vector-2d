import { movePlanet } from '../utils/movePlanet'
import { drawOrbit } from '../utils/drawOrbit'
import { drawPlanet } from '../utils/drawPlanet'
import { colors } from '../utils/colors'
import { add, Vector2D } from '@arekrado/vector-2d'
import { Moon, State } from '..'

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
  data: Moon,
  centerPosition: Vector2D,
  size: number,
  speed: number,
  orbit: number,
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
