import Link from "next/link"
import { getCollaborators, Collaborator } from "../../../sanity/client"



import React from "react"; // Import the React module

export default async function Collaborators(){
    const collaborators: Collaborator[] = await getCollaborators()

    return (
        <div className="min-h-screen pt-20">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    collaborators.map((collaborator) => (
                        <div key={collaborator.name} className="flex flex-col items-center justify-center p-4">
                            <img src={collaborator.image} alt={collaborator.name} className="w-32 h-32 rounded-full"/>
                            <Link href={collaborator.link}>
                                <h1 className="text-center text-xl font-bold">{collaborator.name}</h1>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}