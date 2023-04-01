import Image from "next/image"
import Link from "next/link"
import React from "react"
import InputPlayerSearch from "./InputPlayerSearch"

const Navbar = () => {
    return (
        <header className="w-full h-20 bg-gray-700 flex items-center justify-between">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/assets/logo.png"
                        width={180}
                        height={90}
                        alt="/"
                    />
                </Link>
                <div>
                    <InputPlayerSearch />
                </div>
            </div>
            <ul className="me-[120px] flex justify-evenly w-[50%]">
                <Link href="/news">
                    <li>News</li>
                </Link>
                <Link href="/store">
                    <li>Boutique</li>
                </Link>
            </ul>
        </header>
    )
}

export default Navbar
