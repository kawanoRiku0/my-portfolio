import React from "react";

import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

import { client } from "libs/microcms/client";
import { Article } from "types/article";
import { ArticleCard } from "components/domain/article/molecules/ArticleCard";
import { DefaultLayout } from "components/layouts/DefaultLayout";

type Props = {
  articles?: Article[];
  error?: any;
};

export default function Blog({ articles, error }: Props) {
  // データ取得時にエラーが発生していれば、トーストで通知
  if (error) toast.error("データ取得に失敗しました。\n後ほどお試しください。");
  return (
    <>
      {/* データ取得失敗時、トーストで通知 */}
      <Toaster />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <DefaultLayout pageTitle="BLOG" pageColor="bg-main-blue">
          <div className="p-4 flex flex-wrap  max-w-5xl justify-between mx-auto after:content-[''] after:block after:w-[29%] after:m-3">
            {articles?.map((article) => {
              return <ArticleCard key={article.id} article={article} />;
            })}
          </div>
        </DefaultLayout>
      </motion.div>
    </>
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
    // エラー発生時、ターミナルにエラーを表示
    console.log(e);
    return {
      props: {
        error: true,
      },
    };
  }
};
