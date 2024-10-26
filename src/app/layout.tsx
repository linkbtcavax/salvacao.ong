/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "ONG Salvação - Um projeto social sem fins lucrativos.",
  description: "Um projeto social sem fins lucrativos.",
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
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '889709332716230');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1"  style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=889709332716230&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`${poppins.variable} antialiased bg-white`}>
        <div className='bg-[#24CA68] w-full h-9 flex justify-center items-center'>
          <p className="text-white font-bold text-lg">Sua doação pode salvar vidas</p>
        </div>
        <Header />
        <div className="lg:max-w-5xl mx-auto sm:w-full flex justify-center items-center mb-20 px-2">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
