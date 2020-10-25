import { movePlanet } from '../utils/movePlanet'
import { drawOrbit } from '../utils/drawOrbit'
import { drawPlanet } from '../utils/drawPlanet'
import { colors } from '../utils/colors'
import { moon } from './moon'
import { add } from '@arekrado/vector-2d'
import { State } from '..'

const moons = [
  {
    size: 4,
    speed: 4.99,
    orbit: 30,
  },
  {
    size: 3.5,
    speed: 1.01,
    orbit: 45,
  },
  {
    size: 3,
    speed: 2.2,
    orbit: 60,
  },
]

export const jupiter = (ctx: CanvasRenderingContext2D, state: State) => {
  const { position, progress } = movePlanet({
    speed: 0.13,
    progress: state.jupiter.progress,
    delta: state.time.delta,
    orbit: 360,
  })

  const jupiterPosition = add(position, state.sun.position)

  drawOrbit(ctx, state.sun.position, 360)
  drawPlanet(ctx, jupiterPosition, 20, colors.jupiter)

  return {
    progress,
    position: jupiterPosition,
    moons: state.jupiter.moons.map((data, i) =>
      moon({
        ...moons[i],
        data,
        ctx,
        state,
        centerPosition: jupiterPosition,
      }),
    ),
  }
}
