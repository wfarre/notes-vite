import React from "react";

const Header = () => {
  return (
    // <header className="pl-8 pr-8 flex items-center justify-between h-20 relative row-span-1 col-span-full">
    <header className="sm:pl-8 sm:pr-8 sm:flex items-center justify-between  relative col-span-full row-[1/1] sm:col-[2/-1] border-b-[1px]">
      <h1 className="sm:hidden py-4 bg-gray-100 w-full inline-block">Notes</h1>
      <h2 className="text-2xl font-bold sm:block hidden">All notes</h2>
      <div className="hidden sm:block">
        <input type="text" name="" id="" className="bg-pink-500" />
        <button>settings</button>
      </div>
      {/* <div className="w-full h-[1px] bg-pink-900 absolute bottom-0 left-0"></div> */}
    </header>
  );
};

export default Header;
