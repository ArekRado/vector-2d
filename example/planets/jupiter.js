import { movePlanet } from '../utils/movePlanet'
import { drawOrbit } from '../utils/drawOrbit'
import { drawPlanet } from '../utils/drawPlanet'
import { colors } from '../utils/colors'
import { moon } from './moon'
import { add } from '../../dist/es/vector-2d'

const moons = [
  {
    size: 4,
    speed: 5,
    orbit: 30,
  },
  {
    size: 3.5,
    speed: 1,
    orbit: 45,
  },
  {
    size: 3,
    speed: 2,
    orbit: 60,
  },
]

export const jupiter = (ctx, state) => {
  const { position, progress } = movePlanet({
    speed: 0.1,
    progress: state.jupiter.progress,
    delta: state.time.delta,
    orbit: 360,
  })

  const jupiterPosition = add(position, state.sun)

  drawOrbit(ctx, state.sun, 360)
  drawPlanet(ctx, jupiterPosition, 20, colors.jupiter)

  return {
    progress,
    moons: state.jupiter.moons.map((currentProgress, i) =>
      moon({
        ...moons[i],
        ctx,
        state,
        currentProgress,
        centerPosition: jupiterPosition,
      }),
    ),
  }
}
