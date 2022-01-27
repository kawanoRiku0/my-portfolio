import React, { FC } from "react";
import { NextPage } from "next";

import { motion } from "framer-motion";

import { ChronologySection } from "components/domain/AboutMe/molecules/ChronologySection";
import { YearTextBox } from "components/domain/AboutMe/atoms/YearTextBox";
import { EventTextBox } from "components/domain/AboutMe/atoms/EventTextBox";
import { FadeInFromBelowProvider } from "components/providers/animation/FadeInFromBelowProvider";

const About: NextPage = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen bg-main-purple bg-opacity-50 py-20 ">
        <h2 className="text-white font-bold text-3xl  text-center mx-auto">
          ABOUT ME
        </h2>
        {/* ページ内コンテンツの表示を遅らせる */}
        <motion.div
          initial={{ opacity: 0, display: "none" }}
          animate={{ opacity: 1, display: "block" }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className=" max-w-4xl mx-auto px-4">
            <FadeInFromBelowProvider>
              <div className="pt-20">
                <ChronologySection
                  yearTextBox={<YearTextBox year="2002" />}
                  imageUrl="/images/no-image.jpg"
                  eventTextBoxList={[<EventTextBox text="大阪で爆誕" />]}
                />
              </div>
            </FadeInFromBelowProvider>
            <FadeInFromBelowProvider>
              <div className="pt-20">
                <ChronologySection
                  yearTextBox={<YearTextBox year="2012" subText="小学生時代" />}
                  imageUrl="/images/no-image.jpg"
                  eventTextBoxList={[
                    <EventTextBox
                      text="バスケの全国大会に出場"
                      subText="人生のハイライト"
                    />,
                    <EventTextBox
                      text="全国大会で最低のプレー連発"
                      subText="人生最大の挫折"
                    />,
                  ]}
                />
              </div>
            </FadeInFromBelowProvider>
            <FadeInFromBelowProvider>
              <div className="pt-20">
                <ChronologySection
                  yearTextBox={<YearTextBox year="2015" subText="中学時代" />}
                  imageUrl="/images/no-image.jpg"
                  eventTextBoxList={[
                    <EventTextBox
                      text="悔しさをバネにバスケ頑張る"
                      subText="選抜選手になったりする"
                    />,
                    <EventTextBox text="中二病発生で自分は最強のバスケプレイヤーだと錯覚" />,
                    <EventTextBox
                      text="勉強はキチンと頑張る"
                      subText="大阪府立高津高校に進学（ちょっとだけ賢い）"
                    />,
                  ]}
                />
              </div>
            </FadeInFromBelowProvider>
            <FadeInFromBelowProvider>
              <div className="pt-20">
                <ChronologySection
                  yearTextBox={<YearTextBox year="2017" subText="高校時代" />}
                  imageUrl="/images/no-image.jpg"
                  eventTextBoxList={[
                    <EventTextBox
                      text="天狗になっていたが、高校バスケのレベルの高さに驚愕"
                      subText="身長がでかすぎる"
                    />,
                    <EventTextBox
                      text="初心に戻りバスケ頑張る"
                      subText="結構名誉な選抜選手に選ばれる"
                    />,
                    <EventTextBox
                      text="コロナによりバスケ人生終了"
                      subText="頑張る対象が無くなり、途方に暮れる"
                    />,
                  ]}
                />
              </div>
            </FadeInFromBelowProvider>
            <FadeInFromBelowProvider>
              <div className="pt-20">
                <ChronologySection
                  yearTextBox={<YearTextBox year="2020" subText="高校三年生" />}
                  imageUrl="/images/no-image.jpg"
                  eventTextBoxList={[
                    <EventTextBox
                      text="そんな時にプログラミングと出会う"
                      subText="なんだこれオモロイ！"
                    />,
                    <EventTextBox text="一般受験ルートを捨て去り、プログラミング勉強開始" />,
                    <EventTextBox
                      text="AO入試で大阪国際工科専門職大学に合格"
                      subText="プログラミングの学習経験が活きる"
                    />,
                    <EventTextBox
                      text="インターン開始"
                      subText="最初はwebから入り、動画編集者としてのポジションを得る"
                    />,
                    <EventTextBox
                      text="動画編集めっちゃがんばる"
                      subText="代わりにプログラミングがおざなりに..."
                    />,
                  ]}
                />
              </div>
            </FadeInFromBelowProvider>
            <FadeInFromBelowProvider>
              <div className="pt-20">
                <ChronologySection
                  yearTextBox={
                    <YearTextBox year="2021" subText="大学生/これから" />
                  }
                  imageUrl="/images/no-image.jpg"
                  eventTextBoxList={[
                    <EventTextBox
                      text="動画編集もっと頑張る"
                      subText="別インターンも開始"
                    />,
                    <EventTextBox
                      text="急激にプログラミング熱が再来"
                      subText="プログラミングスクールのメンターを開始/学習再開"
                    />,
                    <EventTextBox text="イマココ" />,
                  ]}
                />
              </div>
            </FadeInFromBelowProvider>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
