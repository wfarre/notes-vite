import React from "react";

interface Props {
  title: string;
  tags: string[];
  updatedDate?: string;
}

const Card = (props: Props) => {
  return (
    <article className="px-2 py-3 bg-slate-200 rounded-xl flex flex-col gap-3 text-black">
      <h3 className="text-sm font-bold">{props.title}</h3>
      <ul className="flex gap-1 flex-wrap">
        {props.tags.map((tag, index) => (
          <li
            key={`cardTag${index}`}
            className="py-1 px-2 bg-slate-300 rounded-md"
          >
            {tag}
          </li>
        ))}
      </ul>
      <p>{props.updatedDate}</p>
    </article>
  );
};

export default Card;
