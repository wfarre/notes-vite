import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  title: string;
  className: string;
  icon?: IconProp;
}

const Button = (props: Props) => {
  return (
    <button
      className={`py-3 px-4 flex gap-4 items-center rounded-xl ${props.className}`}
    >
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      {props.title}
    </button>
  );
};

export default Button;
