import React from "react";
import { currentUrl } from "~/data/constant";
import type { Route } from "../+types/root";
import { headers } from "~/hooks/useFetch";
import { redirect } from "react-router";
import { deleteNote } from "~/utils/utils";

export const action = async ({ request, params }: Route.ActionArgs) => {
  if (params.noteId) {
    const res = await deleteNote(params.noteId);
    if (!res.ok) {
      console.log("couldn't delete");
    }
    redirect("/");
  }
};
