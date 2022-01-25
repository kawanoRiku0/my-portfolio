import React, { FC } from "react";
import { motion } from "framer-motion";
import { MyYearAndMyEventBlock } from "components/organisms/AboutPage/MyYearAndMyEventBlock";
import { MyYear } from "components/organisms/AboutPage/MyYear";
import { ImageWithMyEvent } from "components/organisms/AboutPage/ImageWithMyEvents";
import { MyEvent } from "components/organisms/AboutPage/MyEvents";

export default function About() {
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
            <MyYearAndMyEventBlock
              myYear={<MyYear year="2002" />}
              imageWithMyEvent={
                <ImageWithMyEvent
                  imageUrl="https://growthseed.jp/wp-content/uploads/2016/12/peach-1.jpg"
                  myEvents={[<MyEvent text="大阪で爆誕" />]}
                />
              }
            />
          </div>
          <div className="px-4 pt-20">
            <MyYearAndMyEventBlock
              myYear={<MyYear year="2012" subText="小学生時代" />}
              imageWithMyEvent={
                <ImageWithMyEvent
                  imageUrl="https://growthseed.jp/wp-content/uploads/2016/12/peach-1.jpg"
                  myEvents={[
                    <MyEvent
                      text="バスケと出会う"
                      subText="バスケ人生のはじまり"
                    />,
                  ]}
                />
              }
            />
          </div>
          <div className="px-4 pt-20">
            <MyYearAndMyEventBlock
              myYear={<MyYear year="2014" />}
              imageWithMyEvent={
                <ImageWithMyEvent
                  imageUrl="https://growthseed.jp/wp-content/uploads/2016/12/peach-1.jpg"
                  myEvents={[
                    <MyEvent
                      text="バスケの全国大会に出場"
                      subText="人生のハイライト"
                    />,
                    <MyEvent
                      text="全国大会で最低のプレー連発"
                      subText="人生最大の挫折"
                    />,
                  ]}
                />
              }
            />
          </div>
          <div className="px-4 pt-20">
            <MyYearAndMyEventBlock
              myYear={<MyYear year="2015" subText="中学時代" />}
              imageWithMyEvent={
                <ImageWithMyEvent
                  imageUrl="https://growthseed.jp/wp-content/uploads/2016/12/peach-1.jpg"
                  myEvents={[
                    <MyEvent
                      text="悔しさをバネにバスケ頑張る"
                      subText="選抜選手になったりする"
                    />,
                    <MyEvent text="中二病発生で自分は最強のバスケプレイヤーだと錯覚" />,
                    <MyEvent
                      text="勉強はキチンと頑張る"
                      subText="大阪府立高津高校に進学（ちょっとだけ賢い）"
                    />,
                  ]}
                />
              }
            />
          </div>
          <div className="px-4 pt-20">
            <MyYearAndMyEventBlock
              myYear={<MyYear year="2017" subText="高校時代" />}
              imageWithMyEvent={
                <ImageWithMyEvent
                  imageUrl="https://growthseed.jp/wp-content/uploads/2016/12/peach-1.jpg"
                  myEvents={[
                    <MyEvent
                      text="天狗になっていたが、高校バスケのレベルの高さに驚愕"
                      subText="身長がでかすぎる"
                    />,
                    <MyEvent
                      text="初心に戻りバスケ頑張る"
                      subText="結構名誉な選抜選手に選ばれる"
                    />,
                    <MyEvent
                      text="コロナによりバスケ人生終了"
                      subText="頑張る対象が無くなり、途方に暮れる"
                    />,
                  ]}
                />
              }
            />
          </div>
          <div className="px-4 pt-20">
            <MyYearAndMyEventBlock
              myYear={<MyYear year="2020" subText="高校三年生" />}
              imageWithMyEvent={
                <ImageWithMyEvent
                  imageUrl="https://growthseed.jp/wp-content/uploads/2016/12/peach-1.jpg"
                  myEvents={[
                    <MyEvent
                      text="そんな時にプログラミングと出会う"
                      subText="なんだこれオモロイ！"
                    />,
                    <MyEvent text="一般受験ルートを捨て去り、プログラミング勉強開始" />,
                    <MyEvent
                      text="AO入試で大阪国際工科専門職大学に合格"
                      subText="プログラミングの学習経験が活きる"
                    />,
                    <MyEvent
                      text="インターン開始"
                      subText="最初はwebから入り、動画編集者としてのポジションを得る"
                    />,
                    <MyEvent
                      text="動画編集めっちゃがんばる"
                      subText="代わりにプログラミングがおざなりに..."
                    />,
                  ]}
                />
              }
            />
          </div>
          <div className="px-4 pt-20">
            <MyYearAndMyEventBlock
              myYear={<MyYear year="2021" subText="大学生/これから" />}
              imageWithMyEvent={
                <ImageWithMyEvent
                  imageUrl="https://growthseed.jp/wp-content/uploads/2016/12/peach-1.jpg"
                  myEvents={[
                    <MyEvent
                      text="動画編集もっと頑張る"
                      subText="別インターンも開始"
                    />,
                    <MyEvent
                      text="急激にプログラミング熱が再来"
                      subText="プログラミングスクールのメンターを開始/学習再開"
                    />,
                    <MyEvent text="イマココ" />,
                  ]}
                />
              }
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
