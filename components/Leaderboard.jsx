import axios from "axios"
import React, { useEffect, useState } from "react"
const API_KEY = "c640d2273769ec2207cce32105d260f9"

const Leaderboard = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(
                `https://api.mozambiquehe.re/leaderboard?auth=${API_KEY}&legend=Global&platform=ANY`
            )
            console.log("LEADER", res.data)
        }
        getData()
    }, [])

    console.log(API_KEY)
    return <div>Leaderboard</div>
}

export default Leaderboard
