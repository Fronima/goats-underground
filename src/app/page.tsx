
import Image from "next/image";
import { getHomepageHeader, getEvents, getLandingpageSection, getContact, Contact } from "../../sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
import { client } from "../../sanity/client";
import { Oswald } from "next/font/google";
import { InferGetServerSidePropsType } from "next";
import About from "./about/page";
import ContactPage from "./contact/page";
import Link from "next/link";
import './index.css'
import { sendGTMEvent } from "@next/third-parties/google";
import { EventItem } from "./events"
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaArrowUp, FaCaretUp } from "react-icons/fa"
import PopupButton from "@/components/popup-button";
import GoatSplashSVG from "@/components/goat-splash";
import SiteConfig from "@/config";



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
  location: string,
  link: string,
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

  const contact:Contact[] = await getContact();
  const events:Event[] = await getEvents();
  const landingPageSecion:LandingPageSection[] = await getLandingpageSection();


  return (
    <main className="flex flex-col h-gull w-full overflow-hidden front-page">
      <div className="h-screen w-full relative">
        <div className="top-0 w-full h-full">
          
        </div>
        <div className=" absolute top-10 sm:top-16 md:top-[15
          vh] w-full flex items-center justify-center">
          <div className="flex flex-col landscape:flex-row lg:flex-row items-center justify-center gap-10">
            
            <GoatSplashSVG className="w-[70vw] md:w-[40vw] lg:w-[40vw] h-[50vh] sm:h-[40vh]  lg:h-[70vh]"/>
            <div className={"top-0  md:gap-3 flex flex-col justify-center text-start p-5 " + oswald.className}>
              {
                SiteConfig.navItems.map((link) => (
                  <Link 
                    className={`text-black text-[8vw] md:text-[3vw] font-extrabold  hover:text-white hover:translate-x-1 transition ease-in-out duration-300 after:mix-blend-plus-lighter`}
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
        <PopupButton className="absolute bottom-0 right-0 md:w-1/4 flex justify-center flex flex-col p-2 gap-2" text="Contact Us">
          <div className="flex flex-col gap-3 text-center bg-black p-3">
            {
              contact.map((contact) => {
                return (
                  <div key={contact.title} className="flex flex-col gap-2">
                    {contact.title && <h2 className="text-xl text-black font-bold text-white">{contact.title}</h2>}
                    {contact.description && <p className="text-black font-bold text-white">{contact.description}</p>}
                    {contact.email && <a href={`mailto:${contact.email}`} className="text-black font-bold text-gu-brand">{contact.email}</a>}
                    {contact.phone && <a href={`tel:${contact.phone}`} className="text-black font-bold text-gu-brand">{contact.phone}</a>}
                  </div>
                )
              })
            }
          </div>
        </PopupButton>
      </div>
      <div className="flex flex-col w-full min-h-screen bg-transparent relative overflow-hidden">
        <div className="h-1/3 w-full bg-transparent absolute" ></div>
        <Image  className={'w-full translate-y-10 absolute z-0 scale-x-110'}
                  id="mask"
                  src={'/gu-background.svg'} 
                  width={200}  
                  height={50} 
                  alt="Goats Underground"
                  objectFit="fill" 
          />
          
          <div className="flex flex-col w-full mt-40 z-10 bg-black h-full">
              <div className="flex flex-col gap-3 p-10">
                <p className="text-2xl text-black font-bold text-white">{"Upcoming Events"}</p>
                {
                  events.filter(
                    (event) => new Date(event.date) > new Date()
                  ).map((event) => {
                    return (
                      EventItem({event})
                    )
                  })
                }
              </div>
              <div className="flex flex-col gap-3 p-10 h-full">
                {
                  landingPageSecion.map((section) => {
                    return (
                      <div key={section.title} className="flex flex-col md:flex-row w-full">
                        <div className="flex flex-col gap-3  w-full p-1 pr-2">
                          <h2 className="text-xl text-black font-bold text-gu-brand-begin">{section.title}</h2>
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
