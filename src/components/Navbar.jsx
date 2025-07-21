import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [opneMenu, setopneMenu] = useState(false)
    const showMenu = () => { 
        setopneMenu(!opneMenu)
        console.log(opneMenu)
     }
    return (
        <nav className={`flex max-[1000px]:flex-col justify-between min-[1000px]:items-center py-4 min-[1000px]:py-11 overflow-hidden  transition-all duration-300 ease-in-out ${opneMenu? "max-h-[400px]" : "max-h-[60px]"}`}>

            <div className="logo">
                <img src={logo} alt="" />
            </div>


            <div className='flex min-[1000px]:items-center min-[1000px]:justify-between'>
                <ul className='flex gap-4 items-center max-[1000px]:block max-[1000px]:mt-5 min-[1000px]:gap-2'>
                    <li className={` max-[1000px]:mt-4 max-[1000px]:inline-block max-[1000px]:w-[160%] px-2 cursor-pointer text-[#404040] font-semibold ${location.pathname === "/" ? "bg-green" : "bg-white"}`} onClick={() => { navigate("/")
                        setopneMenu(false)
                     }}>Home</li>
                    <li className={` max-[1000px]:mt-4 max-[1000px]:inline-block max-[1000px]:w-[160%] px-2 cursor-pointer text-[#404040] font-semibold ${location.pathname === "/about" ? "bg-green" : "bg-white"}`} onClick={() => { navigate("/about")
                        setopneMenu(false)
                     }}>About Us</li>
                    <li className={` max-[1000px]:mt-4 max-[1000px]:inline-block max-[1000px]:w-[160%] px-2 cursor-pointer text-[#404040] font-semibold ${location.pathname === "/services" ? "bg-green" : "bg-white"}`} onClick={() => { navigate("/services")
                        setopneMenu(false)
                     }}>Services</li>
                    <li className={` max-[1000px]:mt-4 max-[1000px]:inline-block max-[1000px]:w-[160%] px-2 cursor-pointer text-[#404040] font-semibold ${location.pathname === "/use-cases" ? "bg-green" : "bg-white"}`} onClick={() => { navigate("/use-cases")
                        setopneMenu(false)
                     }}>Use cases</li>
                    <li className={` max-[1000px]:mt-4 max-[1000px]:inline-block max-[1000px]:w-[160%] px-2 cursor-pointer text-[#404040] font-semibold ${location.pathname === "/pricing" ? "bg-green" : "bg-white"}`} onClick={() => { navigate("/pricing")
                        setopneMenu(false)
                     }}>Pricing</li>
                    <li className={` max-[1000px]:mt-4 max-[1000px]:inline-block max-[1000px]:w-[160%] px-2 cursor-pointer text-[#404040] font-semibold ${location.pathname === "/blog" ? "bg-green" : "bg-white"}`} onClick={() => { navigate("/blog")
                        setopneMenu(false)
                     }}>Blog</li>
                    <button className='border-1 border-grey hover:bg-black hover:text-white cursor-pointer rounded-xl p-3 text-center font-semibold'>Request a quote</button>
                </ul>
                    <div className='block min-[1000px]:hidden px-2 absolute top-8 right-3' onClick={showMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#808080" viewBox="0 0 24 24">
                            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                        </svg>

                    </div>
            </div>


        </nav>
    )
}
