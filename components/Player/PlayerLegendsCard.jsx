import axios from "axios"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import Loading from "../Loading"

const PlayerLegendsCard = ({ legends, loading }) => {
    let legendArray = []
    for (let legend in legends) {
        legendArray.push(legends[legend])
        console.log(legends[legend])
    }

    return (
        <>
            {loading ? (
                <div className=" p-5 bg-[#2c2c2c] shadow shadow-gray-500 rounded-xl ">
                    <Loading />
                </div>
            ) : (
                <div className="grid grid-cols-8 p-5 bg-[#2c2c2c] shadow shadow-gray-500 rounded-xl ">
                    {legendArray.map((legend) => (
                        <div
                            className="flex flex-col items-center"
                            key={`${legend.ImgAssets.icon}`}
                        >
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
                </div>
            )}
        </>
    )
}

export default PlayerLegendsCard
