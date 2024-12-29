import React, { useEffect, useState } from "react";
import MemoView from "~/components/layout/MemoView";
import { headers, useFetch } from "~/hooks/useFetch";
import type { Route } from "../+types/root";
import { formatNotes } from "~/welcome/welcome";
import { Note, type NoteApi } from "~/models/Note";
import { NoteFactory } from "~/factories/NoteFactory";
import DeleteArchiveMemoSection from "~/components/layout/EditMemoButtons";
import { currentUrl } from "~/data/constant";
import { redirect } from "react-router";
import EditMemoButtons from "~/components/layout/EditMemoButtons";

export const clientLoader = async ({ params }: Route.LoaderArgs) => {
  const noteId = params.noteId;
  try {
    const response = await fetch(currentUrl + `/notes/${noteId}`);
    if (!response.ok) {
      throw new Error("Oops! Something went wrong!");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const action = async ({ request, params }: Route.ActionArgs) => {
  // console.log(request);
  const requestMethod = request.method;

  try {
    switch (requestMethod) {
      case "DELETE":
        try {
          console.log("prout du cul");

          const res = await fetch(currentUrl + "/notes/" + params.noteId, {
            method: "DELETE",
            headers: headers,
          });
          console.log(res);

          if (!res.ok) {
            throw new Error("couldn't delete");
          }
          console.log("deleted");

          redirect("/notes");
        } catch (error) {
          console.log(error);
        }

        break;
      case "PATCH":
        const formData = await request.formData();
        const updates = Object.fromEntries(formData);
        const updatedNote = {
          title: updates.title ? updates.title : undefined,
          content: updates.content ? updates.content : undefined,
          tags: updates.tags ? updates.tags : undefined,
        };
        const response = await fetch(currentUrl + "/notes/" + params.noteId, {
          method: "PATCH",
          headers: headers,
          body: JSON.stringify(updatedNote),
        });
        if (!response.ok) {
          throw new Error("oops");
        }
        redirect(`/notes/${params.id}`);
        break;
      default:
        console.log("method not recognized");
        break;
    }
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
    // <p>{loaderData.noteId}</p>
    <div className="flex h-full ">
      <div className="flex-grow border-r-2">
        <MemoView
          title={note?.title}
          content={note?.content}
          tags={note?.tags}
          date={note?.date}
          id={note?.id}
          // fetchData={fetchData}
        />
      </div>
      <div>
        <EditMemoButtons
          currentNoteId={note?.id}
          // fetchData={fetchData}
        />
      </div>
    </div>
  );
};

export default noteView;
