import React from "react";

type Props = {
  color: "black";
  width?: number;
  onClick: () => void | Promise<void | null>;
};

const Color = {
  black: "bg-black border-black text-white dark:text-black dark:bg-white dark:border-black"
};

export const Button: React.FC<Props> = ({ children, color, width, onClick }) => {
  return (
    <button
      className={`border rounded py-[0.4rem] px-[0.6rem] flex items-center ${Color[color]} ${
        width ? `w-[${width}]` : "w-full"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
