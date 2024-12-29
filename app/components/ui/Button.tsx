import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  title: string;
  className: string;
  icon?: IconProp;
  onClick?: () => void;
}

const Button = (props: Props) => {
  const handleClick = () => {
    if (props.onClick) props.onClick();
  };
  return (
    <button
      className={`py-3 px-4 flex gap-4 items-center rounded-xl ${props.className}`}
      onClick={handleClick}
    >
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      <p
        className={`${
          props.icon
            ? "absolute text-opacity-0 left-0 top-0 scale-0 sm:inline sm:relative sm:scale-100"
            : ""
        }`}
      >
        {props.title}
      </p>
    </button>
  );
};

export default Button;
