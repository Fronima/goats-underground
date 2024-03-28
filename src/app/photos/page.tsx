import { PhotoGallery } from "./photo-gallery"
import { getPhotos, Photo, client } from "../../../sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export default async function Photos(){
    const photos: Photo[] = await getPhotos()
    const builder = imageUrlBuilder(client)
    let placeholder = []
    if (photos.length <= 0){
        for (let i = 0; i < 10; i++){
           placeholder.push({
            src: `https://picsum.photos/id/${i}/200/200`,
            width: 4,
            height: 4
        })
        }
    }
    
    const photoUrls = (photos.length > 0 ) ? photos.map(photo =>{
        return {
            src: builder.image(photo.image).url(),
            width: 4,
            height: 4
        }
    }
    ) : placeholder

    return (
        <div className="min-h-screen p-10 pt-20">
           <PhotoGallery photos={photoUrls} />
        </div>
    )
}