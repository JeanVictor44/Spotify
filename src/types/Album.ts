import { Artist } from "./Artist"

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
        items: {
            name: string,
            artists: Artist[],
            duration_ms: number
        }[]
    }
}