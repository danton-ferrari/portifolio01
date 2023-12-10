import './globals.scss'
import { Poppins } from 'next/font/google' 

const inter = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600'] 
})

export const metadata = {
  title: 'Danton Ferrari',
  description: 'Danton Ferrari é estudante de análise e desenvolvimento de sistemas e de mecatrônica...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}