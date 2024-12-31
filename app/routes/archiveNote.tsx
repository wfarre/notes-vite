import React from "react";
import type { Route } from "../+types/root";
import { redirect } from "react-router";
import { deleteNote } from "~/utils/methods";
import { currentUrl } from "~/data/constant";
import { headers } from "~/hooks/useFetch";

export const action = async ({ params }: Route.ActionArgs) => {
  console.log("yoooooooo");

  if (params.noteId) {
    const res = await fetch(`${currentUrl}/notes/${params.noteId}/archive`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({ name: "hello" }),
    });
    console.log(res);

    if (!res.ok) {
      console.log("couldn't delete");
    }
    redirect("/");
  }
};
