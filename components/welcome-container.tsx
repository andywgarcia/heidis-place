import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function WelcomeContainer() {
  return (
    <Box
      id="welcome-container"
      flex={1}
      width={1}
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box position="absolute" top="0" left="0" width={1} height={1} zIndex="0">
        <Image
          alt="Heidi's Place"
          layout="fill"
          objectFit="contain"
          src="/primary-background.gif"
        ></Image>
      </Box>
      <Box zIndex="1" display="grid" gap={2}>
        <Typography
          variant="h2"
          component="h1"
          color="white"
          sx={{ textShadow: "4px 4px 3px rgba(255,255,255,0.8)" }}
        >
          Heidi s Place
        </Typography>
      </Box>
    </Box>
  );
}
