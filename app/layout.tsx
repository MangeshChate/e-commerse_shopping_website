import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/home/Nav";
import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "@/StoreProvider/StoreProvider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebDev Shop",
  description: "Webdev warrior shop using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            <Nav />
            {children}
            <Footer/>
            <Toaster/>
          </body>
        </html>

      </ClerkProvider>

    </StoreProvider>


  );
}
