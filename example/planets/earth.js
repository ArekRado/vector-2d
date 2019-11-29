import { movePlanet } from '../utils/movePlanet'
import { drawOrbit } from '../utils/drawOrbit'
import { drawPlanet } from '../utils/drawPlanet'
import { colors } from '../utils/colors'
import { moon } from './moon'
import { add } from '../../dist/es/vector-2d'

const moons = [
  {
    size: 4,
    speed: 4.99,
    orbit: 30,
  },
]

export const earth = (ctx, state) => {
  const { position, progress } = movePlanet({
    speed: 1.1,
    progress: state.earth.progress,
    delta: state.time.delta,
    orbit: 200,
  })

  const earthPosition = add(position, state.sun.position)

  drawOrbit(ctx, state.sun.position, 200)
  drawPlanet(ctx, earthPosition, 10, colors.earth)

  return {
    progress,
    position: earthPosition,
    moons: state.earth.moons.map((data, i) =>
      moon({
        ...moons[i],
        data,
        ctx,
        state,
        centerPosition: earthPosition,
      }),
    ),
  }
}
