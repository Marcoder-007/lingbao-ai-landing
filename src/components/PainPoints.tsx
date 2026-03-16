"use client";

import { motion } from "framer-motion";
import { Clock, Users, XCircle, DollarSign } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const points = [
  {
    icon: Clock,
    title: "做方案太慢",
    desc: "一个客户的保险方案要做 2-3 天\nExcel 手动算现金流，算到眼花",
  },
  {
    icon: Users,
    title: "客户顾不过来",
    desc: "Top Sales 每月只能深度服务 20 个客户\n剩下的客户只能放弃，眼睁睁看着流失",
  },
  {
    icon: XCircle,
    title: "计算容易出错",
    desc: "手动精算 15% 的错误率\n一个小数点的差距，就是几十万的理赔纠纷",
  },
  {
    icon: DollarSign,
    title: "助理成本太高",
    desc: "雇 2-3 个助理，月薪 + 佣金分成 ≈ 3.5万/月\n还不一定靠谱，还要花时间培训",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 md:py-28 bg-bg-sub">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <motion.h2
          {...fadeInUp}
          className="font-heading font-bold text-2xl md:text-3xl text-primary text-center"
        >
          每天都在重复这些低效工作？
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-48px" }}
          className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {points.map((p, index) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className="bg-white rounded-xl p-6 shadow-card flex gap-4 border-l-4 border-danger hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
            >
              <div className="flex-shrink-0 text-danger">
                <VisualThumb index={index} Icon={p.icon} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-primary text-lg">{p.title}</h3>
                <p className="text-text-muted text-sm mt-2 whitespace-pre-line leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          {...fadeInUp}
          className="mt-12 text-center text-lg md:text-xl text-accent font-semibold"
        >
          如果有一个不分佣金、不请假、不出错的 AI 助理呢？
        </motion.p>
      </div>
    </section>
  );
}

type VisualThumbProps = {
  index: number;
  Icon: typeof Clock;
};

function VisualThumb({ index, Icon }: VisualThumbProps) {
  if (index === 0) {
    // 做方案太慢：进度条 + 时钟
    return (
      <div className="w-20 h-20 rounded-2xl bg-danger/5 flex flex-col justify-between p-2 shadow-card">
        <div className="flex items-center justify-between text-[10px] text-text-muted">
          <span>方案进度</span>
          <Icon className="w-4 h-4 text-danger" />
        </div>
        <div className="space-y-1">
          <div className="w-full h-2 rounded-full bg-border overflow-hidden">
            <div className="h-2 w-1/5 bg-danger rounded-full" />
          </div>
          <div className="w-full h-2 rounded-full bg-border overflow-hidden">
            <div className="h-2 w-2/5 bg-danger/80 rounded-full" />
          </div>
          <div className="w-full h-2 rounded-full bg-border overflow-hidden">
            <div className="h-2 w-[10%] bg-danger/60 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    // 客户顾不过来：人物排队
    return (
      <div className="w-20 h-20 rounded-2xl bg-danger/5 flex items-center justify-center shadow-card">
        <div className="flex -space-x-2">
          <div className="w-7 h-7 rounded-full bg-primary/10 border border-white" />
          <div className="w-7 h-7 rounded-full bg-primary/20 border border-white" />
          <div className="w-7 h-7 rounded-full bg-primary/30 border border-white" />
          <div className="w-7 h-7 rounded-full bg-danger/60 border border-white flex items-center justify-center text-[9px] text-white">
            20+
          </div>
        </div>
      </div>
    );
  }

  if (index === 2) {
    // 计算容易出错：表格 + 红色叉号
    return (
      <div className="w-20 h-20 rounded-2xl bg-danger/5 flex flex-col p-2 shadow-card">
        <div className="flex items-center justify-between text-[10px] text-text-muted mb-1">
          <span>现金流表</span>
          <Icon className="w-3.5 h-3.5 text-danger" />
        </div>
        <div className="grid grid-cols-3 gap-0.5 flex-1">
          <div className="bg-white h-3" />
          <div className="bg-white h-3" />
          <div className="bg-white h-3" />
          <div className="bg-white h-3" />
          <div className="bg-danger/60 h-3" />
          <div className="bg-white h-3" />
          <div className="bg-white h-3" />
          <div className="bg-white h-3" />
          <div className="bg-white h-3" />
        </div>
      </div>
    );
  }

  // 助理成本太高：三个人 + 金额条
  return (
    <div className="w-20 h-20 rounded-2xl bg-danger/5 flex flex-col justify-between p-2 shadow-card">
      <div className="flex items-center justify-between text-[10px] text-text-muted">
        <span>人力成本</span>
        <DollarSign className="w-3.5 h-3.5 text-danger" />
      </div>
      <div className="flex items-center gap-1 mt-1">
        <div className="w-5 h-5 rounded-full bg-primary/10" />
        <div className="w-5 h-5 rounded-full bg-primary/20" />
        <div className="w-5 h-5 rounded-full bg-primary/30" />
        <span className="ml-1 text-[10px] text-danger">× 3</span>
      </div>
      <div className="w-full h-2 rounded-full bg-border overflow-hidden mt-1">
        <div className="h-2 w-4/5 bg-danger rounded-full" />
      </div>
      <div className="text-[10px] text-danger mt-0.5">≈ 3.5万 / 月</div>
    </div>
  );
}
