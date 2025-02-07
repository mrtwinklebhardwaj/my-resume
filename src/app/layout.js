import { Montserrat } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Twinkle Bhardwaj | Software Engineer & Developer",
  description: "A passionate software engineer specializing in building scalable web applications and SaaS products. Explore my projects, skills, and experience.",
  keywords: "Twinkle Bhardwaj, software engineer, web developer, React, Next.js, SaaS, portfolio",
  author: "Twinkle Bhardwaj",
  openGraph: {
    title: "Twinkle Bhardwaj | Software Engineer",
    description: "Explore my portfolio featuring my projects, skills, and experience in software development.",
    url: "https://www.codeaurkahani.com", 
    siteName: "Twinkle Bhardwaj Portfolio",
    images: [
      {
        url: "https://www.codeaurkahani.com/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Twinkle Bhardwaj Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twinkle Bhardwaj | Software Engineer",
    description: "Discover my projects, skills, and experience in web development.",
    images: ["https://www.codeaurkahani.com/twinkle.jpg"], 
  },
};


export default function RootLayout({ children }) {
 

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
