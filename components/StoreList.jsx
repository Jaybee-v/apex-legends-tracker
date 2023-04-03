import React from "react"
import StoreItem from "./StoreItem"

function StoreList({ store }) {
    return (
        <div className=" w-[60%] mx-auto mt-10 mb-[90px] rounded-xl bg-[#2c2c2c] shadow-lg shadow-gray-500 p-10">
            <div className="grid grid-rows-4 grid-flow-col gap-4">
                {store.map((item) => (
                    <StoreItem item={item} key={item.title} />
                ))}
            </div>
        </div>
    )
}

export default StoreList
