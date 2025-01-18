// import { useEffect, useState } from "react";
// import Memo from "~/components/layout/MemoView";
// import SideNavbar from "~/components/layout/SideNavbar";
// import { NoteFactory } from "~/factories/NoteFactory";
// import type { Note, NoteApi } from "~/models/Note";
// import { headers, useFetch } from "~/hooks/useFetch";
// import { createEmptyNote, orderArrayByDate } from "~/utils/utils";
// import Header from "~/components/layout/Header";
// import NotesList from "~/components/layout/NotesList";
// import { Outlet } from "react-router";
// import EditMemoButtons from "~/components/layout/EditMemoButtons";
// import type { Route } from "../+types/root";
// import { currentUrl } from "~/data/constant";

// const fetchData = async (path: String) => {
//   const data = await fetch(currentUrl + path, {
//     method: "GET",
//     headers: headers,
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => console.log(error));

//   return data;
// };

// export const formatNotes = (array: NoteApi[]): Note[] => {
//   let formattedNotes = array?.map(
//     (note) => new NoteFactory(note, "apiV1") as Note
//   );
//   formattedNotes = orderArrayByDate(formattedNotes);
//   return formattedNotes;
// };

// export const clientLoader = async ({ params }: Route.LoaderArgs) => {
//   // const [{ isLoading, error, data }, fetchData] = useFetch("/notes");
//   // const data: NoteApi[] = await fetchData("/notes");
//   // const notes = formatNotes(data);
//   // console.log(data);

//   // try {
//   const response = await fetch(currentUrl + "/notes");
//   // if (!response.ok) {
//   //   throw new Error("Oops something went wrong!");
//   // }
//   return currentUrl;
//   // } catch (error) {
//   //   console.log(error);
//   // }

//   // return { data };
// };

// export function Welcome({ loaderData }: Route.ComponentProps) {
//   const [currentPage, setCurrentPage] = useState<"all" | "archived">("all");
//   const [currentNote, setCurrentNote] = useState(0);
//   const [allNotes, setAllNotes] = useState<Note[]>([]);
//   const [currentNoteId, setCurrentNoteId] = useState("");

//   const [{ isLoading, error, data }, fetchData] = useFetch("/notes");

//   useEffect(() => {
//     setAllNotes(formatNotes(data));
//   }, [data]);
//   // setAllNotes(loaderData.notes);

//   console.log(loaderData);

//   return (
//     <div className="h-[100vh] max-h-[100vh]">
//       <div className="grid grid-cols-5 auto-rows-auto h-full grid-rows-12">
//         <SideNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
//         <Header />

//         {/* <main className="sm:grid h-full grid-cols-4 sm:col-[2/-1] row-[2/-1] relative content-stretch auto-rows-auto overflow-auto grid-rows-12 col-span-full">
//           <Outlet />
//         </main> */}

//         <main className="sm:grid h-full grid-cols-4 sm:col-[2/-1] row-[2/-1] relative content-stretch auto-rows-auto overflow-auto grid-rows-12 col-span-full hidden">
//           <NotesList
//             notesList={allNotes}
//             createEmptyNote={() => createEmptyNote(fetchData)}
//             setCurrentNote={(noteId) => setCurrentNoteId(noteId)}
//           />
//           <section className="col-span-2 px-6 border-l-2 border pt-4 overflow-auto row-[2/-1]">
//             {allNotes.length > 0 ? (
//               // <Memo
//               //   title={allNotes[currentNote]?.title}
//               //   content={allNotes[currentNote]?.content}
//               //   tags={allNotes[currentNote]?.tags}
//               //   date={allNotes[currentNote]?.date}
//               //   id={allNotes[currentNote]?.id}
//               //   fetchData={fetchData}
//               // />
//               // <Outlet />
//               <p>Hello</p>
//             ) : (
//               <div className="flex items-center justify-center h-full">
//                 <p>No Notes yet</p>
//               </div>
//             )}
//           </section>
//           {/* <EditMemoButtons
//             currentNoteId={currentNoteId}
//             fetchData={fetchData}
//           /> */}
//         </main>
//       </div>
//     </div>
//   );
// }
