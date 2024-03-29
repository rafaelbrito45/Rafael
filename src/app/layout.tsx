import "../styles/global.css";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { Explorer } from "@/components/Explorer";
import { Footer } from "@/components/Footer";
import { OpenFilesTabs } from "@/components/OpenFilesTabs";
import { OpenFilesProvider } from "@/hooks/useOpenFiles";

export const metadata = {
  title: {
    default: "Rafael Brito",
    template: "%s | Rafael Brito",
  },
  robots: {
    index: true,
    follow: true,
  },
  description: "Rafael's resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-[#7F7FD5] bg-app">
        <div className="z-10 relative h-screen lg:p-20 sm:py-5 flex items-center justify-center">
          <div className="bg-[#232135] overflow-hidden  overflow-y-auto lg:overflow-hidden border border-[#72707D] w-full max-w-[1480px] aspect-video shadow-md shadow-black/20 rounded-lg grid grid-rows-layout h-full">
            <OpenFilesProvider>
              <Header />

              <div className="grid lg:grid-cols-editor sm:grid-rows-editor max-h-full overflow-auto">
                <Menu />
                <Explorer />

                <div className="h-full relative flex flex-col overflow-auto">
                  <OpenFilesTabs />
                  <div className="h-full relative ">{children}</div>
                </div>
              </div>
            </OpenFilesProvider>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
