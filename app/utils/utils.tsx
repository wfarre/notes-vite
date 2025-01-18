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
    (note) => new NoteFactory(note, "apiV1") as Note,
  );
  formattedNotes = orderArrayByDate(formattedNotes);
  return formattedNotes;
};

/**
 *
 * @param date: string format
 * @returns "29 Dec 2024" format
 */
export const formatDate = (date: string): string =>
  new Date(date).toDateString().slice(3);

export const getTagListWithNoRepeatedValueFromAllNotes = (
  notes: Note[],
): string[] => {
  let tagsHashArray: any = {};
  let tagsArray: string[] = [];
  notes.map((note) => {
    note.tags.map((tag, index) => {
      if (!tagsHashArray[tag.trim().toLocaleLowerCase()]) {
        tagsHashArray = {
          ...tagsHashArray,
          [tag.trim().toLocaleLowerCase()]: tag,
        };
        tagsArray.push(tag);
      }
    });
  });
  return tagsArray;
};

export const searchByInput = (
  originalArray: Note[],
  searchText: string,
): Note[] => {
  if (searchText === "") return originalArray;
  else
    return originalArray.filter(
      (note) =>
        note.title.toLowerCase().includes(searchText.toLowerCase()) ||
        note.content.toLowerCase().includes(searchText.toLowerCase()),
    );
};
