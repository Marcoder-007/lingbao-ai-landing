"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const plans = [
  {
    name: "基础版",
    price: "¥4,999",
    period: "/月",
    features: [
      { label: "方案数量", value: "100/月" },
      { label: "客户管理", value: "100" },
      { label: "产品库", value: "500+" },
      { label: "大模型部署", value: false },
      { label: "会议参与", value: false },
      { label: "团队协作", value: false },
      { label: "深度定制", value: false },
    ],
    cta: "选择基础版",
    recommended: false,
  },
  {
    name: "专业版",
    price: "¥8,999",
    period: "/月",
    features: [
      { label: "方案数量", value: "无限" },
      { label: "客户管理", value: "500" },
      { label: "产品库", value: "500+" },
      { label: "大模型部署", value: true },
      { label: "会议参与", value: true },
      { label: "团队协作", value: false },
      { label: "深度定制", value: false },
    ],
    cta: "立即开通",
    recommended: true,
  },
  {
    name: "旗舰版",
    price: "¥12,999",
    period: "/月",
    features: [
      { label: "方案数量", value: "无限" },
      { label: "客户管理", value: "无限" },
      { label: "产品库", value: "500+" },
      { label: "大模型部署", value: true },
      { label: "会议参与", value: true },
      { label: "团队协作", value: true },
      { label: "深度定制", value: true },
    ],
    cta: "联系我们",
    recommended: false,
  },
];

export default function Pricing() {
  return (
    <section id="定价" className="py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <motion.h2 {...fadeInUp} className="font-heading font-bold text-2xl md:text-3xl text-primary text-center">
          选择适合你的版本
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border bg-white p-6 shadow-card ${
                plan.recommended
                  ? "border-accent border-t-4 md:scale-105 shadow-card-hover z-10"
                  : "border-border"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-primary text-xs font-bold">
                  ⭐ 最受欢迎
                </div>
              )}
              <h3 className="font-heading font-bold text-primary text-lg">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="font-mono font-bold text-2xl text-primary">{plan.price}</span>
                <span className="text-text-muted">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex justify-between items-center">
                    <span className="text-text-muted">{f.label}</span>
                    {typeof f.value === "boolean" ? (
                      f.value ? (
                        <Check className="w-4 h-4 text-success-fill" />
                      ) : (
                        <X className="w-4 h-4 text-text-muted" />
                      )
                    ) : (
                      <span className="font-mono text-primary">{f.value}</span>
                    )}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 block w-full py-3 rounded-xl text-center font-semibold transition-all ${
                  plan.recommended
                    ? "bg-accent text-primary hover:scale-[1.02] shadow-card"
                    : plan.name === "旗舰版"
                      ? "border-2 border-primary text-primary hover:bg-primary/5"
                      : "bg-gray-100 text-text-muted hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeInUp} className="mt-10 text-center text-sm text-text-muted">
          <p>企业版（私有化部署）：10-30万/年，<a href="#" className="text-accent font-medium">联系咨询 →</a></p>
          <p className="mt-2">所有版本均支持 7 天免费试用</p>
        </motion.div>
      </div>
    </section>
  );
}
