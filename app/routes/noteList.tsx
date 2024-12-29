import React, { useEffect, useState } from "react";
import NotesList from "~/components/layout/NotesList";
import { NoteFactory } from "~/factories/NoteFactory";
import { useFetch } from "~/hooks/useFetch";
import type { Note } from "~/models/Note";
import { formatNotes } from "~/welcome/welcome";

const noteList = () => {
  const [allNotes, setAllNotes] = useState<Note[]>([]);

  const [{ isLoading, error, data }, fetchData] = useFetch("/notes");

  useEffect(() => {
    setAllNotes(formatNotes(data));
  }, [data]);

  return (
    <NotesList
      notesList={allNotes}
      createEmptyNote={function (): void {
        throw new Error("Function not implemented.");
      }}
      setCurrentNote={function (noteId: string): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

export default noteList;
