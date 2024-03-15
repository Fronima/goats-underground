import { getEvents, Event } from "../../../sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import { client } from "../../../sanity/client"
import Link from "next/link"
import Image from "next/image"

export function BannerEvent({event}: {event: Event}){
    const date = new Date(event.date)
    return (
        <div className="flex flex-col md:flex-row w-full">
            <div className="flex flex-row gap-2 md:gap-0 md:flex-col bg-gu-red p-2 w-full md:w-[8vw]">
                <h1 className="text-3xl text-black font-bold text-white text-left ">{date.toLocaleString('default', {month: "short"}).toUpperCase()}</h1>
                <h1 className="text-3xl text-black text-black text-right ">{date.toLocaleString('default', {day: '2-digit'})}</h1>
            </div>
            <div className="flex flex-col gap-2 border border-gu-red border-4 w-full p-1 px-2">
                <h2 className="text-xl text-black font-bold text-white">{event.name}</h2>
                {event.location && <p className="text-black text-white">{event.location}</p>}
                <p className="text-black font-bold text-white">{event.description}</p>
                {event.link && 
                <Link href={event.link}>
                {"Get Tickets"}
                </Link>
                }
            </div>
        </div>
    )
}

export function PictureEvent({event}: {event: Event}){
    //TODO: Add a paraax effect to the image
    const builder = imageUrlBuilder(client);
    const date = new Date(event.date)
    return (
        <div className="relative h-full ">
            <div className="flex flex-row space-bewteen w-full relative z-10 pl-2">
                <h1 className="text-3xl text-black font-bold text-white text-left  ">{date.toLocaleString('default', {month: "short"}).toUpperCase()}</h1>
                <h1 className="text-3xl text-black text-black text-right ">{date.toLocaleString('default', {day: '2-digit'})}</h1>
                <div className="relative flex flex-col gap-2 border border-gu-red border-4 w-full p-1 min-h-[40vh] px-2 z-10 w-1/3 bg-black/50 m-4 ml-auto">
                <h2 className="text-xl text-black font-bold text-white">{event.name}</h2>
                {event.location && <p className="text-black text-white">{event.location}</p>}
                <p className="text-black font-bold text-white">{event.description}</p>
                {event.link && 
                <Link href={event.link}>
                {"Get Tickets"}
                </Link>
                }
                <div className="h-full"></div>
            </div>
            </div>
            <Image src={builder.image(event.image).url()} fill={true} alt="event image" className="object-cover z-0" />
        </div>
    )
}

export function Event({event}: {event: Event}){
    
    return (
        event.image ?
            <PictureEvent event={event} /> :
            <BannerEvent event={event} />
    )
}



export default async function Events(){
    const events:Event[] = await getEvents()
    const builder = imageUrlBuilder(client);
    const upcoming = events.filter(
        (event) => new Date(event.date) > new Date()
    )
    const past = events.filter(
        (event) => new Date(event.date) < new Date()
    )
    return (
        <div className="min-h-screen pt-20 px-4">
            <h1 className="text-2xl font-bold mb-2">Upcoming</h1>
            <ul className="flex flex-col gap-3">
                {upcoming.map((event, index) => (
                   <Event key={event.name} event={event} />
                ))}
            </ul>
            {past.length > 0 &&
            <>
            <h1>Past</h1>
            <ul>
                {past.map((event, index) => (
                   <Event key={event.name} event={event} />
                ))}
            </ul>
            </>
            }
        </div>
    )
}