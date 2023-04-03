import Link from "next/link"
import React, { useState } from "react"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"

function NewsItem({ items }) {
    // const [currentIndex, setCurrentIndex] = useState(0)

    // const goToPrevious = () => {
    //     const isFirstIndex = currentIndex === 0
    //     const newIndex = isFirstIndex ? items.length - 1 : currentIndex - 1

    //     setCurrentIndex(newIndex)
    // }
    // const goToNext = () => {
    //     const isLastIndex = currentIndex === items.length - 1
    //     const newIndex = isLastIndex ? 0 : currentIndex + 1

    //     setCurrentIndex(newIndex)
    // }

    return (
        <div>
            {items.map((item) => (
                <div
                    className="bg-[#2c2c2c] hover:shadow-lg hover:shadow-gray-100 transition rounded-2xl p-10 flex flex-col justify-center items-center w-[50%] mx-auto mt-10"
                    key={item.title}
                >
                    <div className="mx-auto">
                        <h2 className="mb-10">{item.title}</h2>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        {/* <div className="" onClick={goToPrevious}>
                            <FaChevronLeft className="text-[50px] text-white me-3 cursor-pointer" />
                        </div> */}
                        <Link href={item.link}>
                            <img
                                src={item.img}
                                alt="News pitcure"
                                className="mx-auto cursor-pointer"
                            />
                        </Link>
                        <p className="w-[500px] bg-gray-300 p-5 mt-10 mb-5 rounded">
                            {item.short_desc}
                        </p>
                        {/* <div onClick={goToNext}>
                            <FaChevronRight className="text-[50px] text-white ms-3 cursor-pointer" />
                        </div> */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NewsItem
