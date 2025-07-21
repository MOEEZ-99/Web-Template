import React from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import facebook from "../assets/facebook-logo.png"
import link from "../assets/link-logo.png"
import twitter from "../assets/twitter-logo.png"

export const Footer = () => {
    const move = useNavigate()
  return (
    <footer className='bg-black1 rounded-t-4xl md:py-4 md:px-20 px-5 py-5 md:mt-27 md-10'>
        <div className='nav flex md:flex-row flex-col justify-between items-center'>

            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="list">
                <ul className='flex items-center gap-4 flex-col md:flex-row'>
                    <li className='underline text-grey cursor-pointer' onClick={()=>{move("/about")}}>About US</li>
                    <li className='underline text-grey cursor-pointer' onClick={()=>{move("/services")}}>Services</li>
                    <li className='underline text-grey cursor-pointer' onClick={()=>{move("/use-cases")}}>Use Cases</li>
                    <li className='underline text-grey cursor-pointer' onClick={()=>{move("/pricing")}}>Pricing</li>
                    <li className='underline text-grey cursor-pointer' onClick={()=>{move("/blog")}}>Blogs</li>
                </ul>
            </div>

            <div className="logos md:flex gap-4 hidden">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={link} alt="" />
            </div>
        </div>


        <div className="contact py-5 md:py-6 flex md:justify-between gap-6 md:gap-0 w-full flex-wrap">

            <div className="left flex flex-col gap-4 md:mt-0 mt-5">
                <h1 className='bg-green text-2xl w-fit'>Contact Us</h1>
                <span className='text-grey'>Email: abc123@example.com</span>
                <span className='text-grey'>Phone: 111-222-333</span>
                <span className='text-grey'>Address: Developers Enclave House no. 90 Street 65 City Abc Earth</span>
            </div>


            <div className="right bg-[#292A32] md:px-9 md:py-10 px-4 py-3">
                <div className='flex gap-5 items-center flex-wrap'>
                    <input type="text" placeholder='Email' className='text-grey border-2 border-grey bg-black1 px-8 py-3 rounded-xl w-full md:w-auto'/>
                    <button className='px-14 py-3 rounded-xl text-center cursor-pointer border-2 border-green bg-green hover:bg-white hover:border-white text-black1 max-[760px]:w-full'>Subscribe to news</button>
                </div>
            </div>

            <div className="logos-again gap-4 md:hidden flex justify-center w-full">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={link} alt="" />
            </div>

        </div>
    </footer>
  )
}
