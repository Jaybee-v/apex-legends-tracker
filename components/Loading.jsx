import Image from "next/image"
import React from "react"

const Loading = () => {
    return (
        <Image
            src="/assets/mozambique.png"
            alt="Loader"
            width={200}
            height={200}
            className="loading"
        />
    )
}

export default Loading
