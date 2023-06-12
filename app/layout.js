
import './globals.css'
import { roboto } from './fonts'


export default function RootLayout({ children }) {


  return (
    <html className={`h-full bg-[#010026] text-white scroll-smooth ${roboto.className}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
