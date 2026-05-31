import type { Metadata } from "next"
import { ThemeProvider } from "./theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "NepaliKit — Bikram Sambat Tools for React & TypeScript",
  description:
    "A collection of Bikram Sambat (Nepali) tools including a date picker, calendar utilities, number conversion, location data, and validation — built for React and TypeScript.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="scrollbar-thin">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
