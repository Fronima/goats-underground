
import Image from "next/image";
import { getHomepageHeader } from "../../sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
import { client } from "../../sanity/client";
import { Courier_Prime } from "next/font/google";
import { InferGetServerSidePropsType } from "next";
import PortfolioPage from "./portfolio/page";
import About from "./about/page";
import ContactPage from "./contact/page";

type Homepage = {
  title: string,
  description: string,
  image: string,
}

const courier_prime = Courier_Prime({ weight: ["400"], subsets: ["latin"]});

export default async function MainPage(){
  return (
      <Home/>
  )
}

export async  function Home() {

  const homepage:Homepage[] = await getHomepageHeader();
  const builder = imageUrlBuilder(client);

  return (
    <main className="flex h-full w-full bg-white">
      <div className="h-full w-full">
        {
          homepage.map((section) => {
            return (
              <div key={section.title} className={"h-full w-full" }>
                <div className={"h-full w-full overflow-hidden "}>
                  <Image src={builder.image(section.image).url()} alt={section.title} layout="fill" objectFit="cover" />
                </div>
                <div className={"absolute top-1/4 w-screen px-10 bg-black/10 backdrop-blur-sm " + courier_prime.className}>
                    <h1 className="text-white text-4xl sm:text-6xl md:text-7xl">{section.title}</h1>
                    <p className="text-white text-2xl">{section.description}</p>
                </div>
              </div>
            )
          }) 
        }
      </div>
    </main>
  );
}
