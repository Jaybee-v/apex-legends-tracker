import Link from "next/link"
import React from "react"

function Footer() {
    return (
        <div className="fixed bottom-0 flex h-[50px] bg-gray-700 w-full justify-center items-center">
            <Link
                className="flex justify-center hover:text-white transition"
                href="https://apexlegendsstatus.com"
            >
                Data provided by Apex Legends Status.
            </Link>
        </div>
    )
}

export default Footer
