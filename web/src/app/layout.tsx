import React from "react";
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'I was gonna say that - English Phrase Manager',
  description: 'Manage and learn common English phrases for various everyday situations.',
};

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
