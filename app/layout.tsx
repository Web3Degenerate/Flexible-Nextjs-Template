
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './globals.css'


export const metadata = {
  title: 'Flexibble',
  description: 'Patient dashboard for Rx Scripts',
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       < Navbar />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}