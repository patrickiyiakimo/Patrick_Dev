// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Contact from "@/components/Contact";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: 'Patrick - Full Stack Developer',
//   description: 'Full Stack Developer specializing in scalable solutions and exceptional user experiences',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         <Navbar />
//         {children}
//         <Contact />
//       </body>
//     </html>
//   );
// }







import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Patrick - Full Stack Developer',
  description: 'Full Stack Developer specializing in scalable solutions and exceptional user experiences',
  icons: {
    icon: "/favicon.ico",
    apple: "/images/IMG_E3124.JPG",
  },
  metadataBase: new URL("https://patrick-dev-pied.vercel.app/"),
  openGraph: {
    title: "OXORA - Global Investments Platform",
    description: "Trade smarter and invest globally with OXORA Broker.",
    url: "https://patrick-dev-pied.vercel.app/",
    siteName: "OXORA",
    images: [
      {
        url: "/images/IMG_E3124.JPG",
        width: 512,
        height: 512,
        alt: "Patrick's Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Google (shows your logo instead of the globe) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://patrick-dev-pied.vercel.app/",
              logo: "https://patrick-dev-pied.vercel.app/images/IMG_E3124.JPG",
              name: "Patrick Iyiakimo",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  );
}