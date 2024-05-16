import Header from '@/components/header/'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Christopher Perez | Personal Portfolio',
  description: 'Christopher is a Harvard student studying Statistics and CS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'${inter.className}bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36'}>
        <div className="bg-[#b7f0d1] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"> </div>

        <div className="bg-[#b3e0ff] absolute top-[-1rem] -z-10 left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"> </div>

        <Header />

        {children}
        </body>
    </html>
  )
}
