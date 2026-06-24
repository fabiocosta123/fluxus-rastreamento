import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Fluxus Rastreamento | Segurança em Tempo Real",
  description: "Proteção e monitoramento em tempo real para seu veículo ou frota.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Fluxus Rastreamento",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0f172a" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className="bg-slate-900 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}