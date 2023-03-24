import { Audio } from "./style"

function AudioPlayer({src, controls}: Partial<HTMLAudioElement>) {
    return (

        <Audio 
            controls={controls} 
        >
            <source src={src} />
        </Audio>

    )
}


export { AudioPlayer}

