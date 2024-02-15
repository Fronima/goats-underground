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
    <main className={"flex min-h-screen w-full bg-white flex flex-col " + courier_prime.className}>
        <div className="px-10 flex flex-col gap-5">
            { about.map((section) => {
                return (
                    <div key={section.title} className="flex flex-col mt-10">
                        <div className="pl-2 w-full bg-black mb-3">
                            <h1 key={section.title} className={" text-white text-2xl font-bold"} >{section.title}</h1>
                        </div>
                        <p key={section.description} className="text-black">{section.description}</p>
                    </div>
                )
            })}
            
        </div>
    </main>
  );
}