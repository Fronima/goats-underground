import Link from "next/link"
import { getCollaborators, Collaborator } from "../../../sanity/client"
import React from "react"; // Import the React module
import imageUrlBuilder  from "@sanity/image-url";
import { client } from "../../../sanity/client";
import Image from "next/image";




export default async function Collaborators(){
    const collaborators: Collaborator[] = await getCollaborators()
    const builder = imageUrlBuilder(client)

    return (
        <div className="min-h-screen pt-20">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {
                    collaborators.map((collaborator) => (
                        <div key={collaborator.name} className="flex flex-col items-center justify-center p-4 gap-1">
                            <img src={builder.image(collaborator.image).url()} alt={collaborator.name} className="w-32 h-32"/>
                            {collaborator.link ?
                            <Link href={collaborator.link}>
                                <h1 className="text-center text-xl font-bold text-white">{collaborator.name}</h1>
                            </Link>
                            : <h1 className="text-center text-xl font-bold text-white">{collaborator.name}</h1>
                            }
                        </div>
                    ))
                }
                <div className="absolute bottom-2 right-2">
                    <Image src="/Goat-Download-PNG.png" alt="goat" width={200} height={200} />
                </div>
            </div>
        </div>
    )
}