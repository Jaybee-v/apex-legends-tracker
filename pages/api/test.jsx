// import React, { useEffect, useState } from "react"

// const Test = () => {
//     const [data, setData] = useState([])

//     useEffect(() => {
//         const getData = async () => {
//             let platf = localStorage.getItem("platform")
//             let name = localStorage.getItem("player")
//             if (global.platform === "PC") {
//                 platf = "origin"
//             }
//             try {
//                 const res = await axios.get(
//                     `https://public-api.tracker.gg/v2/apex/standard/profile/${platf}/${name}`,
//                     {
//                         headers: {
//                             "TRN-Api-Key":
//                                 "25a8b60e-5029-4996-94b1-39d321b90400",
//                         },
//                     }
//                 )
//                 console.log(res)
//                 setData(res.data)
//             } catch (err) {}
//         }
//         getData()
//     }, [])

//     return data
// }
