import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <Box
      display="flex"
      gap={2}
      height="4rem"
      component="nav"
      justifyContent="flex-end"
      alignItems="center"
      position="fixed"
      top="0"
      left="0"
      width="1"
      overflow="hidden"
      px="2rem"
      bgcolor="white"
      zIndex="appBar"
    >
      <Link href="/">Home</Link>
      <Link href="/distinctive-framing">Distinctive Framing</Link>
      <Link href="/needlework-specialist">Needlework Specialist</Link>
      <Link href="/unique-touch">A Unique Touch</Link>
      <Link href="/quality">Quality</Link>
    </Box>
  );
}
