"use client";
import Link from "next/link";

const footer_links = [
    {
        name: "Privacy Policy",
        href: "/privacy-policy",
    }
]

export function Footer() {
    return (
        <footer>
            <ul className="inline-flex">
                {
                    footer_links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </footer>
    );
}