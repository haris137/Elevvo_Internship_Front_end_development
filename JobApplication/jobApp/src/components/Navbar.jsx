import { NavLink, Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Navbar(params) {

    useGSAP(() => {
      var tl = gsap.timeline();

      tl.from("#navbar", {
        y: -20,
        duration: 0.5,
        delay: 0.2,
        opacity: 0,
      });
      tl.from("#mainH", {
        y: -20,
        duration: 0.5,
        delay: 0.1,
        opacity: 0,
      });
      tl.from("#nav-links", {
        y: -20,
        duration: 0.5,
        delay: 0.1,
        opacity: 0,
        stagger: 0.3,
      });

    }, []);

  return (
    <>
      <nav
        id="navbar"
        className="bg-sky-500 p-[.8rem] md:p-[1rem] flex justify-between items-center"
      >
        <Link to={"/"}>
          <p
            id="mainH"
            className="text-2xl md:text-3xl font-bold font-sans text-white cursor-pointer"
          >
            Job Tracker
          </p>
        </Link>

        <div className="flex space-x-5 md:space-x-10 justify-between items-center text-white p-1 md:p-3">
          <Link to={"/dashboard"}>
            <p
              id="nav-links"
              className="font-semibold text-[4vmin] md:text-xl cursor-pointer p-2 rounded-xl hover:bg-white hover:text-black transition-colors duration-600"
            >
              Dashboard
            </p>
          </Link>

          <Link to={"/addjob"}>
            <p
              id="nav-links"
              className="font-semibold text-[4vmin] md:text-xl cursor-pointer p-2 rounded-xl hover:bg-white hover:text-black transition-colors duration-600"
            >
              Add Job
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
}
