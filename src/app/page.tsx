import Image from "next/image";
import { Abril_Fatface } from "next/font/google";

const font = Abril_Fatface({weight: "400", subsets: ["latin"]})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image 
            src="/Walmart_Spark.svg.png"
            alt="logo"
            width={270}
            height={270}
            priority
        />
        <h1 className={`${font.className} text-9xl`}>WALLY WORLD!!!</h1>
      </div>
    </main>
  );
}
