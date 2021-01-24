import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { GlobalStyle } from "../components/GlobalStyle";
import { IngredientsProvider } from "../contexts/ingredients";
import { Layout } from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <IngredientsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </IngredientsProvider>
      </ThemeProvider>
    </>
  );
}
