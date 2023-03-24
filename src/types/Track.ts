import { IAlbum } from "./Album";
import { Artist } from "./Artist";

export interface ITrack {
    album:IAlbum,
    id: string,
    name: string,
    preview_url: string,
    duration_ms: number,
    artists: Artist[],
    external_urls: {
        spotify: string
    }
}