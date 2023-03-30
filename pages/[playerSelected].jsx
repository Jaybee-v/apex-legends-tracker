import React, { useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Navbar from "@/components/Navbar"
import axios from "axios"
import PlayerGlobalCard from "@/components/Player/PlayerGlobalCard"
import PlayerLastGames from "@/components/Player/PlayerLastGames"

const API_KEY = "c640d2273769ec2207cce32105d260f9"

const Player = () => {
    const [data, setData] = useState([])
    const [global, setGlobal] = useState([])
    const [globalRank, setGlobalRank] = useState({})
    const [legends, setLegends] = useState([])

    useEffect(() => {
        const getPlayer = async () => {
            const player = localStorage.getItem("name")
            const platform = localStorage.getItem("platform")
            const res = await axios.get(
                `https://api.mozambiquehe.re/bridge?auth=${API_KEY}&player=${player}&platform=${platform}`
            )
            console.log("ICI PAGE PLAYER", res.data)
            setGlobal(res.data.global)
            setGlobalRank(res.data.global.rank)
            setLegends(res.data.legends.all)
            setData(res.data.total)
        }
        getPlayer()
    }, [])
    const router = useRouter()
    const { playerSelected } = router.query
    return (
        <>
            <Navbar />
            <PlayerGlobalCard
                global={global}
                data={data}
                globalRank={globalRank}
                legends={legends}
            />
            <PlayerLastGames global={global} />
        </>
    )
}

export default Player
