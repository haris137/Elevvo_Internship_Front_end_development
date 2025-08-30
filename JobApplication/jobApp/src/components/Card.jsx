import { jobContext } from "../script/context.jsx";
import { useContext } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Card(params) {
  const { showJob } = useContext(jobContext);
  const jobs = showJob();

  useGSAP(() =>{
      var tl = gsap.timeline();

      tl.from("#card", {
        y:50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.3,
      })
  })

  return (
    <>
      <div className="flex items-center justify-center p-5">
        <h1 className="text-4xl text-[#2D3748] font-bold">Jobs Available</h1>
      </div>

      <div  className="grid items-center mt-10 px-5 md:px-10 grid-cols-1 space-y-10">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            id="card"
            className="bg-gray-800 text-white md:w-[95vw] md:h-[25vmin] overflow-hidden rounded-lg shadow hover:shadow-xl hover:scale-1.2 cursor-pointer"
          >
            <p className="text-xl md:text-3xl font-semibold p-2  inline-block">
              {job.title}
            </p>
            <div className="flex mx-2 items-center space-x-2">
              <p className="md:text-xl  px-2 bg-cyan-400 inline-block rounded-xl">
                {job.location}
              </p>
              <p className="md:text-xl  px-2 bg-cyan-400 inline-block rounded-xl">
                {job.type}
              </p>
            </div>
            <p className="mx-2 my-1 md:my-1 px-2 inline-block rounded-xl">
              <span className="font-semibold">Summary: </span>
              <br />
              {job.summary}
            </p>

            <a href="#">
              <p className="mx-2 my-2 px-2 inline-block rounded-lg text-violet-400 hover:text-white hover:border-b-2 hover:border-violet-500">
                Read more
              </p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
