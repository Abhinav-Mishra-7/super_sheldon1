// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "SuperSheldon",
  description: "Ace Every Exam Worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
