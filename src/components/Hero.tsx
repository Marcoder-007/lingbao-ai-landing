"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Zap, TrendingUp, Target } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const stats = [
  {
    icon: Zap,
    value: 600,
    suffix: "×",
    label: "效率提升",
    sub: "3天 → 30秒",
  },
  {
    icon: TrendingUp,
    value: 30,
    suffix: "%",
    label: "成单率提升",
    sub: "5% → 10.6%",
  },
  {
    icon: Target,
    value: 10,
    suffix: "×",
    label: "服务客户数",
    sub: "20 → 200人",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1B3A6B 1px, transparent 1px), linear-gradient(90deg, #1B3A6B 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="max-w-content mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-primary leading-tight">
              你的 AI 保险助理
              <br />
              <span className="text-accent">30 秒</span>生成专业方案
            </h1>
            <p className="mt-6 text-text-muted text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              客户会谈·需求分析·方案制作，灵保全程陪伴
              <br />
              让顶级销售的效率，成为你的标配
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-accent text-primary font-bold text-lg hover:scale-[1.02] transition-transform shadow-card"
              >
                免费体验 7天 →
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                预约演示
              </a>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={staggerItem}
                  className="bg-white rounded-xl p-4 shadow-card border border-border/50 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 text-accent">
                    <s.icon className="w-5 h-5" />
                    <span className="font-mono font-bold text-accent">
                      <CountUp end={s.value} suffix={s.suffix} duration={2} useEasing />
                    </span>
                  </div>
                  <div className="font-heading font-semibold text-primary mt-1">{s.label}</div>
                  <div className="text-sm text-text-muted font-mono">{s.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <ChatMock />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-text-muted text-sm">向下滚动</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-6 border-2 border-text-muted rounded-full border-t-transparent"
        />
      </motion.div>
    </section>
  );
}

function ChatMock() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-card-hover bg-[#f5f5f5] text-text-main p-4 max-w-md ml-auto">
      <div className="flex items-center justify-between pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/20" />
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-primary">Mandy / 灵保 AI</span>
            <span className="text-[10px] text-text-muted">在线 · 微信会话</span>
          </div>
        </div>
        <span className="text-[10px] text-text-muted">21:36</span>
      </div>
      <div className="space-y-3 mt-4">
        <div className="flex justify-end">
          <div className="bg-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-[85%] text-sm shadow-card">
            帮李先生（42岁）做教育+养老规划
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-[#95ec69] text-[#0a2e13] rounded-2xl rounded-tl-sm px-4 py-2 max-w-[85%] text-sm shadow-card">
            正在调取并分析客户及家庭画像…
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-[#95ec69] text-[#0a2e13] rounded-2xl rounded-tl-sm px-4 py-2 max-w-[85%] text-sm shadow-card">
            已匹配 Top 3 产品，生成方案书中
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-[#95ec69] text-[#0a2e13] rounded-2xl rounded-tl-sm px-4 py-2 max-w-[85%] text-xs shadow-card space-y-1">
            <div className="font-semibold text-[11px]">已生成方案文件：</div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-white/80 flex items-center justify-center text-[9px] font-mono text-primary">
                XLSX
              </div>
              <span className="truncate">李先生保单方案.xlsx</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-white/80 flex items-center justify-center text-[9px] font-mono text-danger">
                PDF
              </div>
              <span className="truncate">李先生展示方案.pdf</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <div className="flex-1 bg-white rounded-full h-10 shadow-card" />
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xs">
          发送
        </div>
      </div>
    </div>
  );
}
