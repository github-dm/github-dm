import React from "react";
import { Box } from "@primer/react";

const Page: React.FC = ({ children }) => {
  return (
    <Box className={"h-full w-full"} as={"main"} flex={1}>
      {children}
    </Box>
  );
};

export default Page;
