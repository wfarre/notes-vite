import { useState } from "react";
import type { Note } from "~/models/Note";
import SideNavbar from "./SideNavbar";
import Header from "./Header";
import NotesList from "./NotesList";
import { Outlet } from "react-router";

interface Props {
  notes: Note[];
  tags: string[];
  updateSearchText: (searchText: string) => void;
}

const NotesLayout = (props: Props) => {
  const [currentPage, setCurrentPage] = useState<
    "all notes" | "archived notes" | "search" | "tags" | "settings"
  >("all notes");

  const updateSearchText = (searchText: string) => {
    props.updateSearchText(searchText);
  };

  return (
    <div className="h-[100vh] max-h-[100vh]">
      <div className="grid h-full auto-rows-auto grid-cols-5 grid-rows-12">
        <SideNavbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          tags={props.tags}
        />
        <Header updateSearchText={updateSearchText} />
        <main className="relative col-span-full row-[2/-1] h-full auto-rows-auto grid-cols-4 grid-rows-12 content-stretch overflow-auto sm:col-[2/-1] sm:grid">
          <NotesList
            notesList={props.notes}
            additionalClassName={"hidden sm:grid"}
          />
          <section className="col-span-full row-span-full h-full overflow-auto border-0 px-3 sm:col-span-3 sm:border-l-[1px] sm:border-r-[1px] sm:px-6 sm:pt-4">
            {props.notes.length > 0 ? (
              <Outlet />
            ) : (
              <div className="flex h-full items-center justify-center">
                <p>No Notes yet</p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default NotesLayout;
