import { logic } from './logic'
import { scale, vectorZero, Vector2D } from '@arekrado/vector-2d'
import { range } from './utils/range'
import { debugMode } from './effects/debugMode'

const canvas = document.getElementById('app') as HTMLCanvasElement
const ctx = canvas?.getContext('2d')

type Moon = {
  position: Vector2D, progress: number
}

type Planet = {
  position: Vector2D,
  progress: number,
  moons: Moon[],
}

export type State = {
  space: Vector2D,
  sun: Planet,
  merkury: Planet,
  venus: Planet,
  earth: Planet,
  mars: Planet,
  jupiter: Planet,
  saturn: Planet,
  uranus: Planet,
  neptune: Planet,
  pluto: Planet,

  windowSize: [number, number],
  time: { delta: number, now: number },
  debugMode: boolean,
}

if (ctx) {
  const fitCanvasToWindow = () => {
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
  }

  fitCanvasToWindow()

  window.addEventListener('resize', fitCanvasToWindow)

  const randomProgress = () => range(0, 100)

  requestAnimationFrame(() => {
    logic(ctx, {
      space: vectorZero(),
      sun: {
        position: scale(0.5, [window.innerWidth, window.innerHeight]),
        progress: 1,
        moons: [],
      },
      merkury: {
        position: vectorZero(),
        progress: randomProgress(),
        moons: [],
      },
      venus: { position: vectorZero(), progress: randomProgress(), moons: [] },
      earth: {
        position: vectorZero(),
        progress: randomProgress(),
        moons: [{ position: vectorZero(), progress: randomProgress() }],
      },
      mars: { position: vectorZero(), progress: randomProgress(), moons: [] },
      jupiter: {
        position: vectorZero(),
        progress: randomProgress(),
        moons: [
          { position: vectorZero(), progress: randomProgress() },
          { position: vectorZero(), progress: randomProgress() },
          { position: vectorZero(), progress: randomProgress() },
        ],
      },
      saturn: {
        position: vectorZero(),
        progress: randomProgress(),
        moons: [{ position: vectorZero(), progress: randomProgress() }],
      },
      uranus: {
        position: vectorZero(),
        progress: randomProgress(),
        moons: [{ position: vectorZero(), progress: randomProgress() }],
      },
      neptune: {
        position: vectorZero(),
        progress: randomProgress(),
        moons: [{ position: vectorZero(), progress: randomProgress() }],
      },
      pluto: { position: vectorZero(), progress: randomProgress(), moons: [] },

      windowSize: [window.innerWidth, window.innerHeight],
      time: { delta: randomProgress(), now: randomProgress() },
      debugMode: debugMode(),
    })
  })
}
