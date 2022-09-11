import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import { Box, Typography } from "@mui/material";
import WelcomeContainer from "../components/welcome-container";

const Home: NextPage = () => {
  return (
    <Box flex={1} width={1} display="flex">
      <WelcomeContainer />
    </Box>
  );
};

export default Home;
