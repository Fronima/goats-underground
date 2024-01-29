import Image from "next/image";
import Link from "next/link";
import { Courier_Prime } from "next/font/google";

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
    return (
        <nav className="text-black flex flex-row h-10 items-center">
            <div className="ml-5 mr-10">
                <Link href="/">
                    <Image src="/logo.svg" alt="Logo" width={200} height={50} />
                </Link>
            </div>
            <ul className="flex flex-row gap-5 pt-1">
                {navItems.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}         
            </ul>
        </nav>
    );
}