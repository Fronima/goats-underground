'use client';
import Image from "next/image";
import Link from "next/link";
import { Courier_Prime } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/router";
import './header.css';
import useWindowSize from "@/lib/hooks/useWindowSize";
import { usePathname } from "next/navigation";

const courier_prime = Courier_Prime({ weight: ["400"], subsets: ["latin"]});

export function Header() {
    return (
        <header className={"fixed top-0 w-full bg-white z-30 " + courier_prime.className}>
            <Nav/>
        </header>
    );
}

const navItems = [
    {
        name: "Portfolio",
        href: "/portfolio",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

function Nav() {
    const {isMobile} = useWindowSize();
    const currentPath = usePathname();
    const [openNav, setOpenNav] = useState(false);
    
    return (
        <nav className="text-black flex flex-row h-10 items-center justify-between mr-10 md:justify-start hidden w-full">
            <div className="ml-5 mr-10">
                <Link href="/">
                    <Image src="/logo.svg" alt="Logo" width={200} height={50} />
                </Link>
            </div>
            <button className={`nav-button pr-5 ${!isMobile && 'hidden'}`} onClick={()=>{
                setOpenNav(!openNav);
            }}>Menu</button>
            <ul className={`flex gap-5 my-auto rounded-xl  ${!openNav && isMobile && 'hidden'} ${isMobile ? 'bg-purple-200 absolute top-8 right-2 flex-col p-4' : 'flex-row'}`}
                onClick={()=> setOpenNav(false)}>
            {navItems.map((link) => (
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

