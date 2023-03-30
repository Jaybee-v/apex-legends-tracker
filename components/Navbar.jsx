import Image from "next/image"
import Link from "next/link"
import React from "react"

const Navbar = () => {
    return (
        <header className="w-full h-20 bg-gray-700 flex items-center">
            <div>
                <Link href="/">
                    <Image
                        src="/assets/logo.png"
                        width={180}
                        height={90}
                        alt="/"
                    />
                </Link>
            </div>
        </header>
    )
}

export default Navbar
