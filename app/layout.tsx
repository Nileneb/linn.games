import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <title>Linn.Games</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
