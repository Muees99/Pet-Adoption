import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GotoTop from "@/components/Ui/GotoTop";
import StateContextProvider from "@/context/StateContext";

const inter = Inter({ subsets: ["latin"] });

export interface LayoutProps {
  children: React.ReactNode;
  types: React.ReactNode; // Add more properties as needed
}

export const metadata: Metadata = {
  title: " Dog Adoption",
  description: "Adopt, don't Shop",
};

export default function RootLayout({ children, types }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateContextProvider>
          {children}
          <GotoTop />
        </StateContextProvider>
      </body>
    </html>
  );
}
