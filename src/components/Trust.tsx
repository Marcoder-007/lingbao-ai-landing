"use client";

import { motion } from "framer-motion";
import { Lock, Target, Cpu, Headphones } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const items = [
  {
    icon: Lock,
    title: "数据安全",
    lines: ["端到端加密", "客户数据不出境"],
  },
  {
    icon: Target,
    title: "精算精准",
    lines: ["IRR误差 < 0.1%", "双重校验机制"],
  },
  {
    icon: Cpu,
    title: "技术领先",
    lines: ["Claude AI + OpenClaw", "行业最强 AI 底座"],
  },
  {
    icon: Headphones,
    title: "专属服务",
    lines: ["1对1 onboarding", "7×24 技术支持"],
  },
];

export default function Trust() {
  return (
    <section className="py-20 md:py-28 bg-bg-sub">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <motion.h2 {...fadeInUp} className="font-heading font-bold text-2xl md:text-3xl text-primary text-center">
          安全可靠，值得信赖
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                <item.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-heading font-bold text-primary">{item.title}</h3>
              <ul className="mt-2 text-sm text-text-muted space-y-1">
                {item.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
