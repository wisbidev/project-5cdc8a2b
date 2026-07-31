import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Giới thiệu bản thân',
  description:
    'Personal introduction landing page — who I am, what I do, highlights, and how to reach me.',
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
