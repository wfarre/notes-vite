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
import { Link, NavLink } from "react-router";

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
    link: "/search",
  },
  {
    title: "Archived Notes",
    icon: faBoxArchive,
    displayOnDesktop: true,
    link: "/notes/archived",
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
  tags: string[];
}

const SideNavbar = (props: Props) => {
  const handleSetCurrentPage = (current: "all notes" | "archived notes") => {
    props.setCurrentPage(current);
  };

  const isLinkActive = ({ isActive }) => {
    console.log(isActive);
  };

  return (
    <nav className="col-span-full row-span-12 grid h-auto grid-cols-1 content-start items-center border-t-[1px] border-r-blue-300 py-4 sm:col-span-1 sm:row-span-1 sm:h-[100vh] sm:border-r-[1px] sm:border-t-0 sm:bg-transparent">
      <div className="mx-4 self-start border-blue-300 sm:border-b-[1px]">
        <h1 className="mb-5 mt-5 hidden sm:block">Notes</h1>
        <div className="mb-2">
          <ul className="flex justify-around sm:flex-col sm:justify-start">
            {navigationLinks.map((link, index) => {
              return (
                <li className="flex-1">
                  <NavLink
                    to={link.link}
                    className={`flex items-center justify-center gap-4 rounded-md px-3 py-2 sm:justify-start sm:rounded-xl ${!link.displayOnDesktop && "hidden"} ${isLinkActive}`}
                  >
                    <FontAwesomeIcon icon={link.icon} className="h-5 w-5" />
                    <p className="hidden sm:block">{link.title}</p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="align-start hidden h-full auto-rows-max self-stretch overflow-auto bg-pink-400 px-4 sm:grid">
        <h2 className="mb-5 mt-3">Tags</h2>
        <ListContainer>
          {props.tags.map((tag, index) => {
            return (
              <li key={"tag" + index}>
                <button>{tag}</button>
              </li>
            );
          })}
        </ListContainer>
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

// ${
//   props.currentPage.toLowerCase() ===
//   link.title.toLowerCase()
//     ? "bg-blue-200"
//     : "bg-transparent"
// }
