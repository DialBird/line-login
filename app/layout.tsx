import './globals.css'
import { Inter } from 'next/font/google'
import Provider from "@/components/Provider";
import AppBar from "@/components/AppBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <AppBar />
          {children}
        </body>
      </Provider>
    </html>
  );
}
