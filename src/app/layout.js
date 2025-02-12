
import "./globals.css";
import Head from "next/head";
import { LanguagesProvider } from "../../context/Languages";

export const metadata = {
  title: "Portfolio de Ignacio Pelayo",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <> 
      <LanguagesProvider>
        <html>
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <body>
            {children}
          </body>
        </html>
      </LanguagesProvider>
    </>
  );
}
