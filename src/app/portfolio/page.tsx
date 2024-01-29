import Image from "next/image";
import { getProjects } from "../../../sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
import { client } from "../../../sanity/client";
import Link from "next/link";

type Project = {
    title: string,
    image: string,
    url: string,
}

export default async function Portfolio() {

    const portfolio: Project[] = await getProjects();
    const builder = imageUrlBuilder(client);

    return (
        <main className="flex h-full w-full bg-white">
            <div className="pt-20 pl-20 w-9/12 grid row-auto gap-5">
                { portfolio.map((project) => {
                    return (
                        <Link key={project.title} href={project.url}>
                            <Image src={builder.image(project.image).url()} alt={project.title} width={200} height={50} />
                            <h1 key={project.title} className="text-purple-900 text-2xl">{project.title}</h1>
                        </Link>
                    )
                })}
            </div>
        </main>
    );
}