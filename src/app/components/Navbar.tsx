import React from "react";
import Image from "next/image";
function Navbar() {
  return (
    <nav className=" bg-sky-300">
      <div className="flex items-center justify-between mx-auto flex-wrap">
        <div className="flex items-center space-x-3">
          <Image
            src="/Walmart_Spark.svg.png"
            alt="logo"
            width={30}
            height={30}
            priority
          />
          <span className="self-center text-xl font-bold whitespace-nowrap">
            WallyWorld
          </span>
        </div>
        <div className="w-auto pl-10 block ">
          <ul className="flex flex-row p-4 space-x-8">
            <li>
              <a aria-current="page" className="block hover:text-yellow-200">
                Home
              </a>
            </li>
            <li>
              <a className="block hover:text-yellow-200">Food</a>
            </li>
            <li>
              <a className="block hover:text-yellow-200">Clothing</a>
            </li>
            <li>
              <a className="block hover:text-yellow-200">Electronics</a>
            </li>
            <li>
              <a className="block hover:text-yellow-200">Toys</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
