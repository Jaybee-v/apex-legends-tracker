import axios from "axios"
import Image from "next/image"
import React, { useEffect, useState } from "react"

const API_KEY = "c640d2273769ec2207cce32105d260f9"

const MapRotation = () => {
    const [actual, setActual] = useState([])
    const [next, setNext] = useState([])
    const [actualName, setActualName] = useState("")
    const [actualImg, setActualImg] = useState("")
    const [nextName, setNextName] = useState("")

    useEffect(() => {
        const getRotation = async () => {
            try {
                const res = await axios.get(
                    `https://api.mozambiquehe.re/maprotation?auth=${API_KEY}`
                )
                console.log(res.data)
                setActual(res.data.current)
                setActualName(res.data.current.map)
                setActualImg(res.data.current.asset)
                setNext(res.data.next)
                setNextName(res.data.next.map)
            } catch (err) {
                console.log(err)
            }
        }
        getRotation()
    }, [])

    const currentNameForUrl = actualName.replace(" ", "_")
    const nextNameForUrl = nextName.replace(" ", "_")

    const nextImg = actualImg.replace(currentNameForUrl, nextNameForUrl)
    return (
        <div
            className="flex flex-col justify-evenly items-center relative  border rounded-xl p-5"
            style={{ width: "1000px" }}
        >
            <h6 className="mb-6">Temps restant: {actual.remainingTimer}</h6>
            <div
                className="flex justify-evenly items-center relative"
                style={{ width: "1000px" }}
            >
                <div className="relative">
                    <Image
                        src={actualImg}
                        alt="Current map"
                        width={350}
                        height={240}
                    />
                    <p className="absolute top-10 left-4 text-white">
                        {actualName}
                    </p>
                </div>
                <div className="relative w-[350] h-[240]">
                    <Image
                        src={nextImg}
                        alt="Current map"
                        width={350}
                        height={240}
                    />
                    <p className="absolute top-10 left-4 text-white">
                        {nextName}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MapRotation
