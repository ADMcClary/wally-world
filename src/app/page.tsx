import Image from "next/image";
import { Abril_Fatface } from "next/font/google";
import Navbar from "./components/Navbar";

const font = Abril_Fatface({weight: "400", subsets: ["latin"]})

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="pt-48 z-10 mb-5 max-w-5xl lg:w-full items-center justify-between font-mono text-sm lg:flex sm:w-32 lg:pl-28">
          <Image 
              src="/Walmart_Spark.svg.png"
              alt="logo"
              width={270}
              height={270}
              priority
          />
          <h1 className={`${font.className} text-9xl sm:text-8xl`}>WALLY WORLD!!!</h1>
        </div>
        <div className="lg:flex item-center justify-between mb-48">
          <button className="bg-sky-500 hover:bg-sky-700 p-5 rounded-md">
              Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
