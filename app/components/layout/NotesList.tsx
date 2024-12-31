import React from "react";
import type { Note } from "~/models/Note";
import Button from "../ui/Button";
import ListContainer from "./ListContainer";
import Card from "../ui/Card";
import { Form, Link } from "react-router";

interface Props {
  notesList: Note[];
  additionalClassName: string;
}

const NotesList = (props: Props) => {
  return (
    <section
      className={`sm:grid h-full grid-cols-1 overflow-auto sm:row-span-full content-start row-[2/-1] ${props.additionalClassName}`}
    >
      <Form method="POST" className="pl-8 pr-4">
        <Button
          title="+ Create a new note"
          className="mt-5 mb-3 w-full bg-blue-500 py-3 rounded-xl justify-center text-white"
        />
      </Form>
      <ListContainer className="pl-8 pr-4">
        {props.notesList.map((memo, index) => {
          return (
            <li key={`memo${index}`}>
              <Link to={`/notes/${memo.id}`}>
                <Card
                  title={memo.title}
                  tags={memo.tags}
                  updatedDate={memo.date}
                />
              </Link>
            </li>
          );
        })}
      </ListContainer>
    </section>
  );
};

export default NotesList;
