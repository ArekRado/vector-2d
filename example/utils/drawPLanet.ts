export const drawPlanet = (
  ctx: CanvasRenderingContext2D,
  position: Vector2D,
  size: number,
  color: string,
) => {
  ctx.beginPath()
  ctx.arc(position[0], position[1], size, 0, Math.PI * 2, true)
  ctx.fillStyle = color
  ctx.fill()
}
