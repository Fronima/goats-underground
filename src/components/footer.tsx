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
            <div className="flex flex-col p-2 gap-1">
                <ul className="inline-flex z-20">
                    {
                        footer_links.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex flex-row justify-center">
                    <p>Copyright © 2024 Goats Underground ®</p>
                </div>
            </div>
        </footer>
    );
}