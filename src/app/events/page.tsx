import { getEvents, Event } from "../../../sanity/client"
import { EventItem } from "../events"


export default async function Events(){
    const events:Event[] = await getEvents()
    const upcoming = events.filter(
        (event) => new Date(event.date).getTime() >= Date.now()
    )
    const past = events.filter(
        (event) => new Date(event.date).getTime() < Date.now()
    )
    return (
        <div className="min-h-screen pt-20 px-4">
            <h1 className="text-2xl font-bold mb-2">Upcoming</h1>
            <ul className="flex flex-col gap-3">
                {upcoming
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((event, index) => (
                   <EventItem key={event.name} event={event} />
                ))}
            </ul>
            {past.length > 0 &&
            <>
            <h1 className="text-2xl font-bold mb-2 mt-4">Past</h1>
            <ul className="flex flex-col gap-3">
                {past
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((event, index) => (
                   <EventItem key={event.name} event={event} />
                ))}
            </ul>
            </>
            }
        </div>
    )
}