import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import axios from "axios"
import React, { useEffect, useState } from "react"

const API_KEY = "c640d2273769ec2207cce32105d260f9"

const Crafting = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(
                    `https://api.mozambiquehe.re/crafting?auth=${API_KEY}`
                )
                setData(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [])

    let crafts = []
    console.log("DATA", data)
    for (let i = 0; i < data.length; i++) {
        const bundleContent = data[i].bundleContent
        if (bundleContent.length > 1) {
            for (let y = 0; y < bundleContent.length; y++) {
                if (bundleContent[y].length > 0) {
                    crafts.push(bundleContent[y][0])
                } else {
                    crafts.push(bundleContent[y])
                }
            }
        } else {
            crafts.push(bundleContent)
        }
    }

    console.log("CRAFTS", crafts)

    return (
        <div>
            <Navbar />
            <div className="flex justify-center mx-auto p-10 mt-10 rounded-2xl bg-[#2c2c2c] w-[fit-content]">
                <div className="grid grid-cols-3 gap-9">
                    {crafts.map((craft, index) => (
                        <div className="mx-5" key={`${craft.item}-${index}`}>
                            {craft.itemType && craft.cost > 10 ? (
                                <img
                                    src={craft.itemType.asset}
                                    alt={craft.itemType.name}
                                    width={100}
                                    height={100}
                                />
                            ) : null}
                            {craft[0] ? (
                                <img
                                    src={craft[0].itemType.asset}
                                    alt={craft[0].itemType.name}
                                    width={100}
                                    height={100}
                                />
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Crafting
