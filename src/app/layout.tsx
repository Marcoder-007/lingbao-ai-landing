import type { Metadata } from "next";
import { Noto_Sans_SC, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "700", "900"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "灵保 AI — 30秒生成专业定制方案 | 智能保险销售工具",
  description:
    "AI驱动的保险销售助理，30秒自动生成86列现金流方案书。覆盖500+保险产品，服务效率提升600倍。免费试用7天。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${noto.variable} ${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-white text-text-main">
        {children}
      </body>
    </html>
  );
}
