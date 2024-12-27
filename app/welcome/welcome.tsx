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
import Button from "~/components/ui/Button";
import Card from "~/components/ui/Card";
import Memo from "~/components/layout/MemoView";
import ListContainer from "~/components/layout/ListContainer";
import SideNavbar from "~/components/layout/SideNavbar";
import { NoteFactory } from "~/factories/NoteFactory";
import type { Note, NoteApi } from "~/models/Note";
import { headers, useFetch } from "~/hooks/useFetch";
import { createEmptyNote, orderArrayByDate } from "~/utils/utils";
import Header from "~/components/layout/Header";
import NotesList from "~/components/layout/NotesList";
import DeleteArchiveMemoSection from "~/components/layout/DeleteArchiveMemoSection";

// const currentUrl = "/data/data.json"
const currentUrl = "http://localhost:3000";

export function Welcome() {
  const [currentPage, setCurrentPage] = useState<"all" | "archived">("all");
  const [currentNote, setCurrentNote] = useState(0);
  const [allNotes, setAllNotes] = useState<Note[]>([]);

  const [{ isLoading, error, data }, fetchData] = useFetch("/notes");

  const formatNotes = (array: NoteApi[]): Note[] => {
    let formattedNotes = array?.map(
      (note) => new NoteFactory(note, "apiV1") as Note
    );
    formattedNotes = orderArrayByDate(formattedNotes);
    return formattedNotes;
  };

  useEffect(() => {
    setAllNotes(formatNotes(data));
  }, [data]);

  return (
    <div className="h-[100vh] max-h-[100vh]">
      <div className="grid grid-cols-5 auto-rows-auto h-full grid-rows-12">
        <SideNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Header />
        <main className="grid h-full grid-cols-4 col-[2/-1] row-[2/-1] relative content-stretch auto-rows-auto overflow-auto ">
          {/* <section className="grid h-full grid-cols-1 overflow-auto row-span-full content-start ">
            <div className="pl-8 pr-4">
              <Button
                title="+ Create a new note"
                className="mt-5 mb-3 w-full bg-blue-500 py-3 rounded-xl justify-center text-white"
                onClick={() => {
                  createEmptyNote();
                }}
              />
            </div>
            <ListContainer className="pl-8 pr-4">
              {allNotes.map((memo, index) => {
                return (
                  <li
                    key={`memo${index}`}
                    onClick={() => {
                      setCurrentNote(index);
                    }}
                  >
                    <Card
                      title={memo.title}
                      tags={memo.tags}
                      updatedDate={memo.date}
                    />
                  </li>
                );
              })}
            </ListContainer>
          </section> */}

          <NotesList
            notesList={allNotes}
            createEmptyNote={() => createEmptyNote(fetchData)}
            setCurrentNote={(index) => setCurrentNote(index)}
          />

          <section className="col-span-2 px-6 border-l-2 border pt-4 overflow-auto row-[2/-1]">
            {allNotes.length > 0 ? (
              <Memo
                title={allNotes[currentNote]?.title}
                content={allNotes[currentNote]?.content}
                tags={allNotes[currentNote]?.tags}
                date={allNotes[currentNote]?.date}
                id={allNotes[currentNote]?.id}
                fetchData={fetchData}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p>No Notes yet</p>
              </div>
            )}
          </section>
          <DeleteArchiveMemoSection
            currentNoteId={allNotes[currentNote]?.id}
            fetchData={fetchData}
          />
        </main>
      </div>
    </div>
  );
}
