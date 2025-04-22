import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Blog Post</title>
      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
