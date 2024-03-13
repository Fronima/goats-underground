
import Image from "next/image";
import { getHomepageHeader, getEvents, getLandingpageSection } from "../../sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
import { client } from "../../sanity/client";
import { Oswald } from "next/font/google";
import { InferGetServerSidePropsType } from "next";
import About from "./about/page";
import ContactPage from "./contact/page";
import Link from "next/link";
import './index.css'
import { sendGTMEvent } from "@next/third-parties/google";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaArrowUp, FaCaretUp } from "react-icons/fa"
import PopupButton from "@/components/popup-button";



type Homepage = {
  title: string,
  description: string,
  image: string,
}

type Event = {
  name: string,
  description: string,
  date: string,
  image: string,
}

type LandingPageSection = {
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
    name: "Blog",
    href: "/blog",
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
  const icon_size = "3rem";

  const events:Event[] = await getEvents();
  const landingPageSecion:LandingPageSection[] = await getLandingpageSection();


  return (
    <main className="flex flex-col h-gull w-full bg-gu-red overflow-hidden">
      <div className="h-screen w-full relative">
        <div className="top-0 w-full h-full"></div>
        <div className=" absolute top-10 sm:top-16 md:top-[15
          vh] w-full flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <Image  className={'w-[70vw] md:w-[30vw] lg:w-[40vw]'}
                    src={'/gu-splash-img.webp'}
                    width={500}
                    height={1000}
                    alt="Goats Underground"
                    objectFit="contain"
            />
            <div className={"top-0 md:gap-3 flex flex-col justify-center text-start " + oswald.className}>
              {
                navItems.map((link) => (
                  <Link 
                    className={`text-black text-[8vw] md:text-[3vw] font-extrabold  hover:text-white hover:pl-1 transition ease-in-out duration-300 after:mix-blend-plus-lighter`}
                    key={link.href}
                    href={link.href}
                  >{link.name}</Link>
                ))
              }
              <div className="flex flex-row md:gap-5 ">
                <Link href="https://www.youtube.com/channel/UC9J6Z1v3Xy5RJYlF1i8lK5g" target="_blank" rel="noreferrer">
                  <FaYoutube size={icon_size} className="text-4xl text-black hover:text-white"/>
                </Link>
                <Link href="https://www.facebook.com/goatsunderground" target="_blank" rel="noreferrer">
                  <FaFacebook size={icon_size} className="text-4xl text-black hover:text-white"/>
                </Link>
                <Link href="https://www.instagram.com/goats.underground" target="_blank" rel="noreferrer">
                  <FaInstagram size={icon_size} className="text-4xl text-black hover:text-white "/>
                </Link>
                <Link href="https://twitter.com/goatsunder" target="_blank" rel="noreferrer" 
                  className="hover:after:content-['twitter_will_never_die'] after:absolute after:-ml-10">
                  <FaTwitter size={icon_size} className="text-4xl text-black hover:text-white"/>
                </Link>
                <Link href="https://www.tiktok.com/@goatsunderground" target="_blank" rel="noreferrer">
                  <FaTiktok size={icon_size} className="text-4xl text-black hover:text-white"/>
                </Link>
              </div> 
            </div>

          </div>
        </div>
        <div className="absolute bottom-0 w-full flex justify-center">
          <div className="flex flex-col text-center align-center">
            <FaCaretUp size={32} className=" mx-auto text-4xl text-black hover:text-white"/>
            <span className="text-black font-bold">{"scroll up"}</span>
          </div>
        </div>
        <PopupButton className="absolute bottom-0 right-0 md:w-1/4 flex justify-center flex flex-col p-2" text="Contact Us">
          <div className="flex flex-col gap-3 text-center bg-black p-3">
            <p className="text-4xl md:text-2xl text-white font-bold">Goats Underground</p>
            <p className="text-2xl md:text-xl text-white font-bold">The Best Place to Find the Best Events</p>
          </div>
        </PopupButton>
      </div>
      <div className="flex flex-col w-full min-h-screen bg-gu-red relative overflow-hidden">
        <Image  className={'w-full translate-y-10 absolute z-0 scale-x-110'}
                  id="mask"
                  src={'/gu-background.svg'} 
                  width={200}  
                  height={50} 
                  alt="Goats Underground"
                  objectFit="fill" 
          />
          
          <div className="flex flex-col w-full mt-40 z-10 bg-black">
              <div className="flex flex-col gap-3 p-10">
                <p className="text-2xl text-black font-bold text-white">{"Upcoming Events"}</p>
                {
                  events.filter(
                    (event) => new Date(event.date) > new Date()
                  ).map((event) => {
                    const date = new Date(event.date);
                    return (
                      <div key={event.name} className="flex flex-col md:flex-row w-full">
                        <div className="flex flex-row gap-2 md:gap-0 md:flex-col bg-gu-red p-2 w-full sm:w-[8vw]">
                          <h1 className="text-3xl text-black font-bold text-white text-left ">{date.toLocaleString('default', {month: "short"}).toUpperCase()}</h1>
                          <h1 className="text-3xl text-black text-black text-right ">{date.toLocaleString('default', {day: '2-digit'})}</h1>
                        </div>
                        <div className="flex flex-col gap-3 border border-gu-red border-4 w-full p-1 pr-2">
                          <h2 className="text-xl text-black font-bold text-white">{event.name}</h2>
                          <p className="text-black font-bold text-white">{event.description}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="flex flex-col gap-3 p-10">
                {
                  landingPageSecion.map((section) => {
                    return (
                      <div key={section.title} className="flex flex-col md:flex-row w-full">
                        <div className="flex flex-col gap-3  w-full p-1 pr-2">
                          <h2 className="text-xl text-black font-bold text-white">{section.title}</h2>
                          <p className="text-black font-bold text-white">{section.description}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
          </div>
      </div>
    </main>
  );
}
