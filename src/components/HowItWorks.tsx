"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const steps = [
  {
    step: 1,
    title: "说一句话",
    example: "「帮王太太做 重疾+教育方案」",
    sub: "输入需求",
  },
  {
    step: 2,
    title: "AI 自动工作",
    example: "分析需求 · 匹配产品 · 精算现金流 · 生成方案书",
    sub: "全自动",
  },
  {
    step: 3,
    title: "发给客户",
    example: "收到完整 Excel 方案书，直接转发给客户",
    sub: "一键转发",
  },
];

const platforms = ["飞书", "企业微信", "钉钉"];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-bg-sub">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <motion.h2 {...fadeInUp} className="font-heading font-bold text-2xl md:text-3xl text-primary text-center">
          像发微信一样简单
        </motion.h2>
        <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-4 relative">
          <div className="hidden md:block absolute top-7 left-1/4 right-1/4 h-0.5 bg-border z-0" aria-hidden />
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative z-10 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white text-xl font-bold">
                {s.step}
              </div>
              <div className="mt-4 font-heading font-bold text-primary text-lg">
                {s.title}
              </div>
              <p className="mt-2 text-text-muted text-sm">{s.example}</p>
              <p className="mt-1 text-text-muted text-xs">{s.sub}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          {...fadeInUp}
          className="mt-16 flex flex-wrap justify-center gap-8 text-text-muted text-sm"
        >
          {platforms.map((p) => (
            <div
              key={p}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-card"
            >
              {p === "飞书" && (
                <div className="w-7 h-7 rounded-md bg-[#3178FF] flex items-center justify-center text-[10px] font-bold text-white">
                  F
                </div>
              )}
              {p === "企业微信" && (
                <div className="w-7 h-7 rounded-md bg-[#188FFF] flex items-center justify-center text-[10px] font-bold text-white">
                  企
                </div>
              )}
              {p === "钉钉" && (
                <div className="w-7 h-7 rounded-md bg-[#2A8BFF] flex items-center justify-center text-[10px] font-bold text-white">
                  钉
                </div>
              )}
              <span className="font-medium">{p}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
