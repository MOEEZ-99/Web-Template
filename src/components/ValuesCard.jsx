import React from 'react'
import j1 from "../assets/j1.png"
import v1 from "../assets/v-card-1.png"

export const ValuesCard = ({img}) => {
  return (
    <div className='border-1 border-b-6 border-black rounded-3xl p-8 flex justify-between md:flex-nowrap flex-wrap w-full'>
        <div className="right flex flex-col gap-6">
            <h1 className='text-2xl font-semibold'>Client Side First</h1>
            <hr className='w-full h-1'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad laboriosam harum animi incidunt consectetur </p>
        </div>

       {img &&  <div className="img pl-10 md:w-full md:h-full md:py-0 py-8 flex items-center">
            <img src={v1} alt="" className='md:h-full md:w-[120%]'/>
        </div>}
    </div>
  )
}
