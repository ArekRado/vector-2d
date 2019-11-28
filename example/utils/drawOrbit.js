import { colors } from './colors'

export const drawOrbit = (ctx, position, size) => {
  ctx.beginPath()
  ctx.arc(position[0], position[1], size, 0, Math.PI * 2, true)
  ctx.strokeStyle = colors.orbit
  ctx.setLineDash([10, 10])
  ctx.lineWidth = 0.5
  ctx.stroke()
}
