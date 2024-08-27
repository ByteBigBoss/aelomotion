import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animation Demo App",
  description: "Test Animations",
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
          <aside className="w-[300px] sm:hidden md:flex  fixed top-0 left-0 min-h-screen bg-blue-600 box-border py-4 text-white">
            <Sidebar />
          </aside>
          <main className="flex-1 min-h-screen md:pl-[300px] sm:pl-0">
            {children}
            <Footer/>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
