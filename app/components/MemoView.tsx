import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: String;
  content: String;
  tags: String[];
  date: String;
}

const MemoView = (props: Props) => {
  return (
    <section className="flex flex-col justify-between h-full">
      <header className="border-b pb-4 flex-1">
        <h3 className="text-md font-bold pb-6">
          React Performance Optimization
        </h3>
        <div className="flex gap-8 mb-4">
          <h4 className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faTag} /> Tags
          </h4>
          <ul className="flex">
            <li>Dev,</li>
            <li>React</li>
          </ul>
        </div>
        <div className="flex gap-8">
          <h4 className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faClock} /> Last edited
          </h4>
          <p>20 Oct 2024</p>
        </div>
      </header>
      <div className="py-4 overflow-auto">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          malesuada quis mi ut mattis. Curabitur auctor aliquam dui vitae
          convallis. Integer eu ex et est varius rutrum. Fusce in dictum quam.
          Vestibulum eget fringilla est. Quisque eu nulla vel turpis rutrum
          semper. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Suspendisse turpis nisl, dignissim eu
          nulla sed, pretium suscipit dui. In enim magna, tristique laoreet
          vehicula sodales, maximus nec enim. Nunc tincidunt malesuada augue, ac
          imperdiet eros tempus eget. Praesent vestibulum, arcu in varius
          finibus, neque urna lacinia justo, et sollicitudin leo diam a dui.
        </p>
        <p>
          Aliquam dolor dui, malesuada sed placerat sed, mattis ac enim.
          Praesent vel quam et ipsum rutrum hendrerit pretium eu diam. Nunc sed
          turpis hendrerit, interdum nibh sit amet, tristique ligula.
          Suspendisse sit amet urna est. Morbi tortor nunc, viverra et erat ac,
          varius euismod justo. Morbi quis lacus at felis molestie sollicitudin.
          Ut nec fringilla sapien. Morbi tristique commodo egestas. Nunc non
          arcu sed leo efficitur bibendum. Mauris non nunc at mauris tempor
          bibendum in et velit. Praesent porta non nibh eget vehicula. Aliquam
          quis vestibulum turpis.
        </p>
        <p>
          Aliquam dolor dui, malesuada sed placerat sed, mattis ac enim.
          Praesent vel quam et ipsum rutrum hendrerit pretium eu diam. Nunc sed
          turpis hendrerit, interdum nibh sit amet, tristique ligula.
          Suspendisse sit amet urna est. Morbi tortor nunc, viverra et erat ac,
          varius euismod justo. Morbi quis lacus at felis molestie sollicitudin.
          Ut nec fringilla sapien. Morbi tristique commodo egestas. Nunc non
          arcu sed leo efficitur bibendum. Mauris non nunc at mauris tempor
          bibendum in et velit. Praesent porta non nibh eget vehicula. Aliquam
          quis vestibulum turpis.
        </p>
      </div>
      <footer className="border-t py-4 flex gap-4 flex-1 items-start ">
        <Button className={"bg-blue-700 text-white"} title="Save Note" />
        <Button className={"bg-slate-200 text-slate-700"} title="Cancel" />
      </footer>
    </section>
  );
};

export default MemoView;
