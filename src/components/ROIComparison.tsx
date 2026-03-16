"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const now = [
  "👤👤 2个助理",
  "月薪: 3万/月",
  "佣金分成: ~5,000/月",
  "培训成本: 至少1个月，还可能要替换新人",
  "可服务客户: 20人/月",
  "方案速度: 2-3天/个",
  "错误率: 15%",
  "总支出: ~3.5万/月",
];

const after = [
  "🤖 1个 AI 助理",
  "月费: 5,000 - 10,000元",
  "佣金分成: 0元",
  "培训: 当天上岗",
  "可服务客户: 200人/月",
  "方案速度: 30秒/个",
  "错误率: < 0.1%",
  "总支出: ~1万/月",
];

export default function ROIComparison() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <motion.h2 {...fadeInUp} className="font-heading font-bold text-2xl md:text-3xl text-primary text-center">
          算一笔账
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-danger/30 bg-red-50/50 p-6 md:p-8"
          >
            <h3 className="font-heading font-bold text-danger text-lg mb-4">现在</h3>
            <ul className="space-y-2 text-text-main text-sm md:text-base">
              {now.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-success/40 bg-green-50/50 p-6 md:p-8"
          >
            <h3 className="font-heading font-bold text-success-fill text-lg mb-4">用 AI 之后</h3>
            <ul className="space-y-2 text-text-main text-sm md:text-base">
              {after.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.p
          {...fadeInUp}
          className="mt-12 text-center text-xl md:text-2xl font-heading font-bold text-accent"
        >
          一个月多签一张保单，AI 助理就是免费的。
        </motion.p>
      </div>
    </section>
  );
}
