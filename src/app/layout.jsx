'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import './globals.css'
import Navbar from '@/components/common/navbar/navbar'
import Footer from '@/components/common/footer/footer'

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
// // -------------------------------------------------------------------------------
// import './globals.css';
// import Navbar from '@/components/common/navbar/navbar';
// import Footer from '@/components/common/footer/footer';
// import { LanguageProvider } from '@/components/context/languagecontext';

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <LanguageProvider>

//           {/* Header */}
//           <Navbar />

//           {/* Page content */}
//           <main>{children}</main>

//           {/* Footer */}
//           <Footer />

//         </LanguageProvider>
//       </body>
//     </html>
//   );
// }
