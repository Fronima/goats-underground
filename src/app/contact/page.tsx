import { Courier_Prime } from "next/font/google"
import { getContact } from "../../../sanity/client";
import AbstractRectangle from "@/components/abstract-rextangle";

const courier_prime = Courier_Prime({ weight: ["400"], subsets: ["latin"]});

type Contact = {
    title: string,
    description: string,
    email: string,
    phone: string,
    address: string,
}

export default async function ContactPage(){

    const contact:Contact[] = await getContact();

    return (
        <main className={"flex min-h-screen w-full bg-white flex flex-col " + courier_prime.className}>
            
            <div className="h-full w-full flex flex-col md:grid md:grid-cols-2 md:px-20 lg:pt-20">
                <div className="flex flex-col gap-5 p-4 pl-10 relative">
                    
                    {contact && contact.map((section) => {
                        return(
                            <div key={section.title} className="flex flex-col gap-5 text-black z-10">
                                <h2 className="text-2xl font-bold">{section.title}</h2>
                                <p className="text-lg">{section.description}</p>
                                <p className="text-lg">{section.email}</p>
                                <p className="text-lg">{section.phone}</p>
                                <p className="text-lg">{section.address}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="relative flex flex-col gap-5 row-start-1 md:col-start-2 text-black p-10 lg:p-20">
                    <form className="flex flex-col gap-2 xl:p-10">
                        <label htmlFor="name">Name:</label>
                        <input className="bg-gray-200 rounded-md" type="text" id="name" name="name" />
                        <label htmlFor="email">Email:</label>
                        <input className="bg-gray-200 rounded-md" type="text" id="email" name="email" />
                        <label htmlFor="message">Message:</label>
                        <textarea className="bg-gray-200 rounded-md" id="message" name="message" />
                        <button className="rounded-md bg-purple-900 text-white" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </main>
    )
}
