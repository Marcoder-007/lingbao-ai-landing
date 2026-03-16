"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function CaseStudy() {
  return (
    <section id="案例" className="py-20 md:py-28 bg-bg-sub">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <motion.h2 {...fadeInUp} className="font-heading font-bold text-2xl md:text-3xl text-primary text-center">
          Top Sales 怎么评价灵保 AI
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <FeedbackCard
            name="陈悦"
            role="香港寿险 Top Sales"
            company="友邦保险"
            location="香港"
            quote="以前一套家庭保障方案要反复算 Excel，一天最多服务 2–3 个家庭。接入灵保 AI 后，客户当场说完需求，30 秒就能看到 40 多年的现金流预测，现场签单率明显提升。"
            caseDetail="最近一对 35 岁夫妇（刘先生和陈女士）带 2 个孩子来做教育+养老规划，原本预估要两次见面才能敲定，结果第一次会面就确认方案并完成投保。"
          />
          <FeedbackCard
            name="刘峻"
            role="高端客户经理"
            company="平安人寿"
            location="上海"
            quote="灵保 AI 把我之前攒了七八年的话术、方案模板都“吃进去”，现在和客户聊的同时，后台已经自动生成对比表和现金流，成单率从 5% 提到了 10.6%。"
            caseDetail="一位 800 万资产的企业主刘先生，原本只想做简单重疾配置，看到灵保给出的教育+养老综合方案后，追加投保了两份长期储蓄计划。"
          />
          <FeedbackCard
            name="王珊"
            role="家庭保障规划师"
            company="中国人寿"
            location="广州"
            quote="最大的变化是“不会忘记跟进”。灵保 AI 会自动提醒我每个家庭接触到哪一步了，还会给出下一次适合聊什么，客户反馈说感觉我一直在“记得他们”。"
            caseDetail="一位 90 后妈妈陈女士，从第一份少儿重疾到后续的教育金、医疗补充，3 年内完成了 4 次加保，全程由灵保 AI 帮我记录需求变化和方案。"
          />
          <FeedbackCard
            name="Leo"
            role="独立团队长"
            company="独立代理团队"
            location="深圳"
            quote="团队有 12 个人，以前每人每天能认真跟进的客户不超过 5 个。用了灵保 AI 以后，新人直接用系统里的话术和方案模版，一个月内就有人做到周周有件。"
            caseDetail="我们给一个互联网公司做团险，灵保 AI 帮我们在两天内出完 6 套对比方案，最终拿下 200 多人的团体保单。"
          />
          <FeedbackCard
            name="Ivy"
            role="跨境业务团队长"
            company="独立顾问团队"
            location="香港"
            quote="以前香港+内地产品混合规划很费时间，要查两边的条款。现在直接让灵保 AI 做“港险+内地医疗”的打包方案，客户感觉非常专业，我们团队人均服务客户数翻了好几倍。"
            caseDetail="最近一个深圳家庭（张先生一家）想做“子女海外教育+父母养老”方案，灵保 AI 一次性给出人民币和港币两种现金流版本，很快就锁定了三款组合产品。"
          />
          <FeedbackCard
            name="周岚"
            role="资深理财顾问"
            company="保险经纪公司"
            location="北京"
            quote="灵保 AI 帮我把很多零散的客户沟通“结构化”了，同一类型的需求可以在几秒钟内拉出对比方案，我只需要根据客户性格微调一下表达。"
            caseDetail="一位在互联网大厂工作的李女士，需要同时规划父母养老和子女教育，灵保 AI 给出了 3 套不同预算档的组合方案，我们最后在一次视频会里就敲定了配置。"
          />
        </motion.div>
      </div>
    </section>
  );
}

type FeedbackCardProps = {
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  caseDetail: string;
};

function FeedbackCard({ name, role, company, location, quote, caseDetail }: FeedbackCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-card p-6 border-l-4 border-accent flex flex-col h-full">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="font-heading font-bold text-primary">
            {name} · {role}
          </p>
          <p className="text-xs text-text-muted mt-1">
            {company} · {location}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-text-muted leading-relaxed">“{quote}”</p>
      <p className="mt-3 text-xs text-text-muted leading-relaxed flex-1">
        <span className="font-semibold text-primary">客户案例：</span>
        {caseDetail}
      </p>
    </div>
  );
}
