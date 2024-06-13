import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <header className="w-full  flex p-1  ">
        <div className="m-2 rounded-full p-4 shadow-md bg-white bg-opacity-95  w-full flex justify-between">
          <span className="organic-font text-xl">Roo</span>
          <nav>
            <Bars3Icon className="size-6 text-black" />
          </nav>
        </div>
      </header>
      <div className="flex     w-full    justify-center items-start min-h-screen">
        <span className="   m-2 min-h-[50vh] flex justify-around items-center text-xl w-full flex-col">
          <Image
            src="/roo-logo.svg"
            alt="roo coffee logo"
            width={400}
            height={100}
          />

          <h1 className=" text-7xl text-center organic-font">Organic Coffee</h1>
          <button className=" p-3 bg-[#88613e] text-white rounded-lg shadow-lg border cursor-pointer hover:mb-1 relative transition-all duration-300">
            Shop Coffee
          </button>
        </span>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 bg-slate-400   w-full bg-opacity-40 rounded-lg shadow-lg">
        <span className=" bg-white m-2 min-h-60 flex justify-center items-center text-xl">
          Area 1
        </span>
        <span className=" bg-white m-2 min-h-60 flex justify-center items-center text-xl">
          Area 2
        </span>
        <span className=" bg-white m-2 min-h-60 flex justify-center items-center text-xl">
          Area 3
        </span>
        <span className=" bg-white m-2 min-h-60 flex justify-center items-center text-xl">
          Area 4
        </span>
      </div>
    </main>
  );
}
