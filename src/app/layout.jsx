import './globals.css'; // global CSS
import Navbar from '@/components/common/navbar/navbar';
import Footer from '@/components/common/footer/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Navbar />

        {/* Page content */}
        <main>{children}</main> 

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
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