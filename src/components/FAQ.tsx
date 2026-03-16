"use client";

import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const faqs = [
  {
    q: "需要安装软件吗？",
    a: "不需要。直接在你日常使用的飞书、企业微信或钉钉中使用，零学习成本。",
  },
  {
    q: "我的客户数据安全吗？",
    a: "所有数据端到端加密存储，不与任何第三方共享。支持私有化部署。",
  },
  {
    q: "方案的计算准确吗？",
    a: "核心精算公式固定封装在代码中（非AI生成），IRR误差<0.1%，每份方案都经过双重校验。",
  },
  {
    q: "可以先试用吗？",
    a: "所有版本均提供7天免费试用，不满意随时取消，无任何费用。",
  },
  {
    q: "支持哪些保险产品？",
    a: "覆盖全市场主流产品，包括友邦、保诚、平安、国寿等500+产品，持续更新中。",
  },
  {
    q: "团队多人使用有优惠吗？",
    a: "5人以上团队享受8折优惠，20人以上请联系我们获取企业版方案。",
  },
];

export default function FAQ() {
  return (
    <section id="FAQ" className="py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <motion.h2 {...fadeInUp} className="font-heading font-bold text-2xl md:text-3xl text-primary text-center">
          常见问题
        </motion.h2>
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto space-y-2"
        >
          {faqs.map((faq, i) => (
            <Disclosure key={i} as="div" className="rounded-xl border border-border bg-white shadow-card overflow-hidden">
              <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-left font-heading font-semibold text-primary hover:bg-bg-sub/50 transition-colors">
                {faq.q}
                <ChevronDown className="h-5 w-5 text-text-muted ui-open:rotate-180 transition-transform" />
              </Disclosure.Button>
              <Disclosure.Panel className="px-6 pb-4 text-text-muted text-sm leading-relaxed">
                {faq.a}
              </Disclosure.Panel>
            </Disclosure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
