
import Image from "next/image";
import { getHomepageHeader } from "../../sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
import { client } from "../../sanity/client";
import { Oswald } from "next/font/google";
import { InferGetServerSidePropsType } from "next";
import PortfolioPage from "./portfolio/page";
import About from "./about/page";
import ContactPage from "./contact/page";
import Link from "next/link";
import './index.css'
import { sendGTMEvent } from "@next/third-parties/google";


type Homepage = {
  title: string,
  description: string,
  image: string,
}

const oswald = Oswald({ weight: ["700"], subsets: ["latin"]});

export default async function MainPage(){
  return (
      <Home/>
  )
}

const navItems = [
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Photos",
    href: "/photos",
  },
  {
    name: "Collaborators",
    href: "/collaborators",
  },
]


async  function Home() {

  const homepage:Homepage[] = await getHomepageHeader();
  const builder = imageUrlBuilder(client);

  return (
    <main className="flex h-gull w-full bg-gu-red overflow-hidden">
      <div className="h-screen w-full relative">
        <Image  className={'translate-y-[85vh] w-full hidden'}
                id="mask"
                src={'/gu-background.svg'} 
                width={200}  
                height={50} 
                alt="Goats Underground"  
                objectFit="fill" 
        />
        <div className="top-0 w-full h-full"></div>
        <div className=" absolute top-16 md:top-[15
          vh] w-full flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <Image  className={'w-[70vw] md:w-[30vw]'}
                    src={'/gu-splash-img.webp'}
                    width={500}
                    height={1000}
                    alt="Goats Underground"
                    objectFit="contain"
            />
            <div className={"top-0 flex flex-col justify-center text-start " + oswald.className}>
              {
                navItems.map((link) => (
                  <Link 
                    className={`text-white text-[8vw] md:text-[4vw] font-extrabold  hover:text-yellow-300 transition ease-in-out duration-300 after:mix-blend-plus-lighter`}
                    key={link.href}
                    href={link.href}
                  >{link.name}</Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
