import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"

import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { AppWrapper } from "@/components/app-wrapper"
import "./globals.css"

export const metadata: Metadata = {
  title: "EduPay Africa",
  description:
    "EduPay Africa - Web3 education platform for Africa helping schools, students, and educators manage fees, jobs, payroll, supplies, and scholarships without banks using Pi cryptocurrency",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>

        {/* ✅ Pi SDK (IKI NICYO CY’INGENZI) */}
        <Script
          src="https://sdk.minepi.com/pi-sdk.js"
          strategy="beforeInteractive"
        />
      </head>

      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
