import Link from "next/link"
import React, { useState } from "react"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"

function NewsItem({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstIndex = currentIndex === 0
        const newIndex = isFirstIndex ? items.length - 1 : currentIndex - 1

        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastIndex = currentIndex === items.length - 1
        const newIndex = isLastIndex ? 0 : currentIndex + 1

        setCurrentIndex(newIndex)
    }

    return (
        <>
            {items ? (
                <div className="flex flex-col justify-center items-center w-[50%] mx-auto mt-10">
                    <div className="mx-auto">
                        <h2 className="mb-10">{items[currentIndex].title}</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="" onClick={goToPrevious}>
                            <FaChevronLeft className="text-[50px] text-white me-3 cursor-pointer" />
                        </div>
                        <Link href={items[currentIndex].link}>
                            <img
                                src={items[currentIndex].img}
                                alt="News pitcure"
                                className="mx-auto cursor-pointer"
                            />
                        </Link>
                        <div onClick={goToNext}>
                            <FaChevronRight className="text-[50px] text-white ms-3 cursor-pointer" />
                        </div>
                    </div>
                </div>
            ) : (
                <h2>Nous ne trouvons pas les news;</h2>
            )}
        </>
    )
}

export default NewsItem
