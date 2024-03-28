import { getEvents, Event } from "../../../sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import { client } from "../../../sanity/client"
import Link from "next/link"
import Image from "next/image"

function BannerEvent({event}: {event: Event}){
    const date = new Date(event.date)
    return (
        <div className="flex flex-col md:flex-row w-full bg-gradient-to-r from-gu-brand-end to-gu-brand-end gap-1 p-1">
            <div className="flex flex-row gap-2 md:gap-0 md:flex-col w-full md:w-[8vw]">
                <h1 className="text-3xl text-black font-bold text-white text-left ">{date.toLocaleString('default', {month: "short"}).toUpperCase()}</h1>
                <h1 className="text-3xl text-black text-black text-right ">{date.toLocaleString('default', {day: '2-digit'})}</h1>
            </div>
            <div className="flex flex-col gap-2 bg-black w-full p-1 px-2">
                <h2 className="text-xl text-black font-bold text-white">{event.name}</h2>
                {event.location && <p className="text-black text-white">{event.location}</p>}
                <p className="text-black font-bold text-white">{event.description}</p>
                {event.link && 
                <Link className="bg-gu-brand w-fit px-1" href={event.link}>
                {"Get Tickets"}
                </Link>
                }
            </div>
        </div>
    )
}

function PictureEvent({event}: {event: Event}){
    //TODO: Add a paraax effect to the image
    const builder = imageUrlBuilder(client);
    const date = new Date(event.date)
    return (
        <div className="relative h-full ">
            <div className="flex flex-row space-bewteen w-full relative z-10 flex-col md:flex-row p-1 gap-1">
                <div className="flex flex-row h-fit gap-1 relative md:w-[8vw]">
                    <h1 className="text-3xl text-black font-bold blur-none text-white text-left  z-10">{date.toLocaleString('default', {month: "short"}).toUpperCase()}</h1>
                    <h1 className="text-3xl text-gu-brand-begin filter-none text-right z-10">{date.toLocaleString('default', {day: '2-digit'})}</h1>
                    <div className="h-full w-full absolute bg-black/50 blur-md z-0"></div>
                </div>
                <div className="relative flex flex-col gap-2  w-full p-1 px-2 z-10 bg-black/70  ">
                    <h2 className="text-xl text-black font-bold text-white">{event.name}</h2>
                    {event.location && <p className="text-black text-white">{event.location}</p>}
                    <p className="text-black font-bold text-white">{event.description}</p>
                    {event.link && 
                    <Link className="bg-gu-brand w-fit px-1" href={event.link}>
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

function Event({event}: {event: Event}){
    
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
            <h1 className="text-2xl font-bold mb-2 mt-4">Past</h1>
            <ul className="flex flex-col gap-3">
                {past.map((event, index) => (
                   <Event key={event.name} event={event} />
                ))}
            </ul>
            </>
            }
        </div>
    )
}