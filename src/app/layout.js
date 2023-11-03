
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mostofa\'s Portfolio',
  description: 'See the projects I have worked on, and learn more about me.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
    
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
          </body>
        
     

    </html>
  )
}
