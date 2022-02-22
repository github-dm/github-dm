import React from "react";
import { Box, BoxProps } from "@primer/react";

export const Page: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      sx={{
        padding: 2,
        bg: "canvas.default",
        height: "100%",
        boxSizing: "border-box"
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
