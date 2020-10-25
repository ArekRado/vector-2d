import { vector } from '@arekrado/vector-2d'

export const movePlanet = ({
  speed,
  progress,
  delta,
  orbit,
}: {
  speed: number
  progress: number
  delta: number
  orbit: number
}) => {
  const shift = (speed * delta) / 100
  const newProgress = progress + shift
  const progressAsPI = (newProgress * Math.PI * 2) / 100

  return {
    progress: progress > 100 ? 0 : newProgress,
    position: vector(
      Math.sin(progressAsPI) * orbit,
      Math.cos(progressAsPI) * orbit,
    ),
  }
}
