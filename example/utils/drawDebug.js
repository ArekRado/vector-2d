import { colors } from './colors'
import {
  angle,
  angleDeg,
  sub,
  vectorRight,
  vectorLeft,
  scale,
  add,
  radianToVector,
  normalize,
  distance,
} from '../../dist/es/vector-2d'

const earthAngle = (ctx, state) => {
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
    `${parseInt(isAcuteAngle ? earthAngleDeg : 360 - earthAngleDeg)}°`,
    half[0],
    half[1],
  )
}

const jupiterAngle = (ctx, state) => {
  const { jupiter } = state

  const nearestPlanetPosition = [
    state.sun,
    state.merkury,
    state.venus,
    state.earth,
    state.mars,
  ].map(planet => [
    {distance}
    moons: planet.
  ])
}

export const drawDebug = (ctx, state) => {
  ctx.font = '15px Arial'
  ctx.fillStyle = 'white'
  ctx.textAlign = 'center'

  earthAngle(ctx, state)
  jupiterAngle(ctx, state)
}
