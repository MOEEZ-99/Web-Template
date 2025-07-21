import React from 'react'
import green from "../assets/green-tick.png"
import black from "../assets/black-tick.png"

export const PriceCard = ({ price, title, mid, list }) => {
  return (
    <div className={`border-1 border-b-4 rounded-2xl p-5 h-full ${mid ? "bg-black1" : "bg-white"} relative`}>
        <div className="popular font-semibold px-3 py-2 bg-green rounded-3xl absolute right-5"
            style={
                {
                    display: mid? "block" : "none"
                }
            }
        >
            Popular
        </div>
      <div className="top flex flex-col gap-6">
        <h3 className={`${mid ? "text-white" : "text-black"} font-semibold text-2xl`}>{title}</h3>
        <h1 className={`${mid ? "text-white" : "text-black"} font-semibold text-3xl flex items-center gap-2`}>
          ${price}
          <span className={`font-normal text-xl ${mid? "text-grey":"text-black1"}`}>/month</span>
        </h1>

        <div className="buttons flex flex-col gap-3">
          <button className={`${mid ? "bg-green border-green border-1 hover:bg-white hover:border-black1" : "bg-black1 text-grey border-black border-2 hover:bg-white hover:text-black1"} px-[53px] py-2 text-center cursor-pointer rounded-xl md:w-fit`}>Get Started</button>
          <button className={`${mid ? "bg-black border-2 border-black1 text-white hover:bg-white hover:text-black" : "border-black border-2 text-black hover:bg-black hover:text-white"} px-9 py-2 text-center cursor-pointer rounded-xl md:w-fit`}>Request a quote</button>
        </div>
        <hr className='w-full' />
      </div>

      <div className="list">
        <ul className="flex flex-col gap-4 mt-8">
          {list.map((l, index) => (
            <li key={index} className='flex items-center gap-2'>
              <img src={mid? black : green} alt="" />
              <span className={`${mid? "text-grey" : "text-black"}`}>{l}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
