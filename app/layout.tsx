import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata: Metadata = {
  title: "이재휘 — Portfolio",
  description: "만들면서 배우는 사람. 이재휘 포트폴리오.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className="bg-[#0a0a0a] text-[rgba(255,255,255,0.6)] antialiased"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
