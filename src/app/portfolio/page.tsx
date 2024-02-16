import { getProjects } from "../../../sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
import { client } from "../../../sanity/client";
import { Courier_Prime } from "next/font/google";
import ProjectViewer from "./project-viewer";

type Project = {
    title: string,
    image: string,
    url: string,
    description: string,
    techStack: string,
}

const courier_prime = Courier_Prime({ weight: ["400"], subsets: ["latin"]});

export default async function PortfolioPage() {

    const projects:Project[] = await getProjects();
    const builder = imageUrlBuilder(client);  
    const projectsWithImages = projects.map((project) => {
        return {
            ...project,
            image: builder.image(project.image).url(),
        }
    }) 
    
    return (
        <main className={"bg-white h-full min-h-screen w-full " + courier_prime.className}>
            <ProjectViewer projects={projectsWithImages}/>
        </main>
    );
}
