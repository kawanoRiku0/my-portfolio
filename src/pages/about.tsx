import React, { FC } from "react";
import { NextPage } from "next";

import { motion } from "framer-motion";

import { MyChronologySection } from "components/domain/AboutMe/molecules/MyChronologySection";
import { MyYearTextBox } from "components/domain/AboutMe/atoms/MyYearTextBox";
import { MyEventTextBox } from "components/domain/AboutMe/atoms/MyEventTextBox";

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
        <div className=" max-w-4xl mx-auto">
          <div className="px-4 pt-20">
            <MyChronologySection
              myYearTextBox={<MyYearTextBox year="2002" />}
              imageUrl="/images/no-image.jpg"
              myEventTextBoxList={[<MyEventTextBox text="大阪で爆誕" />]}
            />
          </div>
          <div className="px-4 pt-20">
            <MyChronologySection
              myYearTextBox={<MyYearTextBox year="2012" subText="小学生時代" />}
              imageUrl="/images/no-image.jpg"
              myEventTextBoxList={[
                <MyEventTextBox
                  text="バスケの全国大会に出場"
                  subText="人生のハイライト"
                />,
                <MyEventTextBox
                  text="全国大会で最低のプレー連発"
                  subText="人生最大の挫折"
                />,
              ]}
            />
          </div>
          <div className="px-4 pt-20">
            <MyChronologySection
              myYearTextBox={<MyYearTextBox year="2015" subText="中学時代" />}
              imageUrl="/images/no-image.jpg"
              myEventTextBoxList={[
                <MyEventTextBox
                  text="悔しさをバネにバスケ頑張る"
                  subText="選抜選手になったりする"
                />,
                <MyEventTextBox text="中二病発生で自分は最強のバスケプレイヤーだと錯覚" />,
                <MyEventTextBox
                  text="勉強はキチンと頑張る"
                  subText="大阪府立高津高校に進学（ちょっとだけ賢い）"
                />,
              ]}
            />
          </div>
          <div className="px-4 pt-20">
            <MyChronologySection
              myYearTextBox={<MyYearTextBox year="2017" subText="高校時代" />}
              imageUrl="/images/no-image.jpg"
              myEventTextBoxList={[
                <MyEventTextBox
                  text="天狗になっていたが、高校バスケのレベルの高さに驚愕"
                  subText="身長がでかすぎる"
                />,
                <MyEventTextBox
                  text="初心に戻りバスケ頑張る"
                  subText="結構名誉な選抜選手に選ばれる"
                />,
                <MyEventTextBox
                  text="コロナによりバスケ人生終了"
                  subText="頑張る対象が無くなり、途方に暮れる"
                />,
              ]}
            />
          </div>
          <div className="px-4 pt-20">
            <MyChronologySection
              myYearTextBox={<MyYearTextBox year="2020" subText="高校三年生" />}
              imageUrl="/images/no-image.jpg"
              myEventTextBoxList={[
                <MyEventTextBox
                  text="そんな時にプログラミングと出会う"
                  subText="なんだこれオモロイ！"
                />,
                <MyEventTextBox text="一般受験ルートを捨て去り、プログラミング勉強開始" />,
                <MyEventTextBox
                  text="AO入試で大阪国際工科専門職大学に合格"
                  subText="プログラミングの学習経験が活きる"
                />,
                <MyEventTextBox
                  text="インターン開始"
                  subText="最初はwebから入り、動画編集者としてのポジションを得る"
                />,
                <MyEventTextBox
                  text="動画編集めっちゃがんばる"
                  subText="代わりにプログラミングがおざなりに..."
                />,
              ]}
            />
          </div>
          <div className="px-4 pt-20">
            <MyChronologySection
              myYearTextBox={
                <MyYearTextBox year="2021" subText="大学生/これから" />
              }
              imageUrl="/images/no-image.jpg"
              myEventTextBoxList={[
                <MyEventTextBox
                  text="動画編集もっと頑張る"
                  subText="別インターンも開始"
                />,
                <MyEventTextBox
                  text="急激にプログラミング熱が再来"
                  subText="プログラミングスクールのメンターを開始/学習再開"
                />,
                <MyEventTextBox text="イマココ" />,
              ]}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
