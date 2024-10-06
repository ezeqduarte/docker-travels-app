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
        <main className="flex gap-2 flex-col w-full h-screen">
          <Header />
          <div className="flex flex-col-reverse grow gap-2">
            <Navbar />
            <section className="grow rounded p-3 bg-primaryWhite">
              {children}
            </section>
          </div>
        </main>
      </body>
    </html>
  );
}
