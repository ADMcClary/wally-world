"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { link } from "fs";

const navigationlinks = ["Home", "Food", "Clothing", "Electronics", "Toys"];
function Navigationhandler({ href, text, router }) {
  const isactive = router.aspath === (href === "/home" ? "/" : href);
  return (
    <Link
      href={href === "/home" ? "/" : href}
      passHref
      className={`${
        isactive && "active:text-yellow-200"
      } block hover:text-yellow-200`}
    >
      {text}
    </Link>
  );
}

function Navbar() {
  const router = useRouter();
  return (
    <nav className=" bg-sky-300">
      <div className="flex items-center justify-between mx-auto flex-wrap">
        <div className="flex items-center space-x-3 pl-10">
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
          <div className="flex flex-row p-4 space-x-8">
            {navigationlinks.map((link) => {
              return (
                <Navigationhandler
                  key={link}
                  href={`/${link}`}
                  text={link}
                  router={router}
                />
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
