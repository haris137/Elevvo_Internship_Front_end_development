import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

gsap.registerPlugin(useGSAP);

export default function Homepage(params) {
    
    useGSAP(()=>{        
        var tl = gsap.timeline()

        tl.from("#heroH",{
            scale: 0.8,
            opacity: 0,
            duration: 1,
            delay: 1.9,
        })
        tl.from("#heroP",{
            y: 20,
            opacity: 0,
            duration: .6,
            
        })
        tl.from("#heroBtn button",{
            y: 20,
            opacity: 0,
            duration: .5,
            
            stagger: 0.5,
        })
    }, [])
    
    return<>
        <Navbar />

        <div className="flex flex-col items-center justify-center space-y-5 h-screen w-screen px-3 overflow-hidden">
            <p id="heroH" className="text-6xl text-[#2D3748] font-bold">Organize Your Job Hunt. <br/> Land Your Dream Role.</p>

            <p id="heroP" className="text-2xl text-[#4A5568] pt-2">Track applications, ace interviews, and never miss a follow-up—all in one place</p>

            <div id="heroBtn" className="flex items-center justify-center space-x-6">
                <Link to={"/dashboard"}>
                <button className="bg-sky-600 text-white p-3 rounded-2xl text-xl cursor-pointer ">Get Started</button>
                </Link>
                <Link to={"/addjob"}>
                <button className="bg-sky-600 text-white p-3 rounded-2xl text-xl cursor-pointer">Add Job</button>
                </Link>
            </div>
        </div>

    </>
};
