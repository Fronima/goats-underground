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
        <div className={"min-h-[60vh] lg:h-[80vh] w-full sm:px-5 md:p-10 lg:px-30 lg:py-28 "}>
            {
                projects.length == 0 ?
                    <div className="h-full w-full flex justify-center items-center">
                        <h1 className="text-white text-4xl font-bold">Loading...</h1>
                    </div>
                    :
                    <div className="w-full h-full bg-white lg:pt-10 sm:grid-cols-1 lg:grid lg:grid-cols-2 lg:grid-rows-2  bg-purple-400">
                        <div className="min-h-[30vh]  lg:min-h-[38vh] md:h-full relative overflow-visible  lg:-mt-28">
                            <Image 
                                src={projects[projectIndex].image}
                                alt={projects[projectIndex].title}
                                layout="fill"
                                objectFit="contain"
                                className="p-2 " 
                                />
                        </div>
                        <div className="w-full h-0  md:h-full pl-2 md:pl-5">
                            <h1 className="text-black text-3xl font-bold">{"Tech Stack"}</h1>
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
                        <div className="w-full relative">
                            <div className="bg-black px-4 pt-2 pb-8 bg-black absolute lg:max-h-[400px] overflow-y-scroll w-full">
                                <Link href={projects[projectIndex].url} className="text-white text-4xl font-bold hover:text-purple-900">{projects[projectIndex].title}</Link>
                                <p className="text-white text-sm pt-2 text-wrap">{projects[projectIndex].description}</p>

                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}
