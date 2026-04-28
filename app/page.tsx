import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 THIS IS THE MOST IMPORTANT PART */}
        <script src="https://sdk.minepi.com/pi-sdk.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
