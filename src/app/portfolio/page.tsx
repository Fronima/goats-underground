import Image from "next/image";
import { getProjects } from "../../../sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
import { client } from "../../../sanity/client";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";

type Project = {
    title: string,
    image: string,
    url: string,
}

export default async function PortfolioPage() {

    const portfolio:Project[] = await getProjects();
    const builder = imageUrlBuilder(client);

    return (
        <main className="flex h-full w-full bg-white">
            <div className="p-10 pt-20 flex flex-row flex-wrap gap-4">
                { portfolio.map((project) => {
                    return (
                        <Link 
                        key={project.title}
                        className="h-20 w-15"
                        href={project.url}
                        >
                            <div className="overflow-hidden">
                                <Image src={builder.image(project.image).url()} alt={project.title} width={200} height={50} />
                            </div>
                            <h1 key={project.title} className="text-purple-900 ">{project.title}</h1>
                        </Link>
                    )
                })}
            </div>
        </main>
    );
}