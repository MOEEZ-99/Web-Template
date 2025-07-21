import React from 'react'
import aboutBg from "../assets/about-bg.png"
import { Title } from './Title'
import j1 from "../assets/j1.png"
import j2 from "../assets/j2.png"
import j3 from "../assets/j3.png"
import j4 from "../assets/j4.png"
import journey from "../assets/journey-img.png"
import jStar from "../assets/j-star.png"
import { ValuesCard } from './ValuesCard'
import founder from "../assets/founder.png"
import award1 from "../assets/award-1.png"
import award2 from "../assets/award-2.png"
import award3 from "../assets/award-3.png"
import award4 from "../assets/award-4.png"
import team from "../assets/team.png"

export const AboutBg = () => {
  return (
    <>
    <div className='bg-[#F3F3F3] rounded-3xl'>
         <div className="grid grid-cols-2 gap-4 max-[1000px]:grid-cols-1 p-8">
        
                {/* text + (mobile) image */}
                <div className="flex flex-col gap-4 order-2">
                  <h1 className="font-semibold md:text-7xl text-4xl">
                    Together for success
                  </h1>
        
                  {/* only show on ≤1000px, and keep its natural size */}
                  <img
                    src={aboutBg}
                    alt=""
                    className="block max-[1000px]:block min-[1001px]:hidden"
                  />
        
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam iste, soluta corrupti cupiditate iure explicabo doloremque dolorem vitae laborum? Sint quo id neque molestiae illo?
                  </p>
                  <button className='text-xs bg-black text-white px-5 text-center py-3 rounded-[8px] w-fit max-[1000px]:w-full cursor-pointer hover:text-black border-1 hover:border-black hover:bg-white'>Book a consultation</button>
                </div>
        
                {/* desktop‐only image in the right column */}
                <div className="min-[1001px]:block hidden order-1">
                  <img
                    src={aboutBg}
                    alt=""
                    className="w-[90%] h-auto"
                  />
                </div>
        
              </div>
    </div>


    <div className="impact md:mt-27 mt-10">
        <Title title={"Our Impact In Numbers"} text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam iste, soluta corrupti cupiditate iure explicabo doloremque"/>

        <div className="content w-full grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]">
            <div className='py-4 px-4 mt-8 md:mt-20 custom-border border-t-2 rounded-2xl'>
                <h3 className='text-3xl font-semibold'>8+</h3>
                <span className='font-semibold'>Years Of Experience</span>
            </div>

            <div className='py-4 px-4 mt-8 md:mt-20 custom-border border-t-2 rounded-2xl'>
                <h3 className='text-3xl font-semibold'>50+</h3>
                <span className='font-semibold'>Years Of Experience</span>
            </div>

            <div className='py-4 px-4 mt-8 md:mt-20 custom-border border-t-2 rounded-2xl'>
                <h3 className='text-3xl font-semibold'>100+</h3>
                <span className='font-semibold'>Years Of Experience</span>
            </div>

            <div className='py-4 px-4 mt-8 md:mt-20 custom-border border-t-2 rounded-2xl'>
                <h3 className='text-3xl font-semibold'>75+</h3>
                <span className='font-semibold'>Years Of Experience</span>
            </div>

            <div className='py-4 px-4 mt-8 md:mt-20 custom-border border-t-2 rounded-2xl max-[500px]:col-span-2 max-[500px]:mx-auto max-[500px]:'>
                <h3 className='text-3xl font-semibold'>90+</h3>
                <span className='font-semibold'>Years Of Experience</span>
            </div>

        </div>
    </div>

    <div className="journery mt-20 md:mt-27 ">
      <Title title={"Our Journey"} content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam iste, soluta corrupti cupiditate iure explicabo doloremque dolorem vitae laborum? Sint quo id neque molestiae"/>

      <div className="content flex flex-col mt-8 md:mt-20 md:gap-18 gap-8 relative">

        <div className="img-1 flex md:flex-row flex-col md:justify-start gap-4 w-full h-full">
          <h1 className='text-5xl font-semibold flex items-center gap-4 md:ml-0 ml-[4.2%]'>
            <img src={jStar} alt="" className='md:hidden'/>
            2018
            </h1>
          <img src={j1} alt="" className='md:w-[45%] md:h-[65%] w-full h-full'/>
        </div>

        <div className="img-1 flex md:flex-row flex-col md:justify-end gap-4 w-full h-full">
          <h1 className='text-5xl font-semibold flex items-center gap-4 md:ml-0 ml-[4.2%]'>
            <img src={jStar} alt="" className='md:hidden'/>
            2021
            </h1>
          <img src={j2} alt="" className='md:w-[45%] md:h-[65%] w-full h-full'/>
        </div>

        <div className="img-1 flex md:flex-row flex-col :justify-start gap-4 w-full h-full">
          <h1 className='text-5xl font-semibold flex items-center gap-4 md:ml-0 ml-[4.2%]'>
            <img src={jStar} alt="" className='md:hidden'/>
            2022
            </h1>
          <img src={j3} alt="" className='md:w-[45%] md:h-[65%] w-full h-full'/>
        </div>

        <div className="img-1 flex md:flex-row flex-col md:justify-end gap-4 w-full h-full">
          <h1 className='text-5xl font-semibold flex items-center gap-4 md:ml-0 ml-[4.2%]'>
            <img src={jStar} alt="" className='md:hidden'/>
            2024
            </h1>
          <img src={j4} alt="" className='md:w-[45%] md:h-[65%] w-full h-full'/>
        </div>

        <div className="side-1 absolute top-[-29%] right-0 rotate-[180deg] h-full w-full hidden md:block">
          <img src={journey} alt="" className='h-[15%] w-[25%]'/>
        </div>
        <div className="side-2 absolute left-0 top-[29%] h-full w-full hidden md:block">
          <img src={journey} alt="" className='h-[15%] w-[25%]'/>
        </div>

      </div>
    </div>


    <div className="core-values mt-20 md:mt-27">
      <div className="title">
        <Title title="Core Values" text="At the heart of everything we do our core values"/>
      </div>

      <div className="conent grid md:grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))] grid-cols-1 gap-5 md:mt-20 mt-8">
        <ValuesCard />
        <ValuesCard img={true}/>
        <ValuesCard img={true}/>
        <ValuesCard />
      </div>
    </div>

    <div className="founder mt-20 md:mt-27 bg-black1 rounded-3xl px-8 py-10">
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
            <div className="left order-2 md:order-1">
              <img src={founder} alt="" className=''/>
            </div>

            <div className="right flex flex-col gap-5 order-1 md:order-2">
              <h1 className='text-white text-3xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magnam repellat, commodi praesentium natus cupiditate nostrum alias, harum et nam, velit dolorum!</h1>
              <p className='text-grey hidden md:block'>-Abdul Moeez, Founder of Positivus</p>
            </div>
        </div>
    </div>

    <div className="awards">
      <div className="title mt-20 md:mt-27">
        <Title title={"Awards & Recognition"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magnam repellat, commodi praesentium natus cupiditate nostrum"}/>
      </div>

      <div className="content md:mt-20 mt-10 grid md:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6">
        <div className="1 bg-[#F3F3F3] rounded-2xl p-4 flex flex-col items-center gap-8">
            <img src={award1} alt="" />
            <h1 className='text-2xl font-semibold'>Best Small Buisness Digital Marketing Of The Year</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nulla porro fugit numquam, asperiores voluptatum, at blanditiis quidem aspernatur ipsam animi vero corrupti magni unde!</p>
        </div>

        <div className="2 bg-[#F3F3F3] rounded-2xl p-4 flex flex-col items-center gap-8">
            <img src={award2} alt="" />
            <h1 className='text-2xl font-semibold'>Best Small Buisness Digital Marketing Of The Year</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nulla porro fugit numquam, asperiores voluptatum, at blanditiis quidem aspernatur ipsam animi vero corrupti magni unde!</p>
        </div>

        <div className="3 bg-[#F3F3F3] rounded-2xl p-4 flex flex-col items-center gap-8">
            <img src={award3} alt="" />
            <h1 className='text-2xl font-semibold'>Best Small Buisness Digital Marketing Of The Year</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nulla porro fugit numquam, asperiores voluptatum, at blanditiis quidem aspernatur ipsam animi vero corrupti magni unde!</p>
        </div>

        <div className="4 bg-[#F3F3F3] rounded-2xl p-4 flex flex-col items-center gap-8">
            <img src={award4} alt="" />
            <h1 className='text-2xl font-semibold'>Best Small Buisness Digital Marketing Of The Year</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nulla porro fugit numquam, asperiores voluptatum, at blanditiis quidem aspernatur ipsam animi vero corrupti magni unde!</p>
        </div>


      </div>
    </div>

    <div className="teams mt-20 md:mt-27 md:px-12 px-10 md:py-18 py-12 bg-green border-1 border-b-4 border-black rounded-3xl flex justify-between flex-wrap md:flex-nowrap">
      <div className="left flex flex-col gap-8">
        <h1 className='text-3xl font-semibold'>Join Our Team</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus maiores architecto consequuntur, officiis dolore enim explicabo porro voluptatum nostrum magnam, quibusdam dolor.</p>
        <button className='bg-black1 text-white border-2 border-black1 hover:bg-white cursor-pointer px-6 py-3 hover:text-black1 rounded-xl md:w-fit'>Explore Carrers</button>
      </div>

      <div className="right">
        <img src={team} alt="" />
      </div>
    </div>
    </>
  )
}
