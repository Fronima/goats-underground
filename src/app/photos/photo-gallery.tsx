'use client';
import Gallery  from 'react-photo-gallery'

export function PhotoGallery({photos}: {photos:any}){
    "use client";
    return (
        <Gallery photos={photos} margin={5} direction={"row"} />
    )
}