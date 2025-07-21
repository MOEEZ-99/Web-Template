import React, { useEffect, useState } from 'react'
import plus from "../assets/plus.png"
import minus from "../assets/minus.png"
import { accordionData } from "../data/accordionData.js"

export const Accordion = ({Data}) => {
    const [data, setdata] = useState(Data)
    const openMenu = (id) => { 
        const newData = data.map((d)=>{
            if(d.count === id){
                return {...d, isOpen:!d.isOpen}
            }
            else{
                return {...d, isOpen:false}
            }
        })
        setdata(newData)
     }
    return (
        <>
            {data.map((d) => {
                return <div className={`main px-10 border-1 border-b-4 border-black1 ${d.isOpen? "bg-green" : "bg-[#F3F3F3]"} rounded-3xl mb-3 overflow-hidden ${d.isOpen? "max-h-[300px]" : "max-h-[100px]"} transition-all duration-300 ease-in-out`} key={d.count}>

                    <div className="title flex justify-between py-5">
                        <div className="left flex items-center gap-4">
                            <h1 className='text-3xl font-semibold'>{d.count}</h1>
                            <h3 className='font-semibold text-xl'>{d.title}</h3>
                        </div>

                        <div className="right" onClick={()=>{openMenu(d.count)}}>
                            <img src={`${d.isOpen? minus : plus}`} alt="" />
                        </div>
                    </div>

                    <hr />

                    <div className="conent py-9">
                        <p>{d.content}</p>
                    </div>
                </div>
            })}
        </>
    )
}
