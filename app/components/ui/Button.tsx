import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  title: string;
  className: string;
  icon?: IconProp;
  onClick?: () => void;
  buttonType?: "submit" | "reset" | "button" | undefined;
  form?: string;
}

const Button = (props: Props) => {
  const handleClick = () => {
    if (props.onClick) props.onClick();
  };
  return (
    <button
      className={`sm:py-3 sm:px-4 p-2 flex gap-4 items-center rounded-xl ${props.className}`}
      onClick={handleClick}
      type={props.buttonType ? props.buttonType : "submit"}
      form={props.form && props.form}
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
