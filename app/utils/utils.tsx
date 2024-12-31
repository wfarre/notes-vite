import { currentUrl } from "~/data/constant";
import { NoteFactory } from "~/factories/NoteFactory";
import { headers } from "~/hooks/useFetch";
import type { Note, NoteApi } from "~/models/Note";

/**
 * Order the array by date
 * @param array 
 * @returns new array ordered
 */
export const orderArrayByDate = <Type extends Note>(array: Type[]): Type[] => {
  return array.sort((a, b) => {
    const dateA = a.date ? new Date(a.date) : new Date();
    const dateB = b.date ? new Date(b.date) : new Date();
    return dateB.getTime() - dateA.getTime();
  });
};

export const formatNotes = (array: NoteApi[]): Note[] => {
  let formattedNotes = array?.map(
    (note) => new NoteFactory(note, "apiV1") as Note
  );
  formattedNotes = orderArrayByDate(formattedNotes);
  return formattedNotes;
};

/**
 * 
 * @param date: string format
 * @returns "29 Dec 2024" format
 */
export const formatDate = (date: string):string =>  new Date(date).toDateString().slice(3)


export const createEmptyNote = async () => {
  const newEmptyNote = {
    title: "",
    tags: [],
    content: "",
  };

  return await fetch(currentUrl + "/notes", {
    method: "post",
    headers: headers,
    body: JSON.stringify(newEmptyNote),
  });
};

export const getNotes = async (id?: string) => {
  return await fetch(`${currentUrl}/notes${id ? "/" + id : ""}`, {
    method: "GET",
    headers: headers,
  });
};

export const deleteNote = async (id: string) => {
  return await fetch(`${currentUrl}/notes/${id}`, {
    method: "DELETE",
    headers: headers,
  });
};

export const updateNote = async (formData: FormData, id?: string) => {
  const updates = Object.fromEntries(formData);
  console.log(updates);
  const memoFormData = JSON.parse(updates.memoFormData as string);

  const updatedNote = {
    title: updates.title ? updates.title : undefined,
    content: updates.content ? updates.content : undefined,
    tags: memoFormData.tags ? memoFormData.tags : undefined,
  } as {
    title?: string | undefined;
    content?: string | undefined;
    tags: string[] | undefined;
  };

  if (id) {
    return await fetch(`${currentUrl}/notes/${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(updatedNote),
    });
  }
};
