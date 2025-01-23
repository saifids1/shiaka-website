import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Header } from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function App({ Component, pageProps }) {
  return <ThemeProvider>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </ThemeProvider>;
}
