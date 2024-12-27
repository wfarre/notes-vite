import { Note, type NoteApi } from "~/models/Note";

export class NoteFactory {
  constructor(data: NoteApi, type: String) {
    if (type === "apiV1") {
      return new Note(data);
    }
  }
}
