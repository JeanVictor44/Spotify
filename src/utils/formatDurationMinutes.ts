function formatDurationMinutes({minutes, seconds}: {minutes: number, seconds: number}){
    const minutesString= String(minutes)
    const secondsString = String(seconds.toFixed(0))
    const formatMinutes = `${minutesString}:${secondsString.length === 1 ? '0' : '' }${secondsString} min`
    return formatMinutes
}

export { formatDurationMinutes}