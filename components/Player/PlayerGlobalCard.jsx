import Image from "next/image"
import React, { useEffect, useState } from "react"
import Loading from "../Loading"
import axios from "axios"

const PlayerGlobalCard = ({ global, total, globalRank, legends, loading }) => {
    return (
        <div
            className="flex items-center border border-gray-600 rounded p-5 my-10 mx-auto"
            style={{ width: "fit-content" }}
        >
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className="px-4 font-semibold flex flex-col items-center mb-4">
                        <Image
                            src="/assets/logopreda.png"
                            alt="/"
                            width={200}
                            height={100}
                        />
                        <p
                            className=" text-white "
                            style={{ marginTop: "-40px" }}
                        >
                            {global.name}
                        </p>
                    </div>
                    <div className="px-4">Lvl {global.level}</div>
                    <div className="px-4">{total.kills.value + " kills"}</div>
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
                </>
            )}
        </div>
    )
}

export default PlayerGlobalCard
