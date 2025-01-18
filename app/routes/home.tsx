import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import { currentUrl } from "~/data/constant";
import type { Note } from "~/models/Note";
import { getNotes } from "~/utils/methods";
import { redirect } from "react-router";
import {
  formatNotes,
  getTagListWithNoRepeatedValueFromAllNotes,
  searchByInput,
} from "~/utils/utils";
import NotesLayout from "~/components/layout/NotesLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const clientLoader = async ({ params }: Route.LoaderArgs) => {
  console.log(params);

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
    const response = await fetch(currentUrl + "/notes", { method: "POST" });
    if (!response.ok) {
      throw new Error("Ooppsie!");
    }
    const newNote = await response.json();
    return redirect(`/notes/${newNote._id}`);
  } catch (error) {
    console.log(error);
  }
};

export default function Home({ loaderData }: Route.ComponentProps) {
  const [currentPage, setCurrentPage] = useState<
    "all notes" | "archived notes" | "search" | "tags" | "settings"
  >("all notes");
  const [allNotes, setAllNotes] = useState<Note[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);

  useEffect(() => {
    setFilteredNotes(searchByInput(allNotes, searchText));
  }, [searchText]);

  useEffect(() => {
    let formattedNotes = formatNotes(loaderData);

    formattedNotes = formattedNotes.filter((note) => !note.isArchived);
    setAllNotes(formattedNotes);
    setFilteredNotes(formattedNotes);
  }, [loaderData]);

  useEffect(() => {
    setTags(getTagListWithNoRepeatedValueFromAllNotes(allNotes));
  }, [allNotes]);

  const updateSearchText = (text: string) => {
    setSearchText(text);
  };

  return (
    <NotesLayout
      notes={filteredNotes}
      tags={tags}
      updateSearchText={updateSearchText}
    />
  );
}

export const HydrateFallback = () => {
  return <>Loading...</>;
};
