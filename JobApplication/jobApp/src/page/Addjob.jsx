import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { jobContext } from "../script/context";
import { useContext } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Addjob(params) {
    useGSAP(() => {
      var tl = gsap.timeline()

      tl.from("#mainH", {
        opacity: 0,
        scale: 1,
        y:-20,
        duration: 0.5,        
      })
      tl.from("#form", {
        opacity: 0,
        scale: 1,
        duration: 0.7,
      })
    })

  const { showJob, addNewJob } = useContext(jobContext);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    addNewJob(data)
    console.log(data);
    const jobs  = showJob()
    console.log(jobs);
    reset()
    navigate("/dashboard")
  };

  return (
    <>
      <div className="flex flex-col space-y-30 justify-center items-center  px-4  transform  h-screen">
        <p id="mainH" className="text-6xl font-bold text-gray-800 ">Add another Job</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="form"
          className=" flex flex-col justify-center items-center  w-full md:w-[30%] md:h-[50%] rounded-2xl shadow-2xl transform transition-transform hover:scale-101 overflow-hidden"
        >
          <div className="w-full px-5 py-5">
            <input
              type="text"
              placeholder="Enter job title"
              {...register("title", { required: "Job title is required" })}
              className="border text-xl rounded p-2 my-3 w-full focus:outine-none outline-none focus:ring-1 focus:ring-gray-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
            <input
              type="text"
              placeholder="Enter location (Remote/OnSite/Hybrid)"
              {...register("location", {
                required: "Job location is required",
              })}
              className="border text-xl rounded p-2 my-3 w-full focus:outine-none outline-none focus:ring-1 focus:ring-gray-500"
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )}
            <input
              type="text"
              placeholder="Enter job type (Part-time/Full-time/Contract-based)"
              {...register("type", { required: "Job location is required" })}
              className="border text-xl rounded p-2 my-3 w-full focus:outine-none outline-none focus:ring-1 focus:ring-gray-500"
            />
            {errors.type && (
              <p className="text-red-500 text-sm">{errors.type.message}</p>
            )}
            <textarea
              rows= "5"
              placeholder="Enter job summary"
              {...register("summary", { required: "Job summary is required" })}
              className="border text-xl rounded p-2 my-3 w-full focus:outine-none outline-none focus:ring-1 focus:ring-gray-500"
            />
            {errors.summary && (
              <p className="text-red-500 text-sm">{errors.summary.message}</p>
            )}
          
            <button
              type="submit"
              className="w-full cursor-pointer bg-black hover:bg-gray-900 text-white py-3 rounded-lg my-6 transition-colors font-semibold"
            >
              Submit
            </button>
          
          </div>
        </form>
      </div>
    </>
  );
}
