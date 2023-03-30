import axios from "axios"
import React, { useEffect, useState } from "react"

const API_KEY = "c640d2273769ec2207cce32105d260f9"

const PlayerLastGames = ({ global }) => {
    const [lastGames, setLastGames] = useState([])

    useEffect(() => {
        const getLastGames = async () => {
            try {
                const res = await axios.get(
                    `https://api.mozambiquehe.re/games?auth=${API_KEY}&uid=${global.uid}`
                )
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        getLastGames()
    }, [global])

    return <div>PlayerLastGames</div>
}

export default PlayerLastGames
