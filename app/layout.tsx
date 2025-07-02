import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Provider";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'developer-portfolio',
  description: "this my developer-portfolio code",
  icons: {
    icon: 'myIcon.ico'
  },
  openGraph: {
    title: 'developer-portfolio',
    description: "this my developer-portfolio code",
    url: 'https://mostafa-falcon.vercel.app', // ضع دومين موقعك هنا
    siteName: 'developer-portfolio',
    images: [
      {
        url: 'https://mostafa-falcon.vercel.app/thumbnail.png', // المسار النسبي للصورة
        width: 1200,
        height: 630,
        alt: 'developer-portfolio',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
