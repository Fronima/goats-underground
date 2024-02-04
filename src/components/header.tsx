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
        <header className={"sticky top-0 w-full bg-white z-30 absolute " + courier_prime.className}>
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
        <nav className="text-black flex flex-row h-10 items-center justify-between mr-10 md:justify-start ">
            <div className="ml-5 mr-10">
                <Link href="/">
                    <Image src="/logo.svg" alt="Logo" width={200} height={50} />
                </Link>
            </div>
            <button className={`nav-button ${!isMobile && 'hidden'}`} onClick={()=>{
                setOpenNav(!openNav);
            }}>Menu</button>
            <ul className={`flex gap-5 my-auto rounded-xl bg-white p-4 ${!openNav && isMobile && 'hidden'} ${isMobile ? 'absolute top-8 right-2 flex-col' : 'flex-row'}`}>
            {navItems.map((link) => (
                <li key={link.href}>
                    <Link 
                        className={`text-2xl ${currentPath === link.href ? 'text-purple-900' : ''}`}
                        href={link.href}
                    >{link.name}</Link>
                </li>
            ))}         
        </ul>
        </nav>
    );
}

