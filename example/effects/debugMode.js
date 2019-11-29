let isDebugModeEnabled = true

export const debugMode = () => isDebugModeEnabled

document.getElementById('toggleDebug').addEventListener('click', () => {
  isDebugModeEnabled = !isDebugModeEnabled
})
