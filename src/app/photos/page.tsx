import { PhotoGallery } from "./photo-gallery"

export default function Photos(){
    const photos = []
    for (let i = 0; i < 50; i++) {
        photos.push({
            src: `https://picsum.photos/id/${i}/300/300`,
            width: 3,
            height: 4
        })
    }
    return (
        <div className="min-h-screen pt-20">
           <PhotoGallery photos={photos} />
        </div>
    )
}