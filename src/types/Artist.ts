export interface Artist {    
    name: string,
    id: string
}

export interface IArtistDetails {
    name: string,
    genres: string[]
    images: {
        width: string,
        height: string,
        url: string
    }[],
    duration_ms: number
}