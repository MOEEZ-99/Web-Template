import React from 'react'
import card1 from "../assets/card-1.png"
import card2 from "../assets/card-2.png"
import card3 from "../assets/card-3.png"
import card4 from "../assets/card-4.png"
import card5 from "../assets/card-5.png"
import card6 from "../assets/card-6.png"

export const Services = () => {
  return (
    <div className='md:mt-27 mt-10 flex flex-col md:gap-20 gap-10'>
            <div className="title flex md:gap-6 gap-3 flex-wrap md:justify-start justify-center">
                <h1 className='bg-green text-3xl p-1 font-semibold rounded'>Services</h1>
                <p className='md:w-[55%] text-xl md:mt-[-5px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum laudantium vitae, deleniti libero minima .</p>
            </div>
            
            <div className="cards grid grid-cols-2 md:gap-10 gap-3 max-[760px]:grid-cols-1 min-[1600px]:grid-cols-4 flex-wrap">
              <img src={card1} alt="" className='hover:scale-[1.1] transition duration-400 cursor-pointer'/>
              <img src={card2} alt="" className='hover:scale-[1.1] transition duration-400 cursor-pointer'/>
              <img src={card3} alt="" className='hover:scale-[1.1] transition duration-400 cursor-pointer'/>
              <img src={card4} alt="" className='hover:scale-[1.1] transition duration-400 cursor-pointer'/>
              <img src={card5} alt="" className='hover:scale-[1.1] transition duration-400 cursor-pointer'/>
              <img src={card6} alt="" className='hover:scale-[1.1] transition duration-400 cursor-pointer'/>
            </div>
    </div>
  )
}
