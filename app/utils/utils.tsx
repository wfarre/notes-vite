import { redirect } from "react-router";
import { currentUrl } from "~/data/constant";
import type { Note } from "~/models/Note";

export const orderArrayByDate = <Type extends Note>(array: Type[]): Type[] => {
  return array.sort((a, b) => {
    const dateA = a.date ? new Date(a.date) : new Date();
    const dateB = b.date ? new Date(b.date) : new Date();
    return dateB.getTime() - dateA.getTime();
  });
};

export const deleteNote = (
  currentNoteId: string,
  callback: (path: string) => void
) => {
  fetch(currentUrl + "/notes/" + currentNoteId, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      callback("/notes");
    })
    .catch((err) => console.log(err));
};

export const createEmptyNote = async (callback: (path: string) => void) => {
  const newEmptyNote = {
    title: "",
    tags: [],
    content: "",
  };

  await fetch(currentUrl + "/notes", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify(newEmptyNote),
  })
    .then((res) => res.json())
    .then((data) => {
      callback("/notes");
    })
    .catch((err) => console.log(err));
};

export const updateMemo = (
  memo: {
    id: string;
    title: string;
    content: string;
    tags: string[];
  },
  callback: (path: string) => void
) => {
  fetch(currentUrl + "/notes/" + memo.id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify(memo),
  })
    .then((res) => res.json())
    .then((data) => {
      callback("/notes");
      redirect(`/notes/${memo.id}`);
    })
    .catch((err) => console.log(err));
};
