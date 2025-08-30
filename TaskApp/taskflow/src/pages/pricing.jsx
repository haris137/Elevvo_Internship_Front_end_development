import { Check } from "lucide-react";

export default function Pricing(params) {
  return (
    <>
      <section className="w-screen h-screen bg-sky-300 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-0">
          <div className="w-full md:w-[50vmin] md:h-[60vmin] bg-white rounded-xl md:rounded-tl-4xl md:rounded-bl-4xl z-5 ">
            <div className="p-2 md:p-5">
              <h3 className="text-[#4F39F6] md:text-xl font-bold my-1">
                Hobby
              </h3>
              <p className="text-[.7rem] md:text-[.9rem] text-[#7A828D]  py-1">
                The essentials to provide your best work for clients.
              </p>
              <div className="flex items-baseline my-3">
                <p className="text-5xl text-[#101828] font-bold">$19</p>
                <p className="text-sm text-[#4A5565]">/month</p>
              </div>

              <a href="#">
                <button className="min-w-full border-2 border-[#533EF6] text-[#533EF6] py-2 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors duration-200 cursor-pointer my-5">
                  Buy plan
                </button>
              </a>

              <ul className="space-y-3 my-3">
                <li className="flex items-center gap-2">
                  <Check className="text-blue-600" size={20} /> Unlimited
                  projects
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-blue-600" size={20} /> Unlimited tasks
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-blue-600" size={20} /> Unlimited users
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-blue-600" size={20} /> Priority support
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-[50vmin] md:h-[70vmin] bg-black rounded-3xl z-5 shadow-lg">
            <div className="p-5">
              <h3 className="text-[#4F39F6] md:text-xl font-bold my-1">
                Hobby
              </h3>
              <p className="text-[.9rem] text-[#C6CAD1]  py-1">
                The essentials to provide your best work for clients.
              </p>
              <div className="flex items-baseline my-3">
                <p className="text-5xl text-white font-bold">$19</p>
                <p className="text-sm text-[#7A8291]">/month</p>
              </div>

              <a href="#">
                <button className="min-w-full border-2 border-transparent bg-[#533EF6] text-white py-2 rounded-lg font-semibold hover:bg-transparent hover:border-[#533EF6] hover:text-[#533EF6] transition-colors duration-200 cursor-pointer my-5">
                  Buy plan
                </button>
              </a>

              <ul className="space-y-3 my-3">
                <li className="flex items-center gap-2 text-[#7A8291] ">
                  <Check className="text-blue-600" size={20} /> Unlimited
                  projects
                </li>
                <li className="flex items-center gap-2 text-[#7A8291] ">
                  <Check className="text-blue-600" size={20} /> Unlimited tasks
                </li>
                <li className="flex items-center gap-2 text-[#7A8291] ">
                  <Check className="text-blue-600" size={20} /> Unlimited users
                </li>
                <li className="flex items-center gap-2 text-[#7A8291] ">
                  <Check className="text-blue-600" size={20} /> Priority support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
