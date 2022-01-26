import React from "react";

import { motion } from "framer-motion";

import { client } from "libs/client";

import { Article } from "types/article";
import { ArticleCard } from "components/domain/article/molecules/ArticleCard";

type Props = {
  articles?: Article[];
  error?: any;
};

export default function Blog({ articles, error }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className=" min-h-screen bg-main-blue bg-opacity-50">
        <div className=" pt-16">
          <h1 className="max-w-5xl font-bold mx-auto container text-2xl md:text-4xl p-4 text-white">
            BLOG
          </h1>
          <div className="p-4 flex flex-wrap  max-w-5xl justify-between mx-auto after:content-[''] after:block after:w-[29%] after:m-3">
            {articles?.map((article) => {
              return <ArticleCard key={article.id} article={article} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export const getServerSideProps = async () => {
  try {
    const data = await client.get({ endpoint: "articles" });

    return {
      props: {
        articles: data.contents,
      },
    };
  } catch (e) {
    // データ取得失敗時エラーをpropsに渡す。
    // 現在上手く渡せていないので修正が必要
    const error = JSON.stringify(e);
    return {
      props: {
        error,
      },
    };
  }
};
