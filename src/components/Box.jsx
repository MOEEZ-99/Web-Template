import React from 'react'
import arrow from "../assets/green-arrow.png"
import curvedArrow from "../assets/curvedArrow.png"

export const Box = ({title="E-Commerce Fashion Brand"}) => {
  return (
    <>
    <div className='main md:grid grid-cols-3 grid-rows-2 py-10 border-1 border-b-4 border-black1 rounded-2xl w-full hidden'>
        <div className="1 px-10 border-b-2 border-r-2 border-grey flex flex-col gap-8 pb-10">
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit placeat pariatur vel animi perspiciatis necessitatibus numquam quasi, laudantium iusto qui?</p>
            <div className='flex items-center gap-4 group'><img src={arrow} className='group-hover:rotate-[29deg] cursor-pointer transition-all duration-200' alt="" /><h4 className='font-semibold hover:underline cursor-pointer'>Read More</h4></div>
        </div>

        <div className="2 px-10 border-b-2 border-r-2 border-grey flex flex-col gap-8 pb-10">
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit placeat pariatur vel animi perspiciatis necessitatibus numquam quasi, laudantium iusto qui?</p>
            <div className='flex items-center gap-4 group'><img src={arrow} className='group-hover:rotate-[29deg] cursor-pointer transition-all duration-200' alt="" /><h4 className='font-semibold hover:underline cursor-pointer'>Read More</h4></div>    
        </div>

        <div className="3 px-10 border-b-2 border-grey flex flex-col gap-8 pb-10">
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit placeat pariatur vel animi perspiciatis necessitatibus numquam quasi, laudantium iusto qui?</p>
            <div className='flex items-center gap-4 group'><img src={arrow} className='group-hover:rotate-[29deg] cursor-pointer transition-all duration-200' alt="" /><h4 className='font-semibold hover:underline cursor-pointer'>Read More</h4></div>
        </div>

        <div className="4 px-10 border-r-2 border-grey flex flex-col gap-8 py-10">
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit placeat pariatur vel animi perspiciatis necessitatibus numquam quasi, laudantium iusto qui?</p>
            <div className='flex items-center gap-4 group'><img src={arrow} className='group-hover:rotate-[29deg] cursor-pointer transition-all duration-200' alt="" /><h4 className='font-semibold hover:underline cursor-pointer'>Read More</h4></div>
        </div>

        <div className="5 px-10 border-r-2 border-grey flex flex-col gap-8 py-10">
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit placeat pariatur vel animi perspiciatis necessitatibus numquam quasi, laudantium iusto qui?</p>
            <div className='flex items-center gap-4 group'><img src={arrow} className='group-hover:rotate-[29deg] cursor-pointer transition-all duration-200' alt="" /><h4 className='font-semibold hover:underline cursor-pointer'>Read More</h4></div>
        </div>

        <div className="6 px-10 border-grey flex flex-col gap-8 py-10 ">
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit placeat pariatur vel animi perspiciatis necessitatibus numquam quasi, laudantium iusto qui?</p>
            <div className='flex items-center gap-4 group'><img src={arrow} className='group-hover:rotate-[29deg] cursor-pointer transition-all duration-200' alt="" /><h4 className='font-semibold hover:underline cursor-pointer'>Read More</h4></div>
        </div>
    </div>

    {/* For Smaller Screens */}
      <div className='main scrool-content flex gap-5 mt-10 overflow-auto min-[760px]:hidden'>
                         <div className="flex flex-col bg-black1 px-8 py-10 rounded-3xl gap-6 min-w-[80vw] max-h-[35%]">
                             <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorum adipisci, quod neque suscipit officiis harum eligendi modi ullam et voluptas possimus.</p>
                             <div className='flex items-center gap-3 text-green'>
                                 Learn More
                                 <img src={curvedArrow} alt="" className='hover:rotate-[30deg]' />
                             </div>
                         </div>
     
                         <div className="flex flex-col bg-black1 px-8 py-10 rounded-3xl gap-6 min-w-[85vw] max-h-[35%]">
                             <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorum adipisci, quod neque suscipit officiis harum eligendi modi ullam et voluptas possimus.</p>
                             <div className='flex items-center gap-3 text-green'>
                                 Learn More
                                 <img src={curvedArrow} alt="" className='hover:rotate-[30deg]' />
                             </div>
                         </div>
     
                         <div className="flex flex-col bg-black1 px-8 py-10 rounded-3xl gap-6  min-w-[85vw] max-h-[35%]">
                             <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorum adipisci, quod neque suscipit officiis harum eligendi modi ullam et voluptas possimus.</p>
                             <div className='flex items-center gap-3 text-green'>
                                 Learn More
                                 <img src={curvedArrow} alt="" className='hover:rotate-[30deg]' />
                             </div>
                         </div>
                     </div>
     
    </>
  )
}
