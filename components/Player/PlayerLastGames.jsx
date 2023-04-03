import axios from "axios"
import React, { useEffect, useState } from "react"

const API_KEY = "c640d2273769ec2207cce32105d260f9"

const APEX_GG_KEY = "25a8b60e-5029-4996-94b1-39d321b90400"
const PlayerLastGames = ({ global }) => {
    const [lastGames, setLastGames] = useState([])

    useEffect(() => {
        const getLastGames = async () => {
            const uid = global.uid
            try {
                const res = await axios.get(
                    `https://public-api.tracker.gg/v2/apex/standard/profile/origin/Fameax/sessions`,
                    {
                        headers: {
                            "TRN-Api-Key":
                                "25a8b60e-5029-4996-94b1-39d321b90400",
                            Accept: "application/json",
                            "Accept-Encoding": "gzip",
                        },
                    }
                )
                console.log("LAST", res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getLastGames()
    }, [global])

    return <div>PlayerLastGames</div>
}

export default PlayerLastGames
