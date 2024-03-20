'use client';
import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/router";
import './header.css';
import useWindowSize from "@/lib/hooks/useWindowSize";
import { usePathname } from "next/navigation";
import SiteConfig from "@/config";

const oswald = Oswald({ weight: ["700"], subsets: ["latin"]});

export function Header() {
    return (
        <header className={"fixed top-0 w-full bg-gradient-to-r from-gu-red to-red-900 z-30 " + oswald.className}>
            <Nav/>
        </header>
    );
}



function Nav() {
    const {isMobile} = useWindowSize();
    const currentPath = usePathname();
    const [openNav, setOpenNav] = useState(false);
    const isHome = currentPath === "/";
    
    return (
        <nav className={`text-white flex flex-row h-10 items-center justify-between mr-10 md:justify-start  w-full ${isHome ? "hidden" : ""}`}>
            { SiteConfig.logo && 
            <div className="ml-5 w-32 pt-10">
                <Link href="/">
                    <Image src={SiteConfig.logo} alt="Logo" width={200} height={50} />
                </Link>
            </div>
            }
            <button className={`nav-button pr-5 ${!isMobile && 'hidden'}`} onClick={()=>{
                setOpenNav(!openNav);
            }}>Menu</button>
            <ul className={`flex gap-5 my-auto pl-4 animate ${!openNav && isMobile && 'hidden'} ${isMobile ? 'bg-gu-red absolute top-8 right-2 flex-col p-4' : 'flex-row'}`}
                onClick={()=> setOpenNav(false)}>
            {SiteConfig.navItems.map((link) => (
                <li key={link.href}>
                    <Link 
                        className={`text-2xl ${currentPath === link.href ? 'underline' : ''}`}
                        href={link.href}
                    >{link.name}</Link>
                </li>
            ))}         
        </ul>
        </nav>
    );
}

