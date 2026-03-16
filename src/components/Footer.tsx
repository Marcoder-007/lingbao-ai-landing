"use client";

import Link from "next/link";

const columns = [
  {
    title: "产品",
    links: [
      { label: "功能介绍", href: "#功能" },
      { label: "定价", href: "#定价" },
      { label: "更新日志", href: "#" },
    ],
  },
  {
    title: "支持",
    links: [
      { label: "帮助中心", href: "#" },
      { label: "联系我们", href: "#" },
      { label: "微信客服", href: "#" },
    ],
  },
  {
    title: "关于",
    links: [
      { label: "关于我们", href: "#" },
      { label: "隐私政策", href: "#" },
      { label: "服务条款", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-sub border-t border-border py-12 md:py-16">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <Link href="#" className="font-heading font-bold text-primary text-lg">
              灵保 AI
            </Link>
            <p className="mt-4 text-text-muted text-sm">© 2026 All Rights Reserved</p>
          </div>
          <div className="flex flex-wrap gap-12">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-heading font-semibold text-primary text-sm">{col.title}</h4>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-text-muted text-sm hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
