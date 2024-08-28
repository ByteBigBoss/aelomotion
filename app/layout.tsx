import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area"
import Menubar from "@/components/menubar";
import { rajdhani } from "@/lib/fonts";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aelomotion",
  description: "Try out animations with framer-motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='system'
          themes={[
            'light',
            'dark',
            'instagram',
            'facebook',
            'discord',
            'netflix',
            'twilight',
            'reddit'
          ]}
        >
          <aside className="w-[300px] sidebar  fixed top-0 left-0 min-h-screen bg-blue-600 box-border  text-white ">
            <ScrollArea className="h-[100vh] w-full py-4">
              <Sidebar />
            </ScrollArea>
          </aside>

          <main className="flex-1 min-h-screen main-con ">
            <div className="menubar px-4 py-6">
              <Link href={'/'} className={`${rajdhani.className} font-bold text-[32px] `}>Aelomotion</Link>
              <Menubar />
            </div>
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
