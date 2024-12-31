import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  //   index("routes/home.tsx", route("/notes/:noteId", "routes/note.tsx")),

  route("/notes", "routes/home.tsx", [
    route("/notes/archived", "routes/archived.tsx"),
    route("/notes/", "routes/noteList.tsx"),
    route("/notes/:noteId", "routes/note.tsx"),
    route("/notes/:noteId/deleteNote", "routes/deleteNote.tsx"),
    route("/notes/:noteId/archiveNote", "routes/archiveNote.tsx"),
  ]),
] satisfies RouteConfig;
