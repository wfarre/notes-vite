import { Link } from "react-router";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faHouse,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Button from "~/components/Button";
import Card from "~/components/Card";
import Memo from "~/components/MemoView";
import ListContainer from "~/components/ListContainer";

export function Welcome() {
  const [currentPage, setCurrentPage] = useState<"all" | "archived">("all");

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.response);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(data);

  return (
    <div className="h-[100vh] max-h-[100vh]">
      <div className="grid grid-cols-5 auto-rows-auto h-full">
        <div className="grid h-[100vh] items-center grid-cols-1 border-r-[1px] border-r-blue-300">
          <div className="border-b-[1px] border-blue-300 mx-4">
            <h1 className="mb-5 mt-5">Notes</h1>
            <nav className="mb-2">
              <ul>
                <li>
                  <Link
                    to={"/"}
                    className={`py-2 px-3 flex gap-4 rounded-xl items-center ${
                      currentPage === "all" ? "bg-slate-200" : "bg-transparent"
                    }`}
                    onClick={() => setCurrentPage("all")}
                  >
                    <FontAwesomeIcon icon={faHouse} />
                    All notes
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className={`py-2 px-3 flex gap-4 rounded-xl items-center ${
                      currentPage === "archived"
                        ? "bg-slate-200"
                        : "bg-transparent"
                    }`}
                    onClick={() => setCurrentPage("archived")}
                  >
                    <FontAwesomeIcon icon={faBoxArchive} />
                    Archived notes
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="px-4 h-full grid overflow-auto">
            <h2 className="mt-3 mb-5">Tags</h2>
            <ListContainer>
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
            </ListContainer>
          </div>
        </div>

        <div className="h-[100vh] grid grid-cols-4 col-span-4 relative">
          {/* <div className="h-[100vh] w-[1px] bg-pink-900 absolute top-0 left-0"></div> */}
          <div className="pl-8 pr-8 flex items-center col-span-4 justify-between h-20 relative">
            <h2 className=" text-2xl font-bold">All notes</h2>
            <div>
              <input type="text" name="" id="" className="bg-pink-500" />
              <button>settings</button>
            </div>
            <div className="w-full h-[1px] bg-pink-900 absolute bottom-0 left-0"></div>
          </div>

          <div className="grid h-full grid-cols-1 overflow-auto">
            <div className="pl-8 pr-4">
              <Button
                title="+ Create a new note"
                className="mt-5 mb-3 w-full bg-blue-500 py-3 rounded-xl justify-center text-white"
              />
            </div>
            <ListContainer className="pl-8 pr-4">
              {data.map((memo) => {
                return (
                  <li>
                    <Card
                      title={memo.title}
                      tags={memo.tags}
                      updatedDate={memo.edited}
                    />
                  </li>
                );
              })}
            </ListContainer>
          </div>
          <div className="col-span-2 px-6 border-l-2 border pt-4 overflow-auto">
            <Memo
              title={"React Performance Optimization"}
              content={"blalba"}
              tags={[]}
              date={""}
            />
          </div>
          <div className="pr-8 pl-4">
            <ul className="flex gap-4 flex-col mt-5">
              <li>
                <Button
                  title={"Archive Note"}
                  icon={faBoxArchive}
                  className={"border border-solid border-gray-200 w-full"}
                />
              </li>
              <li>
                <Button
                  title={"Delete Note"}
                  icon={faTrashCan}
                  className={"border border-solid border-gray-200 w-full"}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];
