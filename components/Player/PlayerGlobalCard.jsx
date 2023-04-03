import Image from "next/image"
import React, { useEffect, useState } from "react"
import Loading from "../Loading"
import axios from "axios"

const PlayerGlobalCard = ({ global, total, globalRank, realtime, loading }) => {
    return (
        <div
            className="flex items-center bg-[#2c2c2c] shadow shadow-gray-500 rounded-xl p-5 my-10"
            style={{ width: "fit-content" }}
        >
            {loading ? (
                <Loading />
            ) : (
                <div className="flex flex-col justify-center items-center px-5">
                    <div className="px-4 border-b font-semibold flex flex-col items-center mb-4 w-full">
                        <Image
                            src="/assets/logopreda.png"
                            alt="/"
                            width={200}
                            height={100}
                        />
                        <p
                            className=" text-white mb-10"
                            style={{ marginTop: "-40px" }}
                        >
                            {global.name}
                        </p>
                    </div>
                    <div className="flex justify-center items-center border-b pb-5">
                        <div className="px-4">Lvl {global.level}</div>
                        <div className="px-4">
                            {total.kills.value + " kills"}
                        </div>
                        <div className="px-4">{global.platform}</div>
                        <div className="px-4 flex flex-col items-center">
                            <img
                                src={globalRank.rankImg}
                                alt="/"
                                width={110}
                                height={70}
                            />
                            <p>{globalRank.rankScore} KP</p>
                        </div>
                    </div>
                    <div className="p-5">
                        <p>Statut: {realtime.currentStateAsText}</p>
                        <div>
                            Joue actuellement :
                            <img
                                src={`https://api.mozambiquehe.re/assets/icons/${realtime.selectedLegend.toLowerCase()}.png`}
                                alt="Legende séléctionnée"
                                width={150}
                                height={120}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PlayerGlobalCard
