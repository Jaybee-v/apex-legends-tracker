import Image from "next/image"
import React, { useEffect, useState } from "react"

const PredatorsTable = ({ data }) => {
    const [showComponent, setShowComponent] = useState(false)
    useEffect(() => {
        const timer = setTimeout(async () => {
            setShowComponent(true)
        }, 100)
        return () => clearTimeout(timer)
    }, [])
    console.log(data)
    const predators = [
        {
            platform: (
                <svg
                    width="30px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                >
                    <path d="M384 96V320H64L64 96H384zM64 32C28.7 32 0 60.7 0 96V320c0 35.3 28.7 64 64 64H181.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H277.3l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H528zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
            ),
            pointsToPred: data.PC.val,
            predNumber: data.PC.foundRank,
            masterNumber: data.PC.totalMastersAndPreds - data.PC.foundRank,
        },
        {
            platform: (
                <svg
                    width="30px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                >
                    <path
                        fill="#326DB3"
                        d="M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9.6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z"
                    />
                </svg>
            ),
            pointsToPred: data.PS4.val,
            predNumber: data.PS4.foundRank,
            masterNumber: data.PS4.totalMastersAndPreds - data.PS4.foundRank,
        },
        {
            platform: (
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    viewBox="0 0 550.000000 550.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g
                        transform="translate(0.000000,550.000000) scale(0.100000,-0.100000)"
                        fill="#000000"
                        stroke="none"
                    >
                        <path
                            d="M1365 5154 c-481 -86 -868 -442 -990 -910 -44 -169 -47 -268 -42
-1579 3 -1204 4 -1232 24 -1325 111 -501 467 -858 973 -976 66 -15 150 -18
691 -21 560 -4 618 -3 633 12 15 15 16 208 16 2396 0 1622 -3 2386 -10 2400
-10 18 -27 19 -613 18 -476 -1 -619 -4 -682 -15z m905 -2400 l0 -2026 -407 5
c-375 4 -415 6 -490 25 -322 83 -561 331 -628 654 -22 101 -22 2589 -1 2688
60 281 255 514 518 619 132 53 193 59 621 60 l387 1 0 -2026z"
                        />
                        <path
                            d="M1451 4169 c-63 -12 -159 -60 -210 -105 -105 -91 -157 -220 -149
-372 4 -79 9 -100 41 -164 47 -97 118 -168 215 -216 67 -33 84 -37 171 -40 79
-3 107 0 160 18 217 73 348 284 311 500 -43 257 -287 429 -539 379z"
                        />
                        <path
                            fill="#da3947"
                            d="M3157 5163 c-4 -3 -7 -1087 -7 -2409 0 -2181 1 -2402 16 -2408 27
-10 803 -6 899 4 406 46 764 293 959 660 25 47 58 126 75 175 63 188 61 138
61 1575 0 1147 -2 1318 -16 1391 -99 521 -496 914 -1018 1004 -70 12 -178 15
-526 15 -240 0 -440 -3 -443 -7z m1068 -2178 c156 -41 284 -160 336 -312 33
-94 32 -232 -1 -318 -61 -158 -181 -269 -335 -310 -250 -65 -516 86 -589 334
-22 76 -21 204 4 282 75 245 335 389 585 324z"
                        />
                    </g>
                </svg>
            ),
            pointsToPred: data.SWITCH.val,
            predNumber: data.SWITCH.foundRank,
            masterNumber:
                data.SWITCH.totalMastersAndPreds - data.SWITCH.foundRank,
        },
        {
            platform: (
                <svg
                    width="30px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="green"
                        d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z"
                    />
                </svg>
            ),
            pointsToPred: data.X1.val,
            predNumber: data.X1.foundRank,
            masterNumber: data.X1.totalMastersAndPreds - data.X1.foundRank,
        },
    ]

    console.log(predators)
    return showComponent ? (
        <div className="flex justify-center mt-10">
            {predators.map((item) => (
                <div
                    key={item.platform}
                    className="flex flex-col justify-center items-center px-10 py-5 bg-[#2c2c2c] rounded-xl mx-2 my-5"
                >
                    <h6 className="p-5">{item.platform}</h6>
                    <p>{item.pointsToPred} points = Prédator</p>
                    <p className="flex items-center">
                        {item.predNumber} joueurs
                        <span className="">
                            <Image
                                src="/assets/logo-predator-ranked.png"
                                alt="logo predator"
                                width={90}
                                height={90}
                            />
                        </span>
                    </p>
                    <p className="flex">
                        {item.masterNumber} joueurs
                        <span className="ms-6">
                            <Image
                                src="/assets/master-logo-ranked.png"
                                alt="Logo Matser"
                                width={30}
                                height={30}
                            />
                        </span>
                    </p>
                </div>
            ))}
        </div>
    ) : null
}

export default PredatorsTable
