import Link from "next/link";
import { FC, useCallback } from "react";
import { Article } from "types/article";

type Props = {
  article: Article;
};

const noImage = "/images/no-image.jpg";

export const ArticleCard: FC<Props> = ({ article }) => {
  // タイトルを35文字いないにトリム
  const trimTitle = useCallback((title: string) => {
    let trimedTitle = title;

    if (title.length > 40) {
      trimedTitle = title.substring(0, 35) + "...";
    }

    return trimedTitle;
  }, []);
  return (
    <div className=" bg-white rounded-xl shadow-xl overflow-hidden  md:w-[29%] m-3 w-full hover:cursor-pointer hover:scale-105 transition-all">
      <Link href={`/article/${article.id}`} passHref>
        <a>
          {/* Imageコンポーネントを使用することが望ましい、一時的にimgタグ　 */}
          <img
            src={article.eye_catch?.url || noImage}
            alt="アイコン画像"
            className="w-full object-cover aspect-video"
          />
          <div className="px-5 mt-4 pt-2">
            <h2 className="font-bold mb-6 text-base">
              {article.title ? trimTitle(article.title) : "記事タイトル"}
            </h2>
            <div className="mb-4">
              <span className=" bg-gray-300  rounded-full px-4 text-sm py-1">
                {article.tag || "日常"}
              </span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
