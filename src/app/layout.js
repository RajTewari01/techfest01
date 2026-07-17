import { Public_Sans } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import PageTransition from "@/components/PageTransition";

const publicSans = Public_Sans({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: "Techfest Platform - Neo Brutalism",
  description: "A comprehensive Techfest platform built with Next.js and Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${publicSans.className}`}>
        <div className="app-container">
          <SidebarLeft />
          <TopNav />
          <SidebarRight />
          <main className="main-content">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
