import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatForAll",
  description:
    "A simple realtime chat applcation without authentication created using Next.js and Firebase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
