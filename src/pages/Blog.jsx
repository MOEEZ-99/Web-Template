import React from 'react'
import bgImg from "../assets/bg-image.png"
import blog from "../assets/blog-img.png"
import aImg from "../assets/a.png"

export const Blog = () => {
  return (
    <>
         <div className='bg-[#F3F3F3] rounded-3xl'>
                 <div className="grid grid-cols-2 gap-4 max-[1000px]:grid-cols-1 p-8">
                
                        {/* text + (mobile) image */}
                        <div className="flex flex-col gap-4 order-2">

                            <div className="new bg-[#E8E8E8] text-[#7B7B7B] py-1 px-2 rounded-xl w-fit">
                                Marketing Strategies
                            </div>
                          <h1 className="font-semibold md:text-5xl text-4xl">
                            PPC vs. Organic Marketing: Which One Is Right For Your Buisness?
                          </h1>
                
                          {/* only show on ≤1000px, and keep its natural size */}
                          <img
                            src={bgImg}
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
                            src={bgImg}
                            alt=""
                            className="w-[90%] h-auto"
                          />
                        </div>
                
                      </div>
            </div>


            <div className="blog-content flex flex-col gap-12 mt-20 md:mt-27">
                <div className="title flex justify-between w-full items-center">
                    <div>
                    <img src={blog} alt="" />
                    </div>

                    <div>
                    <img src={aImg} alt="" />
                    </div>
                </div>

                <hr className='w-full'/>

                <div className="main-content md:px-30 flex flex-col gap-12">
                    <div className="content">
                        <h1 className="font-semibold text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur cum dolor ratione doloribus, eligendi beatae eos! Inventore explicabo soluta ab dolorum. Non recusandae tenetur saepe unde sint voluptate enim accusamus ut officia vitae, ea id ipsam temporibus voluptatem hic doloremque placeat iusto expedita repellendus rem voluptatibus. Voluptas laudantium incidunt, velit exercitationem debitis veniam itaque beatae dolorum, reprehenderit provident neque explicabo qui blanditiis! Similique reiciendis incidunt possimus dolor consequatur vel voluptatum qui harum quos, ab doloribus deleniti nemo, a quaerat laudantium quibusdam, assumenda dolorum adipisci ducimus aperiam eum mollitia quam! Adipisci quisquam nulla quam quidem natus iure, perspiciatis amet esse deserunt.</h1>
                    </div>

                    <div className="content flex flex-col gap-4">
                        <h1 className='text-4xl font-semibold]'>The Challenge Of Standing Out Alone</h1>
                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste provident autem veniam earum obcaecati quia magni assumenda, saepe inventore officia ut possimus dolorum excepturi vero. Tempora minima voluptate quod tenetur alias iure velit, ad voluptatum consequatur tempore possimus debitis a minus eaque autem consectetur perferendis. Esse quam nam eius voluptatibus sunt enim impedit magni atque quos odio odit, quisquam ipsa laborum cupiditate dolores est temporibus?</p>
                    </div>

                      <div className="content flex flex-col gap-4">
                        <h1 className='text-4xl font-semibold'>Comparing PPC and Organic Marketing</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in voluptatem, tenetur, reiciendis fuga nostrum deserunt sint perspiciatis amet delectus repellendus veniam eligendi excepturi ipsam labore quas quod, hic consectetur. Earum nemo provident aperiam error a, dolores aut pariatur enim quod expedita ad deserunt ipsum impedit fugit delectus blanditiis quas quae libero ratione quo quidem reiciendis? Consequuntur eius provident dolor quibusdam dolore, ab aspernatur odit quae voluptates, dolorem, tempora autem nihil corrupti voluptas maxime minus natus? In, dolor sed? Impedit unde provident eius ipsum. Totam amet maiores non adipisci? Cumque suscipit fugiat dolor, deleniti molestias, ipsa, qui nobis ducimus corrupti cupiditate dolores recusandae amet perspiciatis! Ipsum aliquam officiis possimus consectetur vel quis ab voluptate, nisi corporis deserunt, sapiente, necessitatibus exercitationem?</p>
                    </div>

                    <div className="content flex flex-col gap-4">
                        <h1 className='text-4xl font-semibold'>Striking The Right Balance</h1>
                        <p className='block text-justify md:pl-10 border-l-2 border-green text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus aut, amet cupiditate ea repudiandae repellendus ipsa dolorum optio nulla, voluptates aliquid adipisci iusto, incidunt laboriosam consectetur debitis magnam! Adipisci.</p>
                    </div>
                </div>
            </div>

            <div className="facts">
                <div className="title text-4xl font-semibold mt-20 md:mt-27">
                    By The Numbers: Facts About PPC And Organic Marketing
                </div>

                <div className="grid md:grid-cols-5 mt-8 md:mt-10 gap-5 md:grid-rows-2 grid-cols-1">
                    <div className="1 flex flex-col gap-3 p-6 md:col-span-2 border-1 border-b-4 border-black rounded-2xl">
                        <p>Buisness earn an average of</p>
                        <h3 className='font-semibold text-2xl'>$2 for every $1 spent</h3>
                        <p>on PPC advertising</p>
                    </div>

                    <div className="2 flex flex-col gap-3 p-6 md:col-span-3 bg-green rounded-2xl">
                        <h3 className='font-semibold text-2xl'>41% of clicks</h3>
                        <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptates aliquam vero obcaecati enim dolor doloremque reprehenderit autem iusto pariatur.</p>
                    </div>

                    <div className="3 md:col-span-3 flex flex-col gap-3 p-6 bg-[#f3F3f3] rounded-2xl">
                        <div className='flex items-center gap-4 flex-wrap'>
                            <span className='font-semibold text-black1'>Current Marketing Costs</span>
                            <span className='text-2xl font-semibold'>62% less paid than ads</span>
                        </div>
                        <div className='flex items-center gap-4 flex-wrap'>
                            <span className='font-semibold text-black1'>but generates</span>
                            <span className='text-2xl font-semibold'>3X as many leads</span>
                        </div>
                    </div>

                    <div className="4 flex flex-col gap-3 bg-black1 rounded-2xl p-6 md:col-span-2">
                        <div className='text-grey font-semibold '>Organic search drives</div>
                        <div><span className='text-green font-semibold text-2xl'>53%</span> of all website traffic</div>
                        <div className='text-grey font-semibold' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div>
    </>
  )
}
