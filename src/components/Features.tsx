"use client";

import { motion } from "framer-motion";
import { Zap, BookOpen, Users, Bell, Mic } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    icon: Zap,
    tag: "核心功能",
    title: "30秒，从一句话到完整方案",
    bullets: [
      "输入：「帮李先生（42岁）做教育+养老规划」",
      "AI 自动完成：客户画像分析、产品智能匹配 Top 3、47年现金流精算（IRR误差 < 0.1%）、生成86列 Excel 方案书",
    ],
    mock: "scheme",
    align: "left",
  },
  {
    icon: Mic,
    tag: "智能参会",
    title: "AI 一起参加客户会议",
    bullets: [
      "接入飞书/企业微信/钉钉会议，实时记录客户对话和关键信息",
      "会后自动输出会议纪要，提炼客户需求要点，确认后一键进入方案生成",
    ],
    mock: "meeting",
    align: "right",
  },
  {
    icon: BookOpen,
    tag: "产品库",
    title: "500+ 产品，一键查询对比",
    bullets: [
      "覆盖友邦、保诚、平安、国寿等全市场产品",
      "AI 智能匹配客户需求，推荐最优方案；实时更新，条款、费率、健康告知一目了然",
    ],
    mock: "products",
    align: "left",
  },
  {
    icon: Users,
    tag: "客户管理",
    title: "每个客户都是 VIP",
    bullets: [
      "对话中自动建档，零手动录入",
      "风险偏好 + 家庭结构 + 保障缺口全景分析；互动历史、方案记录、成交状态一目了然",
    ],
    mock: "crm",
    align: "right",
  },
  {
    icon: Bell,
    tag: "跟进与话术",
    title: "比你自己还懂节奏",
    bullets: [
      "首次接触 3 天 → 自动发送产品对比；方案发送 7 天 → 智能询问反馈",
      "客户说「太贵了」→ AI 推荐最佳应对话术；生日、保单周年 → 自动送关怀",
    ],
    mock: "timeline",
    align: "left",
  },
];

export default function Features() {
  return (
    <section id="功能" className="py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <motion.h2 {...fadeInUp} className="font-heading font-bold text-2xl md:text-3xl text-primary text-center">
          一个 Agent，顶三个助理
        </motion.h2>
        <motion.p {...fadeInUp} className="mt-4 text-text-muted text-center text-lg max-w-2xl mx-auto">
          AI 不只是工具，是你的超级搭档
        </motion.p>
        <div className="mt-16 space-y-24 md:space-y-32">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-48px" }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div className={f.align === "right" ? "md:order-2" : ""}>
                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                  {f.tag}
                </span>
                <h3 className="mt-4 font-heading font-bold text-xl md:text-2xl text-primary">
                  {f.title}
                </h3>
                <ul className="mt-4 space-y-2 text-text-muted text-sm md:text-base leading-relaxed">
                  {f.bullets.map((b) => (
                    <li key={b.slice(0, 20)} className="flex gap-2">
                      <span className="text-accent">✦</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={f.align === "right" ? "md:order-1" : ""}>
                <FeatureMock type={f.mock} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureMock({ type }: { type: string }) {
  if (type === "scheme") {
    return (
      <div className="rounded-xl border border-border bg-bg-sub p-4 shadow-card">
        <div className="space-y-2 mb-4">
          <div className="h-3 w-3/4 rounded bg-primary/20" />
          <div className="h-3 w-2/3 rounded bg-primary/10" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-2 text-text-muted">年份</th>
                <th className="text-left py-2 pr-2 text-text-muted">现金流</th>
                <th className="text-left py-2 pr-2 text-text-muted">IRR</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-1.5 font-mono">Y{i}</td>
                  <td className="py-1.5 font-mono text-accent">12万</td>
                  <td className="py-1.5 font-mono">3.2%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  if (type === "products") {
    return (
      <div className="space-y-3">
        {[
          { name: "友邦充裕未来3", tag: "教育金" },
          { name: "都会20年交", tag: "养老金" },
          { name: "保诚 xxx", tag: "重疾" },
        ].map((p) => (
          <div
            key={p.name}
            className="rounded-xl border border-border bg-white p-4 shadow-card flex justify-between items-center"
          >
            <div>
              <div className="font-heading font-semibold text-primary">{p.name}</div>
              <div className="text-xs text-text-muted">{p.tag}</div>
            </div>
            <div className="text-accent text-sm font-mono">对比</div>
          </div>
        ))}
      </div>
    );
  }
  if (type === "crm") {
    return (
      <div className="rounded-xl border border-border bg-bg-sub p-4 shadow-card">
        <div className="space-y-2">
          {["李先生 · 42岁", "王太太 · 38岁", "张先生 · 50岁"].map((name, i) => (
            <div key={name} className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0">
              <div className="w-10 h-10 rounded-full bg-primary/20" />
              <div className="flex-1">
                <div className="font-medium text-primary">{name}</div>
                <div className="text-xs text-text-muted">方案已发送 · 待跟进</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (type === "timeline") {
    return (
      <div className="rounded-xl border border-border bg-white p-4 shadow-card">
        <div className="space-y-4">
          {[
            { day: "D+3", label: "自动发送产品对比" },
            { day: "D+7", label: "智能询问反馈" },
            { day: "周年", label: "保单周年关怀" },
          ].map((t) => (
            <div key={t.day} className="flex items-baseline gap-3 text-sm">
              <div className="flex-shrink-0 w-10 font-mono text-accent font-bold">{t.day}</div>
              <div className="flex-1 text-primary">{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  // meeting
  return (
    <div className="rounded-xl border border-border bg-bg-sub p-4 shadow-card">
      <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
        <Mic className="w-4 h-4 text-primary" />
        <span>客户会议 · 实时记录中</span>
      </div>
      <div className="space-y-2 text-xs">
        <div className="bg-white rounded-lg px-3 py-2 shadow-card">
          <span className="font-mono text-text-muted mr-2">19:32</span>
          <span>客户：想给两个孩子做教育金，同时兼顾自己 60 岁的养老金。</span>
        </div>
        <div className="bg-white rounded-lg px-3 py-2 shadow-card">
          <span className="font-mono text-text-muted mr-2">19:34</span>
          <span>灵保 AI：已记录教育+养老需求，偏好稳健型产品。</span>
        </div>
        <div className="bg-white rounded-lg px-3 py-2 shadow-card">
          <span className="font-mono text-text-muted mr-2">会后纪要</span>
          <span className="text-primary"> · 已生成会议纪要和需求要点，待确认后自动进入方案生成。</span>
        </div>
      </div>
    </div>
  );
}
