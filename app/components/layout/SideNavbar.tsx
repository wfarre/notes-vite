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
interface Props {
  currentPage: "all" | "archived";
  setCurrentPage: (newState: "all" | "archived") => void;
}

const SideNavbar = (props: Props) => {
  const handleSetCurrentPage = (current: "all" | "archived") => {
    props.setCurrentPage(current);
  };

  return (
    <nav className="grid sm:h-[100vh] items-center grid-cols-1 border-r-[1px] border-r-blue-300 content-start h-auto row-span-12 col-span-full sm:row-span-1 sm:col-span-1 sm:bg-transparent bg-slate-400">
      <div className="border-b-[1px] border-blue-300 mx-4 self-start ">
        <h1 className="mb-5 mt-5 hidden sm:block">Notes</h1>
        <div className="mb-2">
          <ul className="flex sm:flex-col justify-between sm:justify-start">
            <li>
              <Link
                to={"/"}
                className={`py-2 px-3 flex gap-4 rounded-xl items-center ${
                  props.currentPage === "all"
                    ? "bg-slate-200"
                    : "bg-transparent"
                }`}
                onClick={() => handleSetCurrentPage("all")}
              >
                <FontAwesomeIcon icon={faHouse} />
                <p className="hidden sm:block">All notes</p>
              </Link>
            </li>
            <li className="sm:hidden">
              <Link
                to={"/"}
                className={`py-2 px-3 flex gap-4 rounded-xl items-center ${
                  props.currentPage === "all"
                    ? "bg-slate-200"
                    : "bg-transparent"
                }`}
                onClick={() => handleSetCurrentPage("all")}
              >
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </li>

            <li>
              <Link
                to={"/"}
                className={`py-2 px-3 flex gap-4 rounded-xl items-center ${
                  props.currentPage === "archived"
                    ? "bg-slate-200"
                    : "bg-transparent"
                }`}
                onClick={() => handleSetCurrentPage("archived")}
              >
                <FontAwesomeIcon icon={faBoxArchive} />
                <p className="hidden sm:block">Archived notes</p>
              </Link>
            </li>
            <li className="sm:hidden">
              <Link
                to={"/"}
                className={`py-2 px-3 flex gap-4 rounded-xl items-center ${
                  props.currentPage === "all"
                    ? "bg-slate-200"
                    : "bg-transparent"
                }`}
                onClick={() => handleSetCurrentPage("all")}
              >
                <FontAwesomeIcon icon={faTag} />
              </Link>
            </li>
            <li className="sm:hidden">
              <Link
                to={"/"}
                className={`py-2 px-3 flex gap-4 rounded-xl items-center ${
                  props.currentPage === "all"
                    ? "bg-slate-200"
                    : "bg-transparent"
                }`}
                onClick={() => handleSetCurrentPage("all")}
              >
                <FontAwesomeIcon icon={faGear} />
              </Link>
            </li>
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
