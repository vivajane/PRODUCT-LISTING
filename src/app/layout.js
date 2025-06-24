import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import { Open_Sans } from "next/font/google";

const openSans= Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} `}
        
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
