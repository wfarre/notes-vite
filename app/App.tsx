// import SideNavbar from "~/components/layout/SideNavbar";
// import Header from "~/components/layout/Header";
// import NotesList from "~/components/layout/NotesList";
// import { useEffect, useState } from "react";
// import { currentUrl } from "~/data/constant";
// import type { Note, NoteApi } from "~/models/Note";
// import { headers, useFetch } from "~/hooks/useFetch";
// import EditMemoButtons from "~/components/layout/EditMemoButtons";
// import { createEmptyNote, orderArrayByDate } from "~/utils/utils";
// import { NoteFactory } from "~/factories/NoteFactory";
// import MemoView from "~/components/layout/MemoView";
// import { Outlet, redirect } from "react-router";
// import type { Route } from "./+types/root";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

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
//   try {
//     const response = await fetch(currentUrl + "/notes");
//     if (!response.ok) {
//       throw new Error("Oops something went wrong!");
//     }
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const clientAction = async ({ params }: Route.ClientActionArgs) => {
//   try {
//     const response = await fetch(currentUrl + "/notes", { method: "POST" });
//     if (!response.ok) {
//       throw new Error("Opppsie!");
//     }
//     const newNote = await response.json();
//     return redirect(`/notes/${newNote._id}`);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default function Home({ loaderData }: Route.ComponentProps) {
//   const [currentPage, setCurrentPage] = useState<"all" | "archived">("all");
//   const [currentNote, setCurrentNote] = useState(0);
//   const [allNotes, setAllNotes] = useState<Note[]>([]);
//   const [currentNoteId, setCurrentNoteId] = useState("");

//   useEffect(() => {
//     const formattedNotes = formatNotes(loaderData);
//     setAllNotes(formattedNotes);
//   }, [loaderData]);

//   console.log(loaderData);
//   return (
//     <div className="h-[100vh] max-h-[100vh]">
//       <div className="grid grid-cols-5 auto-rows-auto h-full grid-rows-12">
//         <SideNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
//         <Header />
//         <main className="sm:grid h-full grid-cols-4 sm:col-[2/-1] row-[2/-1] relative content-stretch auto-rows-auto overflow-auto grid-rows-12 col-span-full">
//           <NotesList
//             notesList={allNotes}
//             createEmptyNote={() => createEmptyNote(fetchData)}
//             setCurrentNote={(noteId) => setCurrentNoteId(noteId)}
//             additionalClassName={"hidden sm:grid"}
//           />
//           <section className="sm:col-span-3 px-6 border-l-2 border pt-4 overflow-auto row-span-full col-span-full h-full">
//             {allNotes.length > 0 ? (
//               <Outlet />
//             ) : (
//               <div className="flex items-center justify-center h-full">
//                 <p>No Notes yet</p>
//               </div>
//             )}
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }
