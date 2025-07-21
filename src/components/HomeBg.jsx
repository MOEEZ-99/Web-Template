import React from 'react'
import bgImage from "../assets/bg-image.png"
import amazon from "../assets/amazon.png"
import c2 from "../assets/company-2.png"
import c3 from "../assets/company-3.png"
import c4 from "../assets/company-4.png"
import c5 from "../assets/company-5.png"
import c6 from "../assets/company-6.png"

export const HomeBg = () => {
  return (
    <>
    <div className="main">
      <div className="grid grid-cols-2 gap-4 max-[1000px]:grid-cols-1">

        {/* text + (mobile) image */}
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold md:text-7xl text-4xl">
            Navigating the digital landscape for success
          </h1>

          {/* only show on ≤1000px, and keep its natural size */}
          <img
            src={bgImage}
            alt=""
            className="block max-[1000px]:block min-[1001px]:hidden"
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam iste, soluta corrupti cupiditate iure explicabo doloremque dolorem vitae laborum? Sint quo id neque molestiae illo?
          </p>
          <button className='text-xs bg-black text-white px-5 text-center py-3 rounded-[8px] w-fit max-[1000px]:w-full cursor-pointer hover:text-black border-1 hover:border-black hover:bg-white'>Book a consultation</button>
        </div>

        {/* desktop‐only image in the right column */}
        <div className="min-[1001px]:block hidden">
          <img
            src={bgImage}
            alt=""
            className="w-[90%] h-auto"
          />
        </div>

      </div>
    </div>

    <div className="logos flex flex-wrap justify-between">
        <img src={amazon} alt="" />
        <img src={c2} alt="" />
        <img src={c3} alt="" />
        <img src={c4} alt="" />
        <img src={c5} alt="" />
        <img src={c6} alt="" />
    </div>
            </>
  )
}
