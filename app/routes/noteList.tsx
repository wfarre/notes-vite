import React, { useEffect, useState } from "react";
import { redirect } from "react-router";
import NotesList from "~/components/layout/NotesList";
import { currentUrl } from "~/data/constant";
import type { Note } from "~/models/Note";
import type { Route } from "../+types/root";
import { formatNotes } from "~/utils/utils";
import { createEmptyNote, getNotes } from "~/utils/methods";

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
    const response = await createEmptyNote();
    if (!response.ok) {
      throw new Error("Opppsie!");
    }
    const newNote = await response.json();
    return redirect(`/notes/${newNote._id}`);
  } catch (error) {
    console.log(error);
  }
};

const noteList = ({ loaderData }: Route.ComponentProps) => {
  const [allNotes, setAllNotes] = useState<Note[]>([]);

  useEffect(() => {
    loaderData && setAllNotes(formatNotes(loaderData));
  }, [loaderData]);

  return <NotesList notesList={allNotes} additionalClassName="sm:hidden" />;
};

export default noteList;
