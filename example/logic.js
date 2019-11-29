import { colors } from './utils/colors'

import { sun } from './planets/sun'
import { merkury } from './planets/merkury'
import { venus } from './planets/venus'
import { earth } from './planets/earth'
import { mars } from './planets/mars'
import { jupiter } from './planets/jupiter'
// import { saturn } from './planets/saturn'
// import { uranus } from './planets/uranus'
// import { neptune } from './planets/neptune'
// import { pluto } from './planets/pluto'
import { debugMode } from './effects/debugMode'
import { drawDebug } from './utils/drawDebug'

export const space = (ctx, state) => {
  ctx.fillStyle = colors.space
  ctx.fillRect(0, 0, state.windowSize[0], state.windowSize[1])
}

const getTime = (now, prevNow) => ({
  delta: now - prevNow,
  now,
})

export const logic = (ctx, state) => {
  space(ctx, state)

  if (state.debugMode) {
    drawDebug(ctx, state)
  }

  const newState = {
    sun: sun(ctx, state),
    merkury: merkury(ctx, state),
    venus: venus(ctx, state),
    earth: earth(ctx, state),
    mars: mars(ctx, state),
    jupiter: jupiter(ctx, state),
    saturn: [0, 0],
    uranus: [0, 0],
    neptune: [0, 0],
    pluto: [0, 0],

    time: getTime(performance.now(), state.time.now),
    windowSize: [window.innerWidth, window.innerHeight],
    debugMode: debugMode(),
  }

  requestAnimationFrame(() => {
    logic(ctx, newState)
  })
}
