import React from "react";
import type { Note } from "~/models/Note";
import Button from "../ui/Button";
import ListContainer from "./ListContainer";
import Card from "../ui/Card";

interface Props {
  notesList: Note[];
  createEmptyNote: () => void;
  setCurrentNote: (index: number) => void;
}

const NotesList = (props: Props) => {
  return (
    <section className="grid h-full grid-cols-1 overflow-auto row-span-full content-start ">
      <div className="pl-8 pr-4">
        <Button
          title="+ Create a new note"
          className="mt-5 mb-3 w-full bg-blue-500 py-3 rounded-xl justify-center text-white"
          onClick={() => {
            props.createEmptyNote();
          }}
        />
      </div>
      <ListContainer className="pl-8 pr-4">
        {props.notesList.map((memo, index) => {
          return (
            <li
              key={`memo${index}`}
              onClick={() => {
                props.setCurrentNote(index);
              }}
            >
              <Card
                title={memo.title}
                tags={memo.tags}
                updatedDate={memo.date}
              />
            </li>
          );
        })}
      </ListContainer>
    </section>
  );
};

export default NotesList;
