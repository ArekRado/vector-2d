import { colors } from './colors'
import {
  angle,
  angleDeg,
  sub,
  vectorRight,
  scale,
  add,
  normalize,
  distance,
} from '@arekrado/vector-2d'
import { State } from '..'

const earthAngle = (ctx: CanvasRenderingContext2D, state: State) => {
  const { earth, sun } = state

  // Earth - Sun line
  ctx.beginPath()
  ctx.lineTo(earth.position[0], earth.position[1])
  ctx.lineTo(sun.position[0], sun.position[1])
  ctx.strokeStyle = colors.line
  ctx.lineWidth = 2
  ctx.setLineDash([0, 0])
  ctx.stroke()

  // Sun normal
  ctx.beginPath()
  ctx.lineTo(sun.position[0], sun.position[1])
  ctx.lineTo(sun.position[0] + 200, sun.position[1])
  ctx.strokeStyle = colors.line
  ctx.stroke()

  // arc
  const diff = sub(earth.position, sun.position)
  const earthAngleDeg = angleDeg(vectorRight(), diff)
  const earthAngle = angle(vectorRight(), diff)
  const isAcuteAngle = earth.position[1] < sun.position[1]

  const half = add(
    sun.position,
    scale(
      isAcuteAngle ? 40 : -40,
      normalize(add(normalize(diff), vectorRight())),
    ),
  )

  ctx.beginPath()
  ctx.arc(
    sun.position[0],
    sun.position[1],
    80,
    0,
    isAcuteAngle ? -earthAngle : earthAngle,
    true,
  )
  ctx.stroke()

  ctx.fillText(
    `${parseInt(`${isAcuteAngle ? earthAngleDeg : 360 - earthAngleDeg}`)}°`,
    half[0],
    half[1],
  )
}

const jupiterAngle = (ctx: CanvasRenderingContext2D, state: State) => {
  const { mars } = state

  const nearestPlanetPosition = [
    state.sun,
    state.merkury,
    state.venus,
    state.earth,
    state.jupiter,
  ]
    .map((planet) => [
      {
        distance: distance(mars.position, planet.position),
        position: planet.position,
      },
      planet.moons.map((moon) => ({
        distance: distance(mars.position, moon.position),
        position: moon.position,
      })),
    ])
    .flat(20)
    .sort((a, b) => (a.distance < b.distance ? -1 : 1))[0]

  const from = nearestPlanetPosition.position
  const to = mars.position
  const half = scale(0.5, add(from, to))

  ctx.beginPath()
  ctx.lineTo(from[0], from[1])
  ctx.lineTo(to[0], to[1])
  ctx.stroke()

  ctx.fillText(
    `${parseInt(nearestPlanetPosition.distance.toString())}px`,
    half[0] + 30,
    half[1],
  )
}

export const drawDebug = (ctx: CanvasRenderingContext2D, state: State) => {
  ctx.font = '15px Arial'
  ctx.fillStyle = 'white'
  ctx.textAlign = 'center'

  earthAngle(ctx, state)
  jupiterAngle(ctx, state)
}
