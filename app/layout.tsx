import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import './globals.css'
// import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ES - Full Stack Developer",
  description: "Modern portfolio showcasing full-stack development expertise and creative solutions.",
  keywords: "full stack developer, web development, react, next.js, typescript",
  authors: [{ name: "Eslam Mokhtar" }],
  openGraph: {
    title: "ES - Full Stack Developer",
    description: "Modern portfolio showcasing full-stack development expertise and creative solutions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
