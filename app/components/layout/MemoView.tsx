import React, { useEffect, useState, type ChangeEvent } from "react";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-router";
import { formatDate } from "~/utils/utils";

interface Props {
  title?: string;
  content?: string;
  tags?: string[];
  date?: string;
  id?: string;
}



const MemoView = (props: Props) => {
  const [memo, setMemo] = useState<{
    id: string;
    title: string;
    content: string;
    tags: string[];
    date: string
  }>({
    id: "",
    title: "",
    content: "",
    tags: [],
    date: ""
  });
  

  // if(props.date) setMemo({...memo, date: new Date(props.date).toDateString()}
  // formatDate(props.date)




  const [editTags, setEditTags] = useState(false);
  useEffect(() => {
    setMemo({
      id: props.id ? props.id : "",
      title: props.title ? props.title : "",
      content: props.content ? props.content : "",
      tags: props.tags ? props.tags : [],
      date: props.date ? formatDate(props.date) : ""
    });
  }, [props]);


  const handleAddTag = (e: ChangeEvent<HTMLInputElement>) => {
    const tags = e.target?.value;
    const tagsList = tags.split(" ");
    setMemo({ ...memo, tags: tagsList });
  };

  return (
    <Form
      method="patch"
      className="flex flex-col justify-between h-full py-4"
      id={"note-form"}
    >
      <input
        type="text"
        hidden
        id="memoFormData"
        name="memoFormData"
        readOnly
        value={JSON.stringify(memo)}
      />
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
          <p>{memo.date}</p>
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
      <footer className="border-t py-4 sm:flex gap-4 flex-1 items-start hidden">
        <Button className={"bg-blue-700 text-white"} title="Save Note" />
        <Button
          className={"bg-slate-200 text-slate-700"}
          title="Cancel"
          buttonType="button"
        />
      </footer>
    </Form>
  );
};

export default MemoView;
