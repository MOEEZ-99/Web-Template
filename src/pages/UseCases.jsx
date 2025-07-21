import React from 'react'
import useImg from "../assets/use-bg.png"
import arrow from "../assets/e-arrow.png"
import { Title } from '../components/Title'
import { Box } from '../components/Box'

export const UseCases = () => {
    return (
        <>
            <div className='bg-[#F3F3F3] rounded-3xl'>
                <div className="grid grid-cols-2 gap-4 max-[1000px]:grid-cols-1 p-8">

                    {/* text + (mobile) image */}
                    <div className="flex flex-col gap-4 order-2">
                        <h1 className="font-semibold md:text-7xl text-4xl">
                            Proven Success Stories
                        </h1>

                        {/* only show on ≤1000px, and keep its natural size */}
                        <img
                            src={useImg}
                            alt=""
                            className="block max-[1000px]:block min-[1001px]:hidden"
                        />

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum inventore quis quidem, voluptas corrupti nulla dicta, architecto eos odio nam minima aut odit tenetur quisquam amet ex, repellat nisi cupiditate fuga similique ipsa cumque id a velit. Aliquam sapiente impedit ipsam officia libero quam ex!
                        </p>
                        {/* <button className='text-xs bg-black text-white px-5 text-center py-3 rounded-[8px] w-fit max-[1000px]:w-full cursor-pointer hover:text-black border-1 hover:border-black hover:bg-white'>Book a consultation</button> */}
                    </div>

                    {/* desktop‐only image in the right column */}
                    <div className="min-[1001px]:block hidden order-1">
                        <img
                            src={useImg}
                            alt=""
                            className="w-[90%] h-auto"
                        />
                    </div>

                </div>
            </div>

            <div className="featured-success mt-20 md:mt-27 bg-black1 p-12 grid md:grid-cols-2 grid-cols-1 rounded-3xl">
                <div className="left flex flex-col gap-8">
                    <h1 className='bg-green p-1 font-semibold text-4xl rounded md:w-[55%] w-full'>Featured Success Story</h1>
                    <h3 className='text-white text-2xl md:w-[50%] w-full'>Scaling Success For A Loading E-Commerce Brand</h3>
                    <p className='text-grey md:w-[50%] w-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores maiores consequatur sequi omnis amet quo molestias non aliquam debitis nobis?</p>
                    <div className='flex items-center gap-4 cursor-pointer'>
                        <img src={arrow} alt="" />
                        <h5 className='text-green'>Read</h5>
                    </div>
                </div>

                <div className="right grid md:grid-cols-2 grid-cols-1 gap-3 md:mt-0 mt-8">
                    <div className='1 p-8 flex flex-col items-center rounded-2xl bg-white'>
                        <h1 className='text-4xl font-semibold'>200%</h1>
                        <p className='font-semibold'>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className='2 p-8 flex flex-col items-center rounded-2xl bg-white'>
                        <h1 className='text-4xl font-semibold'>200%</h1>
                        <p className='font-semibold'>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className='3 p-8 flex flex-col items-center  rounded-2xl bg-white'>
                        <h1 className='text-4xl font-semibold'>200%</h1>
                        <p className='font-semibold'>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className='4 p-8 flex flex-col items-center rounded-2xl bg-white'>
                        <h1 className='text-4xl font-semibold'>200%</h1>
                        <p className='font-semibold'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>

            <div className="stories">
                <div className="title mt-20 md:mt-27">
                    <Title title={"All Success Stories"} text={"Lorem ipsum dolor sit amet"}/>
                </div>

                <div className="content md:mt-20 mt-8">
                    <Box />
                </div>
            </div>
        </>
    )
}
