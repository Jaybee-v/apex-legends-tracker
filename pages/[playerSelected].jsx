import React, { useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Navbar from "@/components/Navbar"
import axios from "axios"
import PlayerGlobalCard from "@/components/Player/PlayerGlobalCard"
import PlayerLastGames from "@/components/Player/PlayerLastGames"
import PlayerLegendsCard from "@/components/Player/PlayerLegendsCard"

const API_KEY = "c640d2273769ec2207cce32105d260f9"

const Player = () => {
    const [total, setTotal] = useState([])
    const [global, setGlobal] = useState([])
    const [globalRank, setGlobalRank] = useState({})
    const [legends, setLegends] = useState([])
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
            setLoading(false)
        }
        getPlayer()
    }, [])

    console.log("LEGENDS", total)
    const router = useRouter()
    const { playerSelected } = router.query
    return (
        <>
            <Navbar />
            <PlayerGlobalCard
                global={global}
                total={total}
                globalRank={globalRank}
                legends={legends}
                loading={loading}
            />
            <PlayerLegendsCard legends={legends} />
            {/* <PlayerLastGames global={global} /> */}
        </>
    )
}

export default Player
