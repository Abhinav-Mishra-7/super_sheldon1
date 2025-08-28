import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "Supersheldon",
  description: "Worldwide Exam Prep Made Easy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${quicksand.variable} font-sans relative overflow-x-hidden bg-white`}>
  {/* Global background glows */}
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="fixed -left-[300px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-200 opacity-20 blur-3xl pointer-events-none -z-10" />
      <div className="fixed -right-[300px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-200 opacity-20 blur-3xl pointer-events-none -z-10" />
    </div>
  {/*  Page content */}
  <main className="relative z-10">{children}</main>
</body>
    </html>
  );
}
