import Image from "next/image"
import React from "react"

function StoreItem({ item }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div>{item.title}</div>
            <img src={item.asset} alt={item.title} width={120} />
            <div className="flex items-center">
                {item.pricing[0].quantity}{" "}
                <span className="ms-3">
                    <Image
                        src={"/assets/apex-coins.png"}
                        alt="apex coins"
                        width={20}
                        height={20}
                    />
                </span>
            </div>
        </div>
    )
}

export default StoreItem
