import React from "react";
import { currentUrl } from "~/data/constant";
import type { Route } from "../+types/root";
import { headers } from "~/hooks/useFetch";
import { redirect } from "react-router";

const deleteNote = async (id: string) => {
  await fetch(currentUrl + "/notes/" + id, {
    method: "DELETE",
    headers: headers,
  });
};

export const action = async ({ request, params }: Route.ActionArgs) => {
  console.log(request);
  if (params.noteId) {
    await deleteNote(params.noteId);
    redirect("/");
  }

  // try {
  //   console.log("prout du cul");
  //   const res = await fetch(currentUrl + "/notes/" + params.noteId, {
  //     method: "DELETE",
  //     headers: headers,
  //   });
  //   console.log(res);
  //   if (!res.ok) {
  //     throw new Error("couldn't delete");
  //   }
  //   console.log("deleted");
  //   redirect("/");
  // } catch (error) {
  //   console.log(error);
  // }
};
