function convertMilisecondsToMinutes(timeInMiliseconds: number){
    const minutes =  Math.floor((timeInMiliseconds / 1000)/60) 
    const seconds = (timeInMiliseconds / 1000) - minutes * 60
    return {minutes,seconds}

}
export { convertMilisecondsToMinutes }