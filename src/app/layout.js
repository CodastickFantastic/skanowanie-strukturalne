import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "@/sass/globals.scss";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import { Open_Sans } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Skanowanie Strukturalne",
  description: "TODO: ADD SEO DESCRIPTION", // TODO: ADD SEO DESCRIPTION
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${nunito.variable} ${openSans.variable}`}>
        <div className="background-video">
          <video autoPlay loop muted playsInline>
            <source src="/video/background_video.webm" type="video/webm" />
          </video>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
