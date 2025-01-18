import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/notes/archived/", "routes/archived.tsx", [
    // route("/notes/archived", "routes/noteList.tsx"),
    route("/notes/archived/:noteId", "routes/archivedNote.tsx"),
    // route("/notes/archived/:noteId/deleteNote", "routes/deleteNote.tsx"),
    // route("/notes/archived/:noteId/archiveNote", "routes/archiveNote.tsx"),
  ]),
  route("/notes", "routes/home.tsx", [
    route("/notes/", "routes/noteList.tsx"),
    route("/notes/:noteId", "routes/note.tsx"),
    route("/notes/:noteId/deleteNote", "routes/deleteNote.tsx"),
    route("/notes/:noteId/archiveNote", "routes/archiveNote.tsx"),
  ]),
] satisfies RouteConfig;
