import Navbar from "@/components/Navbar"
import StoreList from "@/components/StoreList"
import axios from "axios"
import React, { useEffect, useState } from "react"

const API_KEY = "c640d2273769ec2207cce32105d260f9"

function Store() {
    const [store, setStore] = useState([])

    useEffect(() => {
        const getStore = async () => {
            try {
                const res = await axios.get(
                    `https://api.mozambiquehe.re/store?auth=${API_KEY}`
                )
                console.log(res.data)
                setStore(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getStore()
    }, [])
    return (
        <div>
            <Navbar />
            <StoreList store={store} />
        </div>
    )
}

export default Store
