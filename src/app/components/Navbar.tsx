import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row space-evenly w-full pl-10 bg-gray-300">
      <a href="#" className="flex w-full">
        type here:
      </a>
      <a href="#" className="flex w-full">
        food
      </a>
      <a href="#" className="flex w-full">
        clothes
      </a>
      <a href="#" className="flex w-full">
        toys
      </a>
      <a href="#" className="flex w-full">
        electronics
      </a>
    </div>
  );
}

export default Navbar;
