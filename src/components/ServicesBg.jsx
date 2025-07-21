import React from 'react'
import servicesBg from "../assets/services-bg.png"
import star from "../assets/seo-star.png"
import { Title } from './Title'
import one from "../assets/01.png"
import two from "../assets/02.png"
import three from "../assets/03.png"
import four from "../assets/04.png"
import five from "../assets/05.png"
import six from "../assets/06.png"
import s1 from "../assets/service-1.png"
import s2 from "../assets/service-2.png"
import s3 from "../assets/service-3.png"
import s4 from "../assets/service-4.png"
import s5 from "../assets/service-5.png"
import s6 from "../assets/service-6.png"

export const ServicesBg = () => {
  return (
    <>
          <div className='bg-[#F3F3F3] rounded-3xl'>
                 <div className="grid grid-cols-2 gap-4 max-[1000px]:grid-cols-1 p-8">
                
                        {/* text + (mobile) image */}
                        <div className="flex flex-col gap-4 order-2">
                          <h1 className="font-semibold md:text-7xl text-4xl">
                            Expert Digtital Marketing Services
                          </h1>
                
                          {/* only show on ≤1000px, and keep its natural size */}
                          <img
                            src={servicesBg}
                            alt=""
                            className="block max-[1000px]:block min-[1001px]:hidden"
                          />
                
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam iste, soluta corrupti cupiditate iure explicabo doloremque dolorem vitae laborum? Sint quo id neque molestiae illo?
                          </p>
                          {/* <button className='text-xs bg-black text-white px-5 text-center py-3 rounded-[8px] w-fit max-[1000px]:w-full cursor-pointer hover:text-black border-1 hover:border-black hover:bg-white'>Book a consultation</button> */}
                        </div>
                
                        {/* desktop‐only image in the right column */}
                        <div className="min-[1001px]:block hidden order-1">
                          <img
                            src={servicesBg}
                            alt=""
                            className="w-[90%] h-auto"
                          />
                        </div>
                
                      </div>
            </div>

            <div className="seo grid md:grid-cols-6 grid-cols-1 bg-black1 mt-20 md:mt-27 py-15 px-10 gap-6">
                <div className="left flex md:gap-8 gap-4 col-span-2">
                    <img src={star} alt="" className='w-fit h-fit hidden md:block'/>
                    <h1 className='text-3xl font-semibold flex flex-col gap-1'>
                        <span className='text-grey md:text-black md:bg-green block rounded p-1'>Search Engine</span>
                        <span className='text-grey md:text-black md:bg-green block rounded p-1 w-[90%]'>optimization</span>
                        </h1>
                </div>
                <div className="rigth flex flex-col gap-6 col-span-4">
                    <p className='text-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat facere aliquam laborum odio illum sunt labore molestiae sit minima iure molestias a! Suscipit accusamus magnam natus commodi fugiat dolorum.</p>
                    <button className='md:w-fit bg-white border-2 border-white px-8 py-4 text-center cursor-pointer hover:bg-black1 hover:text-white text-black rounded-3xl'>Book My Rankings</button>
                </div>
            </div>

            <div className="howrork">
                <div className="title mt-20 md:mt-27">
                    <Title title="How We Work: SEO Process" text={">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat facere aliquam laborum odio illum sunt"}/>
                </div>

                <div className="conent md:mt-10 mt-8 flex flex-col gap-6">
                    <div className="one bg-[#F3F3F3] rounded-3xl md:p-10 p-5 flex gap-8 h-full">
                        <div className='mt-[12%] md:mt-0 h-full'>
                        <img src={one} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 py-8'>
                        <h1 className='text-3xl font-semibold text-black1'>Webiste Analysis</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima corrupti doloremque laborum fugit dolores rerum, at illum natus ipsa.</p>
                    </div>
                    </div>

                     <div className="two bg-[#F3F3F3] rounded-3xl md:p-10 p-5 flex gap-8 h-full">
                        <div className='mt-[12%] md:mt-0 h-full'>
                        <img src={two} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 py-8'>
                        <h1 className='text-3xl font-semibold text-black1'>Keyword Research Strategy</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima corrupti doloremque laborum fugit dolores rerum, at illum natus ipsa.</p>
                    </div>
                    </div>

                     <div className="three bg-[#F3F3F3] rounded-3xl md:p-10 p-5 flex gap-8 h-full-8">
                        <div className='mt-[12%] md:mt-0 h-full'>
                        <img src={three} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 py-8'>
                        <h1 className='text-3xl font-semibold text-black1'>On Page Optimization</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima corrupti doloremque laborum fugit dolores rerum, at illum natus ipsa.</p>
                    </div>
                    </div>

                     <div className="four bg-[#F3F3F3] rounded-3xl md:p-10 p-5 flex gap-8 h-full">
                        <div className='mt-[12%] md:mt-0 h-full'>
                        <img src={four} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 py-8'>
                        <h1 className='text-3xl font-semibold text-black1'>Content Creation</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima corrupti doloremque laborum fugit dolores rerum, at illum natus ipsa.</p>
                    </div>
                    </div>

                     <div className="five bg-[#F3F3F3] rounded-3xl md:p-10 p-5 flex gap-8 h-full">
                        <div className='mt-[12%] md:mt-0 h-full'>
                        <img src={five} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 py-8'>
                        <h1 className='text-3xl font-semibold text-black1'>Link Building</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima corrupti doloremque laborum fugit dolores rerum, at illum natus ipsa.</p>
                    </div>
                    </div>

                     <div className="six bg-[#F3F3F3] rounded-3xl md:p-10 p-5 flex gap-8 h-full">
                        <div className='mt-[12%] md:mt-0 h-full'>
                        <img src={six} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 py-8'>
                        <h1 className='text-3xl font-semibold text-black1'>Monitoring & Reporting</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima corrupti doloremque laborum fugit dolores rerum, at illum natus ipsa.</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="services">
                <div className="title mt-20 md:mt-27">
                    <Title title="Our Other Services" text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima corrupti doloremque laborum fugit dolores rerum, at illum natus ipsa"}/>
                </div>

                <div className="content md:mt-10 mt-8 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-2">
                    <img src={s1} alt="" className='hover:scale-[1.1] transition-all duration-300 cursor-pointer'/>
                    <img src={s2} alt="" className='hover:scale-[1.1] transition-all duration-300 cursor-pointer'/>
                    <img src={s3} alt="" className='hover:scale-[1.1] transition-all duration-300 cursor-pointer'/>
                    <img src={s4} alt="" className='hover:scale-[1.1] transition-all duration-300 cursor-pointer'/>
                    <img src={s5} alt="" className='hover:scale-[1.1] transition-all duration-300 cursor-pointer'/>
                    <img src={s6} alt="" className='hover:scale-[1.1] transition-all duration-300 cursor-pointer'/>
                </div>
            </div>

            <div className="last mt-20 md:mt-27 p-12 border-1 border-b-4 rounded-3xl border-black">
                <div className="left flex flex-col gap-6">
                    <h1 className='text-2xl font-semibold'>Ready to Elevate Your Search Rankings?</h1>
                    <hr className='w-full'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda error eum delectus in id aliquid, sapiente laudantium aspernatur cumque sint aperiam tempora ut enim vero consequatur, ab porro repellat? Sapiente.</p>
                    <h4 className='font-semibold'>Lets Work Together To Grow Your Online Presence</h4>
                    <button className='bg-green cursor-pointer rounded-xl px-12 py-2 md:w-fit w-full hover:bg-white border-2 border-green hover:border-green hover:text-black'>Start My SEO Journey</button>
                </div>

                <div className="rigth"></div>
            </div>
    </>
  )
}
