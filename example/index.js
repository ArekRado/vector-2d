import { logic } from './logic'
import { scale } from '../dist/es/vector-2d'
import { range } from './utils/range'

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
    space: [0, 0],
    sun: scale(0.5, [window.innerWidth, window.innerHeight]),
    merkury: randomProgress(),
    venus: randomProgress(),
    earth: { progress: randomProgress(), moons: [randomProgress()] },
    mars: randomProgress(),
    jupiter: {
      progress: randomProgress(),
      moons: [randomProgress(), randomProgress(), randomProgress()],
    },
    saturn: { progress: randomProgress(), moons: [randomProgress()] },
    uranus: { progress: randomProgress(), moons: [randomProgress()] },
    neptune: { progress: randomProgress(), moons: [randomProgress()] },
    pluto: randomProgress(),

    moon: randomProgress(),

    windowSize: [window.innerWidth, window.innerHeight],
    time: { delta: randomProgress(), now: randomProgress() },
  })
})
