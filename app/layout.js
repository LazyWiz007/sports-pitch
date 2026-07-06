import "./globals.css";

export const metadata = {
  title: "Webrook × Cycling Federation of India — Tech + Media Proposal",
  description:
    "One partner for technology and media across every CFI-sanctioned event. Proven at Tour of Nilgiris, the Asian MTB Championship and BBCH.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
