import React, { useState } from "react";
import { NextPage } from "next";

import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

import { client } from "libs/microcms/client";
import { Work } from "types/works";

import { DefaultLayout } from "components/layouts/DefaultLayout";
import { WorkShowBox } from "components/domain/works/atoms/WorkShowBox";
import { WorksModal } from "components/domain/works/molecules/WorksModal";

type Props = {
  works?: Work[];
  error: boolean;
};

const Works: NextPage<Props> = ({ works, error = false }) => {
  // データ取得時にエラーが発生していれば、トーストで通知
  if (error) toast.error("データ取得に失敗しました。\n後ほどお試しください。");

  // 作品説明モーダルの開閉状態を格納
  const [isModalOpen, setIsModalOpen] = useState(false);

  // モーダルに表示する作品を格納
  const [workOnModal, setWorkOnModal] = useState<Work>();

  const toggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOnClick = (work: Work) => {
    // モーダルを開閉
    toggle();

    // 作品情報をセット
    setWorkOnModal(work);
  };

  return (
    <>
      {workOnModal && (
        <WorksModal work={workOnModal} isOpen={isModalOpen} toggle={toggle} />
      )}
      {/* データ取得失敗時、トーストで通知 */}
      <Toaster />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <DefaultLayout pageTitle="WORKS" pageColor="bg-main-yellow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="p-4 flex flex-wrap  max-w-5xl justify-between mx-auto after:content-[''] after:block after:w-[27%] after:m-1">
              {works?.map((work) => {
                return (
                  <WorkShowBox
                    key={work.id}
                    work={work}
                    handleOnClick={() => handleOnClick(work)}
                  />
                );
              })}
            </div>
          </motion.div>
        </DefaultLayout>
      </motion.div>
    </>
  );
};
export const getServerSideProps = async () => {
  try {
    // microcmsからポートフォリオ一覧を取得
    const data = await client.get({ endpoint: "works" });

    return {
      props: {
        works: data.contents,
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

export default Works;
