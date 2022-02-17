import React, { ReactNode } from "react";
import { Box } from "@primer/react";

type Props = {
  children: ReactNode;
  className?: string;
  [x: string]: any;
};
export const Page: React.FC<Props> = ({ children, className, ...rest }: Props) => {
  return (
    <Box
      sx={{
        padding: 2,
        bg: "canvas.default",
        height: "100%",
        boxSizing: "border-box"
      }}
      {...rest}
      className={className}
    >
      {children}
    </Box>
  );
};
