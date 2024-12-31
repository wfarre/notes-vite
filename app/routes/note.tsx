import React, { useEffect, useState } from "react";
import MemoView from "~/components/layout/MemoView";
import type { Route } from "../+types/root";
import { Note } from "~/models/Note";
import { NoteFactory } from "~/factories/NoteFactory";
import { redirect } from "react-router";
import EditMemoButtons from "~/components/layout/EditMemoButtons";
import { getNotes, updateNote } from "~/utils/utils";

export const clientLoader = async ({ params }: Route.LoaderArgs) => {
  const noteId = params.noteId;
  try {
    const response = await getNotes(noteId);
    if (!response.ok) {
      throw new Error("Oops! Something went wrong!");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const clientAction = async ({
  request,
  params,
}: Route.ClientActionArgs) => {
  try {
    const formData = await request.formData();
    const response = await updateNote(formData, params.noteId);
    if (!response?.ok) {
      throw new Error("oops");
    }
    redirect(`/notes/${params.id}`);
  } catch (error) {
    console.log(error);
  }
};

const noteView = ({ loaderData }: Route.ComponentProps) => {
  const [note, setNote] = useState<undefined | Note>();
  useEffect(() => {
    if (loaderData) {
      const formattedNote = new NoteFactory(loaderData[0], "apiV1") as Note;
      setNote(formattedNote);
    }
  }, [loaderData]);

  return (
    <div className="flex h-full sm:flex-row flex-col-reverse row-span-full">
      <div className="flex-grow sm:border-r-[1px]">
        <MemoView
          title={note?.title}
          content={note?.content}
          tags={note?.tags}
          date={note?.date}
          id={note?.id}
        />
      </div>
      <div>
        <EditMemoButtons currentNoteId={note?.id} />
      </div>
    </div>
  );
};

export default noteView;
