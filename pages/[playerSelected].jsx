import React, { useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Navbar from "@/components/Navbar"
import axios from "axios"
import PlayerGlobalCard from "@/components/Player/PlayerGlobalCard"
import PlayerLastGames from "@/components/Player/PlayerLastGames"
import PlayerLegendsCard from "@/components/Player/PlayerLegendsCard"
import Footer from "@/components/Footer"

const API_KEY = "c640d2273769ec2207cce32105d260f9"

const Player = () => {
    const [total, setTotal] = useState([])
    const [global, setGlobal] = useState([])
    const [globalRank, setGlobalRank] = useState({})
    const [legends, setLegends] = useState([])
    const [realTime, setRealTime] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getPlayer = async () => {
            const player = localStorage.getItem("name")
            const platform = localStorage.getItem("platform")
            const res = await axios.get(
                `https://api.mozambiquehe.re/bridge?auth=${API_KEY}&player=${player}&platform=${platform}`
            )
            const result = res.data
            console.log("ICI PAGE PLAYER", res.data)
            setGlobal(result.global)
            setGlobalRank(result.global.rank)
            setLegends(result.legends.all)
            setTotal(result.total)
            setRealTime(result.realtime)
            setLoading(false)
        }
        getPlayer()
    }, [])

    console.log("LEGENDS", total)
    const router = useRouter()
    const { playerSelected } = router.query
    return (
        <div className="mb-10">
            <Navbar />
            <div className="flex justify-evenly items-center">
                <PlayerGlobalCard
                    global={global}
                    total={total}
                    realtime={realTime}
                    globalRank={globalRank}
                    loading={loading}
                />
                <PlayerLegendsCard legends={legends} loading={loading} />
            </div>
            <PlayerLastGames global={global} />
            <Footer />
        </div>
    )
}

export default Player
