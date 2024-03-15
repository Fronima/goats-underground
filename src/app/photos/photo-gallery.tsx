'use client';
import Gallery, { PhotoAlbum }  from 'react-photo-album'

export function PhotoGallery({photos}: {photos:any}){
    "use client";
    return (
        <PhotoAlbum photos={photos} layout={"rows"} />
    )
}