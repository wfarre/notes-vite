import React, { useState } from "react";

interface Props {
  updateSearchText: (searchText: string) => void;
}

const Header = (props: Props) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchText(e.target.value);
    props.updateSearchText(String(e.target.value));
  };

  return (
    // <header className="pl-8 pr-8 flex items-center justify-between h-20 relative row-span-1 col-span-full">
    <header className="relative col-span-full row-[1/1] items-center justify-between sm:col-[2/-1] sm:flex sm:border-b-[1px] sm:pl-8 sm:pr-8">
      <h1 className="inline-block w-full bg-gray-100 py-4 sm:hidden">Notes</h1>
      <h2 className="hidden text-2xl font-bold sm:block">All notes</h2>
      <div className="hidden sm:block">
        <input
          type="text"
          name="search"
          id="search"
          className="bg-pink-500"
          value={searchText}
          onChange={handleSearchChange}
        />
        <button>settings</button>
      </div>
      {/* <div className="w-full h-[1px] bg-pink-900 absolute bottom-0 left-0"></div> */}
    </header>
  );
};

export default Header;
