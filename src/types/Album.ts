import { Artist } from "./Artist"
import { ITrack } from "./Track"

export interface IAlbum {
    name:string,
    release_date: string,
    id: string,
    artists: Artist[],
    total_tracks: number,
    images: {
        url: string,
        width: number,
        height:number
    }[],
    tracks: {
        items: ITrack[]
    }
}