import React, { useState } from "react"

const PlayerContext = React.createContext

const PlayerProvider = (props) => {
    const [player, setPlayer] = useState("")
    const [platform, setPlatform] = useState("")

    return (
        <PlayerContext.Provider
            value={{ player, setPlayer, platform, setPlatform }}
        >
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerProvider
