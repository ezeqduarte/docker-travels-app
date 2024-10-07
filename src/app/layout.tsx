import "@/assets/globals.css";
import { Header, Navbar } from "../lib/components";
import { DM_Sans } from 'next/font/google'

const DM_SUNS = DM_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-suns',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${DM_SUNS.className} antialiased`}
      >
        <main className="flex flex-col w-full h-screen">
          <Header />
          <section className="h-screen rounded bg-primaryWhite">
            {children}
          </section>
          <Navbar />
        </main>
      </body>
    </html>
  );
}
