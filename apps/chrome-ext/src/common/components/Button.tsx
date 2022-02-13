import React from "react";

type Props = {
  children: React.ReactNode;
  color: "black";
  width?: number;
  onClick: () => void | Promise<void | null>;
};

const Color = {
  black:
    "bg-black border-black text-white dark:text-black dark:bg-white dark:border-black",
};

export function Button({ children, color, width, onClick }: Props) {
  return (
    <button
      className={`border rounded py-[0.4rem] px-[0.6rem] flex items-center ${
        Color[color]
      } ${width ? `w-[${width}]` : "w-full"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
