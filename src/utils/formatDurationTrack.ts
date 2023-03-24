function formatDurationTrack(timeInMiliseconds: number){
    const minutes =  Math.floor((timeInMiliseconds / 1000)/60) 
    const seconds = (timeInMiliseconds / 1000) - minutes * 60

    const minutesString= String(minutes)
    const secondsString = String(seconds.toFixed(0))
    const formatMinutes = `${minutesString}:${secondsString.length === 1 ? '0' : '' }${secondsString} min`
    return formatMinutes
}

export { formatDurationTrack}