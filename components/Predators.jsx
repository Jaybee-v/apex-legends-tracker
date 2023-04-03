import axios from "axios"
import React, { useEffect, useState } from "react"
import PredatorsTable from "./PredatorsTable"

const API_KEY = "c640d2273769ec2207cce32105d260f9"

const Predators = () => {
    const [showComponent, setShowComponent] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(
                `https://api.mozambiquehe.re/predator?auth=${API_KEY}`
            )
            console.log(res.data)
            const result = res.data
            console.log(result.RP)
            const RP = result.RP
            setData(RP)
            setShowComponent(true)
        }

        getData()
    }, [])

    // console.log(predators)
    // const pred = JSON.stringify(data)
    // console.log(pred)

    return showComponent ? <PredatorsTable data={data} /> : null
}

export default Predators
