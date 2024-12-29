import React from "react";
import Button from "../ui/Button";
import {
  faBoxArchive,
  faChevronCircleLeft,
  faChevronLeft,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { deleteNote } from "~/utils/utils";
import { Form, Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  currentNoteId?: string;
  // fetchData: (path: string) => void;
}

const EditMemoButtons = (props: Props) => {
  return (
    <section className="pr-8 pl-4  sm:row-[2/-1] col-span-full sm:col-auto">
      <ul className="flex gap-4 sm:flex-col mt-5 items-center justify-end">
        <li className="mr-auto">
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
        </li>
        <li>
          <Button
            title={"Archive Note"}
            icon={faBoxArchive}
            className={"sm:border sm:border-solid border-gray-200 w-full"}
          />
        </li>
        <li>
          <Form
            action="deleteNote"
            method="delete"
            onSubmit={() => console.log("hello")}
          >
            <Button
              title={"Delete Note"}
              icon={faTrashCan}
              className={"sm:border sm:border-solid border-gray-200 w-full"}
              // onClick={() => {
              //   props.currentNoteId &&
              //     deleteNote(props.currentNoteId, props.fetchData);
              // }}
            />
          </Form>
        </li>
        <li>
          <Button title="Save Note" className="text-blue-500"></Button>
        </li>
        <li>
          <Button title="Cancel" className="text-slate-500"></Button>
        </li>
      </ul>
    </section>
  );
};

export default EditMemoButtons;
