import React from "react";
import ListContainer from "./ListContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faGear,
  faHouse,
  faSearch,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const navigationLinks = [
  {
    title: "All Notes",
    icon: faHouse,
    displayOnDesktop: true,
    link: "/notes",
  },
  {
    title: "search",
    icon: faSearch,
    displayOnDesktop: false,
    link: "/notes",
  },
  {
    title: "Archived Notes",
    icon: faBoxArchive,
    displayOnDesktop: true,
    link: "/archived",
  },
  {
    title: "tags",
    icon: faTag,
    displayOnDesktop: false,
    link: "/tags",
  },
  {
    title: "Settings",
    icon: faGear,
    displayOnDesktop: false,
    link: "/settings",
  },
];

interface Props {
  currentPage: "all notes" | "archived notes" | "search" | "tags" | "settings";
  setCurrentPage: (
    newState: "all notes" | "archived notes" | "search" | "tags" | "settings",
  ) => void;
}

const SideNavbar = (props: Props) => {
  const handleSetCurrentPage = (current: "all notes" | "archived notes") => {
    props.setCurrentPage(current);
  };

  return (
    <nav className="grid sm:h-[100vh] items-center grid-cols-1 sm:border-r-[1px] border-r-blue-300 content-start h-auto row-span-12 col-span-full sm:row-span-1 sm:col-span-1 sm:bg-transparent py-4 border-t-[1px] sm:border-t-0">
      <div className="sm:border-b-[1px] border-blue-300 mx-4 self-start ">
        <h1 className="mb-5 mt-5 hidden sm:block">Notes</h1>
        <div className="mb-2">
          <ul className="flex sm:flex-col justify-around sm:justify-start">
            {navigationLinks.map((link, index) => {
              return (
                <li className="flex-1">
                  <Link
                    to={link.link}
                    className={`py-2 px-3 flex gap-4 sm:rounded-xl rounded-md items-center justify-center sm:justify-start ${!link.displayOnDesktop && "hidden"} ${
                      props.currentPage.toLowerCase() ===
                      link.title.toLowerCase()
                        ? "bg-blue-200"
                        : "bg-transparent"
                    }`}
                  >
                    <FontAwesomeIcon icon={link.icon} className="h-5 w-5" />
                    <p className="hidden sm:block">{link.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="px-4 h-full sm:grid overflow-auto auto-rows-max align-start bg-pink-400 self-stretch hidden">
        <h2 className="mt-3 mb-5">Tags</h2>
        {/* <ListContainer>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li> */}
        {/* <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li>
          <li>
            <button>Cooking</button>
          </li> */}
        {/* </ListContainer> */}
      </div>
    </nav>
  );
};

export default SideNavbar;
