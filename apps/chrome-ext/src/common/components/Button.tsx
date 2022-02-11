import React from "react";

type Props = {
  children: React.ReactNode;
  color: "black";
  width?: number;
  onClick: () => void | Promise<void | null>;
};

const Color = {
  black:
    "bg-black border-black text-white dark:text-black dark:bg-white dark:border-white",
};

export function Button({ children, color, width }: Props) {
  return (
    <button
      className={`border-1 rounded py-[0.4rem] px-[0.6rem] flex items-center ${
        Color[color]
      } ${width ? `w-[${width}]` : "w-full"}`}
    >
      {children}
    </button>
  );
}
