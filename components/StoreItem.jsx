import Image from "next/image"
import React from "react"

function StoreItem({ item }) {
    return (
        <div className="flex mx-auto" srtyle={{ width: "fit-content" }}>
            <div className="flex flex-col rounded-xl justify-center items-center bg-[#2d3436] shadow shadow-gray-500">
                <div className="p-5 w-[160px] flex justify-center text-white font-medium">
                    {item.title}
                </div>
                <img src={item.asset} alt={item.title} width={120} />
                <div className="flex items-center p-4">
                    <b>{item.pricing[0].quantity}</b>{" "}
                    <span className="ms-3">
                        <Image
                            src={"/assets/apex-coins.png"}
                            alt="apex coins"
                            width={25}
                            height={20}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default StoreItem
