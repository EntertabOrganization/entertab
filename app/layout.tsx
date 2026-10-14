import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageLoader from "./components/PageLoader/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EnterTab - Digital Solutions",
  description:
    "EnterTab is a full-service digital partner, delivering innovative digital solutions for a smarter future. Web development, mobile apps, UI/UX, branding, and digital marketing.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } window.scrollTo(0, 0);`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"@id\":\"https://www.entertab.net/#organization\",\"name\":\"EnterTab\",\"legalName\":\"EnterTab LLC\",\"url\":\"https://www.entertab.net/\",\"email\":\"info@entertab.net\",\"telephone\":\"+1-202-770-0575\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"1775 Tysons Blvd\",\"addressLocality\":\"McLean\",\"addressRegion\":\"VA\",\"postalCode\":\"22102\",\"addressCountry\":\"US\"},\"sameAs\":[\"https://x.com/entertabnet\",\"https://www.linkedin.com/company/entertab-llc/\",\"https://www.instagram.com/entertab/\"]}" }} />
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
