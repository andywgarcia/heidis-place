import Head from "next/head";
import Image from "next/image";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";

import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Nav from "../components/nav";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Heidi&apos;s Place Custom Picture Framing</title>
        <meta
          name="description"
          content="Heidi's Place Custom Picture Framing"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Nav />
        <div className={styles.container}>
          <Box component="main" className={styles.main}>
            <Component {...pageProps} />
          </Box>
          <footer className={styles.footer}>
            <Box width={1} display="flex" gap={1} justifyContent="center">
              <Typography component="span">Heidi&apos;s Place©2022</Typography>
              <Typography component="span">•</Typography>
              <Typography component="span">
                <Link href="mailto:heidisplace@frontier.com">
                  heidisplace@frontier.com
                </Link>
              </Typography>
              <Typography component="span">•</Typography>
              <Typography component="span">
                <Link href="tel:+14254892569">(425) 489-2569</Link>
              </Typography>
              <Typography component="span">•</Typography>
              <Typography component="span">Bothell, WA 98012</Typography>
            </Box>
          </footer>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
