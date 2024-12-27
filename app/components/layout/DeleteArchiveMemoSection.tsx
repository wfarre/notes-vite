import React from "react";
import Button from "../ui/Button";
import { faBoxArchive, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { deleteNote } from "~/utils/utils";

interface Props {
  currentNoteId?: string;
  fetchData: (path: string) => void;
}

const DeleteArchiveMemoSection = (props: Props) => {
  return (
    <section className="pr-8 pl-4  row-[2/-1]">
      <ul className="flex gap-4 flex-col mt-5">
        <li>
          <Button
            title={"Archive Note"}
            icon={faBoxArchive}
            className={"border border-solid border-gray-200 w-full"}
          />
        </li>
        <li>
          <Button
            title={"Delete Note"}
            icon={faTrashCan}
            className={"border border-solid border-gray-200 w-full"}
            onClick={() => {
              props.currentNoteId &&
                deleteNote(props.currentNoteId, props.fetchData);
            }}
          />
        </li>
      </ul>
    </section>
  );
};

export default DeleteArchiveMemoSection;
