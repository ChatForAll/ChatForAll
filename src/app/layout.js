import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatForAll",
  description:
    "A simple realtime chat applcation without authentication created using Next.js and Firebase",
  generator: "Next.js",
  manifest: "/manifest.json",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Sameemul Haque" },
    {
      name: "Sameemul Haque",
      url: "https://sameemul-haque.github.io/",
    },
  ],
  viewport:
  "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
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
