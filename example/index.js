import { logic } from './logic'
import { scale, vectorZero } from '../dist/es/vector-2d'
import { range } from './utils/range'
import { debugMode } from './effects/debugMode'

const canvas = document.getElementById('app')
const ctx = canvas.getContext('2d')

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
      moons: [],
    },
    merkury: { position: vectorZero(), progress: randomProgress(), moons: [] },
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
