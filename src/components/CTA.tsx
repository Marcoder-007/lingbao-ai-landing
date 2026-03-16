"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
        <motion.h2 {...fadeInUp} className="font-heading font-bold text-2xl md:text-4xl text-accent">
          让 灵保 AI 成为你最强的销售搭档
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-white/90 text-lg">
          30秒生成专业方案，不分你一分佣金
        </motion.p>
        <motion.div {...fadeInUp} className="mt-10">
          <a
            href="#"
            className="inline-flex items-center px-10 py-4 rounded-xl bg-accent text-primary font-bold text-lg hover:scale-[1.02] transition-transform shadow-card"
          >
            免费体验 7天 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
