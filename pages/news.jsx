import Navbar from "@/components/Navbar"
import NewsItem from "@/components/NewsItem"
import axios from "axios"
import React, { useEffect, useState } from "react"

const API_KEY = "c640d2273769ec2207cce32105d260f9"

function News() {
    const [items, setItems] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await axios.get(
                `https://api.mozambiquehe.re/news?auth=${API_KEY}`
            )
            const data = res.data
            console.log("NEWS", res.data)
            setItems(data)
        }
        getData()
    }, [])

    return (
        <div>
            <Navbar />
            <NewsItem items={items} />
        </div>
    )
}

export default News
