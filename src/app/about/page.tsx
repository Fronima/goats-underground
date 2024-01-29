import { getAbout } from "../../../sanity/client";
import { Courier_Prime } from "next/font/google";

type About = {
    title: string,
    description: string,
}

const courier_prime = Courier_Prime({ weight: ["400"], subsets: ["latin"]});

export default async function About() {

    const about:About[] = await getAbout();

  return (
    <main className="flex h-full w-full bg-white">
        <div className="pt-20 pl-20 w-9/12">
            { about.map((section) => {
                return (
                    <>
                    <h1 key={section.title} className={courier_prime.className + " text-purple-900 text-2xl"} >{section.title}</h1>
                    <p key={section.description} className="text-black">{section.description}</p>
                    </>
                )
            })}
        </div>
    </main>
  );
}