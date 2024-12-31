import React from "react";
import type { Note } from "~/models/Note";
import Button from "../ui/Button";
import ListContainer from "./ListContainer";
import Card from "../ui/Card";
import { Form, Link } from "react-router";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  notesList: Note[];
  additionalClassName: string;
}

const NotesList = (props: Props) => {
  return (
    <section
      className={`sm:grid h-full grid-cols-1 overflow-auto sm:row-span-full content-start row-[2/-1] ${props.additionalClassName}`}
    >
      <Form
        method="POST"
        className="sm:pl-8 sm:pr-4 absolute bottom-5 right-2 sm:relative sm:bottom-0 sm:right-0"
      >
        <Button
          title="Create a new note"
          icon={faPlus}
          className="mt-5 mb-3 w-full bg-blue-500 sm:py-3 rounded-full sm:rounded-xl justify-center text-white"
        />
      </Form>
      <ListContainer className="sm:pl-8 sm:pr-4">
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
