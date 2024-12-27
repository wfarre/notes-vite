import React, { type PropsWithChildren } from "react";
interface Props {
  className?: String;
}

const ListContainer = (props: PropsWithChildren<Props>) => {
  return (
    <div className="overflow-auto">
      <ul className={`flex flex-col gap-5 h-full ${props.className}`}>
        {props.children}
      </ul>
    </div>
  );
};

export default ListContainer;
