import React from "react";
import Button from "../ui/Button";
import {
  faBoxArchive,
  faChevronLeft,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { Form, Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  currentNoteId?: string;
}

const buttonList = [
  {
    title: "previous page",
    icon: faChevronLeft,
    displayOnDesktop: false,
  },
  {
    title: "Archived Note",
    icon: faBoxArchive,
    displayOnDesktop: false,
  },
  {
    title: "Delete Note",
    icon: faTrashCan,
    displayOnDesktop: false,
  },
  {
    title: "Save Note",
    icon: faChevronLeft,
    displayOnDesktop: false,
  },
  {
    title: "Cancel",
    icon: faChevronLeft,
    displayOnDesktop: false,
  },
];

const EditMemoButtons = (props: Props) => {
  return (
    <section className="sm:pr-8 sm:pl-4  sm:row-[2/-1] col-span-full sm:col-auto py-3 border-b-[1px] sm:border-b-0">
      <ul className="flex gap-4 sm:flex-col sm:mt-5 items-center justify-end sm:items-stretch">
        <li className="mr-auto  sm:hidden">
          <Link to="/notes" className="flex gap-2 items-center w-fit">
            <FontAwesomeIcon icon={faChevronLeft} />
            <p className="text-xs w-max">Go Back</p>
          </Link>
        </li>
        <li>
          <Form action="archiveNote" method="patch">
          <Button
            title={"Archive Note"}
            icon={faBoxArchive}
            className={"sm:border sm:border-solid border-gray-200 w-full"}
          />
          </Form>
        </li>
        <li>
          <Form action="deleteNote" method="delete">
            <Button
              title={"Delete Note"}
              icon={faTrashCan}
              className={"sm:border sm:border-solid border-gray-200 w-full"}
            />
          </Form>
        </li>
        <li className="sm:hidden">
          <Button
            title="Save Note"
            className="text-blue-500 text-xs w-max"
            form="note-form"
          ></Button>
        </li>
        <li className="sm:hidden">
          <Button title="Cancel" className="text-slate-500 text-xs"></Button>
        </li>
      </ul>
    </section>
  );
};

export default EditMemoButtons;
