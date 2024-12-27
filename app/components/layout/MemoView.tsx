import React, { useEffect, useState, type ChangeEvent } from "react";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";
// import  { Note, NoteApi } from "~/models/Note";
import { updateMemo } from "~/utils/utils";

interface Props {
  title: string;
  content: string;
  tags: string[];
  date?: string;
  id?: string;
  fetchData: (path: string) => void;
}

const currentUrl = "http://localhost:3000";

const MemoView = (props: Props) => {
  const [memo, setMemo] = useState<{
    id: string;
    title: string;
    content: string;
    tags: string[];
  }>({
    id: "",
    title: "",
    content: "",
    tags: [],
  });

  const [editTags, setEditTags] = useState(false);
  useEffect(() => {
    setMemo({
      id: props.id ? props.id : "",
      title: props.title ? props.title : "",
      content: props.content ? props.content : "",
      tags: props.tags ? props.tags : [],
    });
  }, [props]);

  const handleAddTag = (e: ChangeEvent<HTMLInputElement>) => {
    const tags = e.target?.value;
    const tagsList = tags.split(" ");
    setMemo({ ...memo, tags: tagsList });
  };

  return (
    <form
      action="/notes"
      className="flex flex-col justify-between h-full"
      onSubmit={(e) => {
        e.preventDefault();
        updateMemo(memo, props.fetchData);
      }}
    >
      <header className="border-b pb-4 flex-1">
        <input
          className="text-md font-bold mb-6 w-full"
          type="text"
          name="title"
          id="title"
          placeholder="New title"
          value={memo.title}
          onChange={(e) => setMemo({ ...memo, title: e.target.value })}
        />
        <div className="flex gap-8 mb-4">
          <h4 className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faTag} /> Tags
          </h4>
          <ul className="flex w-full" onClick={() => setEditTags(true)}>
            {!editTags && memo.tags?.length > 0 ? (
              memo.tags?.map((tag, index) => {
                return (
                  <li key={`tag${index}`}>
                    {tag}
                    {index === memo.tags.length - 1 ? "" : ","}
                  </li>
                );
              })
            ) : (
              <li className="w-full">
                <input
                  type="text"
                  value={memo.tags.join(" ")}
                  onChange={(e) => handleAddTag(e)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      setEditTags(false);
                    }
                  }}
                  onBlur={() => setEditTags(false)}
                  placeholder="Enter tags seprated by a space"
                  className="w-full "
                />
              </li>
            )}
          </ul>
        </div>
        <div className="flex gap-8">
          <h4 className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faClock} /> Last edited
          </h4>
          <p>{props.date}</p>
        </div>
      </header>
      <textarea
        name="content"
        id="content"
        className="py-4 overflow-auto h-full resize-none"
        value={memo.content}
        onChange={(e) => setMemo({ ...memo, content: e.target.value })}
        placeholder="Write you memo here..."
      />
      <footer className="border-t py-4 flex gap-4 flex-1 items-start ">
        <Button className={"bg-blue-700 text-white"} title="Save Note" />
        <Button className={"bg-slate-200 text-slate-700"} title="Cancel" />
      </footer>
    </form>
  );
};

export default MemoView;
