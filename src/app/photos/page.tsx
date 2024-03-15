import { PhotoGallery } from "./photo-gallery"
import { getPhotos, Photo } from "../../../sanity/client"

export default async function Photos(){
    const photos1: Photo[] = await getPhotos()
    let photos = []
    for (let i = 0; i < 50; i++) {
        photos.push({
            src: `https://picsum.photos/id/${i}/300/300`,
            width: 3,
            height: 4
        })
    }
    photos = photos1.length > 0 ? photos1 : photos
    return (
        <div className="min-h-screen pt-20">
           <PhotoGallery photos={photos} />
        </div>
    )
}