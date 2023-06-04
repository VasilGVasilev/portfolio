import './globals.css'

export const metadata = {
  title: 'Vasil Vasilev\'s portfolio website',
  description: 'Portfolio website of Vasil Vasilev',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-white' lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
