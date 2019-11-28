export const drawPlanet = (ctx, position, size, color) => {
  ctx.beginPath()
  ctx.arc(position[0], position[1], size, 0, Math.PI * 2, true)
  ctx.fillStyle = color
  ctx.fill()
}
