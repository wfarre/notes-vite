import React from "react";
import type { Route } from "../+types/root";
import { redirect } from "react-router";
import { archiveNote } from "~/utils/methods";

export const action = async ({ params }: Route.ActionArgs) => {
  if (params.noteId) {
    const res = await archiveNote(params.noteId);
    if (!res.ok) {
      console.log("couldn't delete");
    }
    redirect("/");
  }
};
