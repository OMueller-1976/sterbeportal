import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sterbeportal.de – Ratgeber rund um Vorsorge & Bestattung",
    template: "%s | Sterbeportal.de",
  },
  description:
    "Informationen zu Bestattungsvorsorge, Sterbegeld, Trauerbegleitung und mehr. Umfassender Ratgeber für den Ernstfall.",
  metadataBase: new URL("https://www.sterbeportal.de"),
  openGraph: {
    siteName: "sterbeportal.de",
    locale: "de_DE",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Sterbeportal.de — Vorsorge, Bestattung & Abschied gut geregelt",
      },
    ],
  },
  verification: {
    google: "rpOXGnd-yQCr6QXSKV2yxNxAX6PK7eE1tcJbZ98POfo",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "sterbeportal.de",
  url: "https://www.sterbeportal.de",
  description:
    "Ratgeber-Portal rund um Bestattungsvorsorge, Sterbegeld und Nachlassplanung",
  sameAs: ["https://eritaj.de"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.className}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PQQX4DVT');`,
          }}
        />
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-ink">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQQX4DVT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
