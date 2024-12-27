import React from "react";
import ListContainer from "./ListContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faHouse } from "@fortawesome/free-solid-svg-icons";
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
    <nav className="grid h-[100vh] items-center grid-cols-1 border-r-[1px] border-r-blue-300 content-start">
      <div className="border-b-[1px] border-blue-300 mx-4 self-start ">
        <h1 className="mb-5 mt-5">Notes</h1>
        <div className="mb-2">
          <ul>
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
                All notes
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
                Archived notes
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-4 h-full grid overflow-auto auto-rows-max align-start bg-pink-400 self-stretch">
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
