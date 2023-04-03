import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import StoreList from "@/components/StoreList"
import axios from "axios"
import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

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

    // const date = dayjs(store[0].expireTimestamp).format("DD/MM/YYYY")
    // console.log(date)
    return (
        <div>
            <Navbar />
            <h1 className="my-10">
                La boutique actuelle :
                {/* {dayjs(store[0].expireTimestamp).fromNow()} */}
            </h1>
            <StoreList store={store} />
            <Footer />
        </div>
    )
}

export default Store
