export const metadata = {
  title: { 
    template: "Next.js Codevolution",
    default: "",
    absolute: "",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={
            {
              backgroundColor: "darkgray",
              fontStyle: "italic",
              padding: "20px"
            }
          }
        > Header
        </header>
        {children}
        <footer style={{
          backgroundColor: "darkgreen",
          fontStyle: "revert",
          padding: "20px"
        }}>
          Footer
        </footer>
      </body>
    </html>
  )
}
