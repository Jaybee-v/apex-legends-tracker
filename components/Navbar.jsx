import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import InputPlayerSearch from "./InputPlayerSearch"
import { useRouter } from "next/router"

const Navbar = () => {
    const router = useRouter()
    // const [url, setUrl] = useState("http://localhost:3000/store")

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
                <Link
                    href="/"
                    className={
                        router.asPath === "/"
                            ? "text-white font-medium"
                            : "hover:text-white hover:font-medium transition"
                    }
                >
                    <li>Accueil</li>
                </Link>
                <Link
                    href="/news"
                    className={
                        router.asPath === "/news"
                            ? "text-white font-medium"
                            : "hover:text-white hover:font-medium transition"
                    }
                >
                    <li>News</li>
                </Link>
                <Link
                    href="/store"
                    className={
                        router.asPath === "/store"
                            ? "text-white font-medium"
                            : "hover:text-white hover:font-medium transition"
                    }
                >
                    <li>Boutique</li>
                </Link>
                <Link
                    href="/crafting"
                    className={
                        router.asPath === "/crafting"
                            ? "text-white font-medium"
                            : "hover:text-white hover:font-medium transition"
                    }
                >
                    <li>Crafting</li>
                </Link>
            </ul>
        </header>
    )
}

export default Navbar
