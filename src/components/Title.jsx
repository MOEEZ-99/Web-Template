import React from 'react'

export const Title = ({title,text}) => {
    return (
        <div className="title flex md:gap-6 gap-3 flex-wrap justify-center md:justify-start">
            <h1 className='bg-green text-3xl font-semibold p-1 rounded h-fit'>{title}</h1>
            <p className='font-semibold block md:w-[60%] md:mt-[-5px]'>{text}</p>
        </div>
    )
}
