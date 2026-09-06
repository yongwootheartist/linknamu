import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김러닝 | 링크나무",
  description: "김러닝의 링크 모음",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
