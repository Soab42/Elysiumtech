import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MainNav } from "@/components/MainNav";
import { UserNav } from "@/components/UseNav";
import { ModeToggle } from "@/components/MoodToggle";
import "./globals.css";
import { ToastProvider } from "@/components/toast/ToastContext";
import { Vegan } from "lucide-react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Property Management",
  description: "Property Management Dashboard for Real Estate",
};
function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <div className="flex min-h-screen flex-col md:mx-auto container ">
              <header className="border-b border-gray-900/20 dark:border-gray-50/20 shadow-black/20 fixed top-0 container backdrop-blur-sm z-50">
                <div className="flex h-16 items-center justify-between px-4">
                  <div className="mr-4 flex flex-shrink-0">
                    <Link href="/" className="flex items-center space-x-2">
                      <Vegan className="h-12 w-12 text-green-300" />
                      <span className="uppercase font-bold text-green-400 text-xl hidden lg:block">
                        Property Management
                      </span>
                    </Link>
                  </div>
                  <MainNav className="mx-6" />
                  <div className="ml-auto flex items-center space-x-4">
                    <ModeToggle />
                    <UserNav />
                  </div>
                </div>
              </header>
              <main className="flex-1 mt-10">{children}</main>
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
