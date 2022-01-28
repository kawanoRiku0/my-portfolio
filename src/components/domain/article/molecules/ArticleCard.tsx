import { FC, useCallback } from "react";
import Image from "next/image";

import { Article } from "types/article";

type Props = {
  article: Article;
};

const noImage = "/images/no-image.jpg";

export const ArticleCard: FC<Props> = ({ article }) => {
  // タイトルを35文字以内にトリム
  const trimTitle = useCallback((title: string) => {
    // タイトルが35文字以上ならトリム,35文字以下なら何もせずにリターン
    return title.length > 35 ? title.substring(0, 35) + "..." : title;
  }, []);

  // 日付を正しいフォーマットにトリム
  const trimDate = useCallback((date: string) => {
    return date.substring(0, 10);
  }, []);

  return (
    <div className=" bg-white rounded-xl shadow-xl overflow-hidden  md:w-[29%] m-3 w-full hover:cursor-pointer hover:scale-105 transition-all">
      <a href={article.url}>
        <Image
          src={article.image.url || noImage}
          alt="投稿"
          layout="intrinsic"
          objectFit="cover"
          width={1600}
          height={900}
        />
        <div className="px-5 mt-4 pt-2">
          <h2 className="font-bold mb-6 text-base">
            {trimTitle(article.title)}
          </h2>
          <div className="mb-4">
            <span className=" bg-gray-300  rounded-full px-4 text-sm py-1">
              {trimDate(article.createdAt)}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};
