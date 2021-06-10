import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import { GoLocation } from "react-icons/go"
import { GiTie } from "react-icons/gi"
import React from "react"

const Sidebar = () => {
    return (
        <div>
            <img src="https://i.ibb.co/tcrCy4j/Shakib.jpg" alt="user Shakib" className="w-32 h-32 mx-auto rounded-full"/>
            <h3 className="my-4 text-3xl font-medium tracking-wider font-Kaushan">
                <span className="text-green">Sakhawat </span> Hossain
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer
            </p>
            <a  className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center" href='' download='name' >
                <GiTie className="w-6 h-6" /> Download Resume
            </a>
            {/* // social icon */}
            <div className="flex justify-around my-5 text-green md:w-full mx-auto">
                <a href="">
                    <AiFillYoutube className="w-6 h-6 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillGithub className="w-6 h-6 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillLinkedin className="w-6 h-6 cursor-pointer" />
                </a>
            </div>
            {/* // address */}
            <div className="py-4 my-5 bg-gray-200" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Dhaka Bangladesh</span>
                </div>
                <p className="my-2">sakhawathossain7969@gmail.com</p>
                <p className="my-2">01849687969/01811973362</p>
            </div>
            {/* Email Button */}
            <button className=" bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-3 text-white my-2 focus:outline-none" onClick={() => window.open('mailto:sakhawathossain7969@gmail.com')}>Email Me</button>
            <button className=" bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-3 text-white my-2">Toggle Theme</button>
        </div>
    )
}

export default Sidebar