import React from 'react'
import things from "../assets/thingsImg.png"
import curvedArrow from "../assets/curvedArrow.png"
import { Accordion } from './Accordion'
import team1 from "../assets/team-1.png"
import team2 from "../assets/team-2.png"
import team3 from "../assets/team-3.png"
import team4 from "../assets/team-4.png"
import team5 from "../assets/team-5.png"
import team6 from "../assets/team-6.png"
import cImg from "../assets/c-img.png"
import { accordionData } from "../data/accordionData.js"


export const Things = () => {
    return (
        <>
            <div className='things-main mt-10 bg-white rounded-xl flex justify-between px-8'>
                <div className='flex flex-col md:gap-6 gap-3 md:w-[60%] mt-12'>
                    <h2 className='font-semibold text-3xl'>Lets make things happen</h2>
                    <p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem illum cum iusto voluptates laborum. Nam repellat explicabo optio possimus deserunt sint sunt.</p>
                    <button className='bg-black1 text-grey rounded-xl px-5 py-2 text-center cursor-pointer border-black1 border-2 hover:border-black1 hover:bg-white hover:text-black w-fit'>Get your free proposal</button>
                </div>

                <div className='md:block hidden'>
                    <img src={things} alt="" />
                </div>
            </div>


            {/* caseStudeis---------------------------------------------- */}

            <div className='md:mt-27 mt-10'>
                <div className="title flex md:gap-6 gap-3 flex-wrap justify-center md:justify-start">
                    <h1 className='bg-green text-3xl font-semibold p-1 rounded h-fit'>Case Studies</h1>
                    <p className='font-semibold block md:w-[60%] md:mt-[-5px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ea eaque quam, alias sed rerum praesentium ipsam id aliquid itaque?</p>
                </div>

                <div className="content md:flex bg-black1 rounded-3xl md:mt-20 mt-8 py-10 hidden">

                    <div className='1 flex flex-col gap-8 px-8'>
                        <p className='text-grey block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus atque, nemo aliquid velit quas similique voluptate commodi sunt excepturi doloribus esse, dolorem, itaque at earum ?</p>
                        <div className='cursor-pointer flex items-center gap-5 text-green'>
                            Learn more
                            <img src={curvedArrow} alt="" className='hover:rotate-[30deg] transition duration-200' />
                        </div>
                    </div>
                    <div className='h-[auto] w-1 bg-white'></div>


                    <div className='2 flex flex-col gap-8 px-8'>
                        <p className='text-grey block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus atque, nemo aliquid velit quas similique voluptate commodi sunt excepturi doloribus esse, dolorem, itaque at earum ?</p>
                        <div className='cursor-pointer flex items-center gap-5 text-green'>
                            Learn more
                            <img src={curvedArrow} alt="" className='hover:rotate-[30deg] transition duration-200' />
                        </div>
                    </div>
                    <div className='h-auto w-1 bg-white'></div>

                    <div className='3 flex flex-col gap-8 px-8'>
                        <p className='text-grey block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus atque, nemo aliquid velit quas similique voluptate commodi sunt excepturi doloribus esse, dolorem, itaque at earum ?</p>
                        <div className='cursor-pointer flex items-center gap-5 text-green'>
                            Learn more
                            <img src={curvedArrow} alt="" className='hover:rotate-[30deg] transition duration-200' />
                        </div>
                    </div>
                </div>


                <div className='scrool-content flex gap-5 mt-10 overflow-auto min-[760px]:hidden'>
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

            </div>


            <div className="accrodion">
                <div className="title flex items-center flex-wrap gap-6 md:mt-27 mt-10 md:justify-start justify-center">
                    <h1 className='bg-green text-3xl font-semibold'>Our Working Process</h1>
                    <p className='block mt-1 font-semibold md:w-[20%]'>Step by Step Guide to Achieving Your Buisness Goals </p>
                </div>

                <div className='md:mt-20 mt-8'>
                    <Accordion Data={accordionData}/>
                </div>
            </div>

            <div className="teams md:mt-27 mt-10 flex flex-col md:gap-6 gap-1">
                <div className="title flex items-center flex-wrap gap-6 md:justify-start justify-center">
                    <h1 className='bg-green text-3xl font-semibold'>Teams</h1>
                    <p className='block mt-1 font-semibold md:w-[55%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore quia rem harum, quaerat vel laborum, dignissimos quo perferendis, itaque eos corporis!</p>
                </div>

                <div className="content grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-3 mt-10">
                    <img src={team1} alt="" className='w-full' />
                    <img src={team2} alt="" className='w-full' />
                    <img src={team3} alt="" className='w-full' />
                    <img src={team4} alt="" className='w-full' />
                    <img src={team5} alt="" className='w-full' />
                    <img src={team6} alt="" className='w-full' />
                </div>

                <div className="button flex md:justify-end md:mt-0 mt-4">
                    <button className='bg-black1 text-grey rounded-xl px-5 py-2 text-center cursor-pointer border-black1 border-2 hover:border-black1 hover:bg-white hover:text-black w-full md:w-fit'>See all Teams</button>
                </div>
            </div>

            <div className="contact md:mt-27 mt-10 flex flex-col md:gap-6 gap-1">
                <div className="title flex items-center flex-wrap gap-6 md:justify-start justify-center">
                    <h1 className='bg-green text-3xl font-semibold'>Contact us</h1>
                    <p className='block mt-1 font-semibold md:w-[55%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore quia rem harum, quaerat vel laborum, dignissimos quo perferendis, itaque eos corporis!</p>
                </div>

                <div className="content bg-[#F3F3F3] rounded-2xl py-10 md:px-14 px-5 relative w-full">
                    <form action="" className='flex flex-col gap-10'>
                        <div className="radio flex gap-5 justify-center md:justify-start md:items-center">
                            <div className='flex gap-2'>
                                <input type="radio" name="i1" id="i1" />
                                <label htmlFor="i1">Say Hi</label>
                            </div>

                            <div className='flex gap-2'>
                                <input type="radio" name="i1" id="i2" />
                                <label htmlFor="i2">Get a Quote</label>
                            </div>
                        </div>

                        <div className="inputs flex flex-col gap-5">
                            <div className="name flex flex-col gap-3">
                                <label htmlFor="">Name</label>
                                <input type="text" className='md:w-[45%] outline-0 px-4 py-2 rounded-xl border-2 border-black text-[#909090]' placeholder='Name'/>
                            </div>

                            <div className="email flex flex-col gap-3">
                                <label htmlFor="">Email</label>
                                <input type="text" className='md:w-[45%] outline-0 px-4 py-2 rounded-xl border-2 border-black text-[#909090]' placeholder='Email'/>
                            </div>

                            <div className="message flex flex-col gap-3">
                                <label htmlFor="">Message</label>
                                <textarea name="" id="" className='md:w-[45%] h-[200px] outline-0 px-4 py-2 rounded-xl border-2 border-black text-[#909090]' placeholder='Message'></textarea>
                            </div>
                        </div>

                        <div className="button">
                            <button className='bg-black1 text-grey rounded-xl px-5 py-2 text-center cursor-pointer border-black1 border-2 hover:border-black1 hover:bg-white hover:text-black w-full md:w-[45%]'>Send Message</button>
                        </div>
                    </form>

                    <div className="img absolute right-[0] top-0 hidden md:block">
                        <img src={cImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
