import axios from "axios"
import Image from "next/image"
import React, { useEffect, useState } from "react"

const PlayerLegendsCard = ({ legends }) => {
    const Okdata = JSON.stringify(legends)
    console.log("CIICCCII", JSON.stringify(legends))
    const legend = Object.values(legends)
    let legendArray = []
    for (let legend in legends) {
        legendArray.push(legends[legend])
        console.log(legends[legend])
    }

    console.log("TABLEAU", legendArray)
    console.log(JSON.parse(Okdata))
    console.log(legend)
    return (
        <div className="grid grid-rows-6 grid-flow-col w-96">
            {legendArray.map((legend) => (
                <div className="flex flex-col items-center" key={legend}>
                    <img
                        src={legend.ImgAssets.icon}
                        alt="/"
                        width={100}
                        height={100}
                    />
                    {legend.data ? (
                        <>
                            <p>{legend.data[0].value + " kills"}</p>
                            <p>Top {legend.data[0].rank.topPercent}%</p>
                        </>
                    ) : null}
                </div>
            ))}
            {/* <Image
                    src={legend.ImgAssets.icon}
                    alt={`Icone ${legend}`}
                    width={150}
                    height={150}
                /> */}
        </div>
    )
}

export default PlayerLegendsCard
