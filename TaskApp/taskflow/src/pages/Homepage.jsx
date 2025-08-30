import { motion } from "framer-motion"

function Home() {
  return <>
    <section>
          <div className="min-h-screen min-w-screen bg-sky-300 flex flex-col justify-center text-left p-4 relative">
            <p className="text-white text-8xl font-bold z-10 relative">
              Task FLow
            </p>
            <p className="text-2xl text-slate-700 font-bold pl-2 ">
              Organize your life,
            </p>
            <p className="text-2xl text-slate-700 font-bold pl-2 ">
              One task at a time
            </p>
            <span className="z-10 relative">
              <motion.button
                className="bg-blue-700 p-3 m-3 text-xl rounded-4xl text-white cursor-pointer"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
              >
                Sig up for free
              </motion.button>
            </span>
            <div className="h-[100vmin] w-[100vmin] bg-red-500 rounded-full fixed -right-1/4 -top-1/4"></div>
          </div>
    </section>
    </>
}

export default Home;
