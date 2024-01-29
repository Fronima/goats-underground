import { Infer } from "next/dist/compiled/superstruct";
import { getAbout } from "../../../sanity/client";
import { Courier_Prime } from "next/font/google";
import { InferGetServerSidePropsType } from "next";

type About = {
    title: string,
    description: string,
}

const courier_prime = Courier_Prime({ weight: ["400"], subsets: ["latin"]});

export const getServersideProps = async () => {
    // Fetch data from an external API
    const about:About[] = await getAbout();
    return {
        props: {
            about,
        },
    };
}

export default async function About({about}: Readonly<InferGetServerSidePropsType<typeof getServersideProps>>) {

  return (
    <main className="flex h-full w-full bg-white">
        <div className="pt-20 pl-20 w-9/12">
            { about.map((section) => {
                return (
                    <div key={section.title} className="flex flex-col">
                        <h1 key={section.title} className={courier_prime.className + " text-purple-900 text-2xl"} >{section.title}</h1>
                        <p key={section.description} className="text-black">{section.description}</p>
                    </div>
                )
            })}
        </div>
    </main>
  );
}