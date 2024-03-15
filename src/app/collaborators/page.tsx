import Link from "next/link"
import { getCollaborators, Collaborator } from "../../../sanity/client"
import React from "react"; // Import the React module
import imageUrlBuilder  from "@sanity/image-url";
import { client } from "../../../sanity/client";





export default async function Collaborators(){
    const collaborators: Collaborator[] = await getCollaborators()
    const builder = imageUrlBuilder(client)

    return (
        <div className="min-h-screen pt-20">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    collaborators.map((collaborator) => (
                        <div key={collaborator.name} className="flex flex-col items-center justify-center p-4">
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
            </div>
        </div>
    )
}