import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { Sidebar } from "@/components/Sidebar";
import { MobileBar } from "@/components/MobileBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "uistyles — The UI Style Index",
    template: "%s — uistyles",
  },
  description:
    "A visual index of 30 UI design styles. Learn the basics of each style — palette, typography, principles — and copy the Tailwind classes for its core components.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="h-full overflow-hidden bg-ink text-paper">
        <CustomCursor />
        <div className="flex h-full flex-col lg:flex-row">
          <Sidebar />
          <MobileBar />
          <main className="h-full min-h-0 flex-1 min-w-0 overflow-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
