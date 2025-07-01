import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Laxce - The Future of DeFi",
  description: "Secure multi-chain wallet with built-in DEX, cross-chain bridge, and zero trading fees. Your gateway to the decentralized future.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 