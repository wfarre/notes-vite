import type { Route } from "./+types/home";
import SideNavbar from "~/components/layout/SideNavbar";
import Header from "~/components/layout/Header";
import NotesList from "~/components/layout/NotesList";
import { useEffect, useState } from "react";
import { currentUrl } from "~/data/constant";
import type { Note } from "~/models/Note";
import { getNotes } from "~/utils/methods";
import { Outlet, redirect } from "react-router";
import { formatNotes } from "~/utils/utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const clientLoader = async ({ params }: Route.LoaderArgs) => {
  try {
    const response = await getNotes();
    if (!response.ok) {
      throw new Error("Oops something went wrong!");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const clientAction = async ({ params }: Route.ClientActionArgs) => {
  try {
    const response = await fetch(currentUrl + "/notes", { method: "POST" });
    if (!response.ok) {
      throw new Error("Opppsie!");
    }
    const newNote = await response.json();
    return redirect(`/notes/${newNote._id}`);
  } catch (error) {
    console.log(error);
  }
};

export default function Home({ loaderData }: Route.ComponentProps) {
  const [currentPage, setCurrentPage] = useState<"all notes" | "archived notes" | "search" | "tags" | "settings">("all notes");
  const [allNotes, setAllNotes] = useState<Note[]>([]);

  useEffect(() => {
    const formattedNotes = formatNotes(loaderData);
    setAllNotes(formattedNotes);
  }, [loaderData]);

  return (
    <div className="h-[100vh] max-h-[100vh]">
      <div className="grid grid-cols-5 auto-rows-auto h-full grid-rows-12">
        <SideNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Header />
        <main className="sm:grid h-full grid-cols-4 sm:col-[2/-1] row-[2/-1] relative content-stretch auto-rows-auto overflow-auto grid-rows-12 col-span-full">
          <NotesList
            notesList={allNotes}
            additionalClassName={"hidden sm:grid"}
          />
          <section className="sm:col-span-3 sm:px-6 sm:border-l-[1px] sm:border-r-[1px] sm:pt-4 overflow-auto row-span-full col-span-full h-full px-3 border-0">
            {allNotes.length > 0 ? (
              <Outlet />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p>No Notes yet</p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export const HydrateFallback = () => {
  return <>Loading...</>;
};
