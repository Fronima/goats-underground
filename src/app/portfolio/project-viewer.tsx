"use client";
import Image from "next/image";
import { getProjects } from "../../../sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
import { useClient } from "sanity";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { Courier_Prime } from "next/font/google";
import { useEffect, useState } from "react";
import { apiVersion } from "../../../sanity/env";

type Project = {
    title: string,
    image: string,
    url: string,
    description: string,
    techStack: string,

}

const courier_prime = Courier_Prime({ weight: ["400"], subsets: ["latin"]});

export default function ProjectViewer({projects}: {projects: Project[]}) {

    const [projectIndex, setProjectIndex] = useState(0);
    
    return (
        <div className={"h-[60vh] lg:h-[80vh] w-full sm:px-5 md:p-10 lg:px-40 lg:py-28  "}>
            {
                projects.length == 0 ?
                    <div className="h-full w-full flex justify-center items-center">
                        <h1 className="text-white text-4xl font-bold">Loading...</h1>
                    </div>
                    :
                    <div className="w-full h-full bg-white pt-10 sm:grid-cols-1 md:grid md:grid-cols-2 md:grid-rows-2  bg-purple-400">
                        <div className="relative overflow-visible lg:-ml-16 lg:-mt-28">
                            <Image 
                                src={projects[projectIndex].image}
                                alt={projects[projectIndex].title}
                                layout="fill"
                                objectFit="contain"
                                className="p-2" 
                                />
                        </div>
                        <div className="w-full h-0  md:h-full pl-2 md:pl-5">
                            <h1 className="text-black text-4xl font-bold">{"Tech Stack"}</h1>
                            <p className="text-black text-2xl">{projects[projectIndex].techStack}</p>
                        </div>
                        <div className="flex flex-col pt-10 md:py-5 w-full">
                            {projects.map((project, index) => {
                                return (
                                    <button key={project.title} 
                                        onClick={() => setProjectIndex(index)}
                                        onMouseOver={() => setProjectIndex(index)}
                                        className="pl-2 text-black text-left border-solid border-black border-b-2 text-xl">
                                        {project.title}
                                    </button>
                                )
                            })}
                        </div>
                        <div className="w-full">
                            <div className="bg-black pl-4 pt-2 pb-8 bg-black">
                                <Link href={projects[projectIndex].url} className="text-white text-4xl font-bold hover:text-purple-900">{projects[projectIndex].title}</Link>
                                <p className="text-white text-2xl">{projects[projectIndex].description}</p>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}
