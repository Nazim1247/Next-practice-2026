import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CartProvider from "@/context/CartProvider";
import NextAuthProvider from "@/context/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Dev-story",
  description: "This is dev story",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header></Header>

        <main className="px-4 py-8">
          <CartProvider>{children}</CartProvider>
          
        </main>
        </body>
    </html>
    </NextAuthProvider>
    
  );
}
