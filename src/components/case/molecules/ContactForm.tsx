import { FC, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { sendEmail } from "libs/emailJS/sendEmail";

// フォームに使用する値の型
type Inputs = {
  name: string;
  email: string;
  content: string;
};

export const ContactForm: FC = () => {
  // mail送信処理の実行状況を格納
  const [isSending, setIsSending] = useState(false);

  // react-hook-formから必要な変数,メソッドを分割代入で受け取る
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // 前の送信処理実行中なら何もしない。
    if (isSending) return;

    // ステートを処理中に変更
    setIsSending(true);

    // emailJS送信中,後にトーストを表示
    toast.promise(sendEmail(data), {
      loading: "Loading",
      success: "送信に成功しました",
      error: "送信に失敗しました\n後ほどお試しください",
    });

    // ステートを非処理中に変更
    setIsSending(false);

    // フォームの入力欄を初期化
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-3 bg-white rounded shadow-2xl space-y-9  w-full"
    >
      <div>
        <label htmlFor="name" className=" font-bold text-black block mb-3">
          お名前
          {/* 空欄ならエラー表示 */}
          {errors.name && (
            <span className="text-red-500 ml-4">※入力してください</span>
          )}
        </label>
        <input
          {...register("name", { required: true })}
          className="formInput"
          id="name"
          type="text"
          placeholder="name"
        />
      </div>
      <div>
        <label htmlFor="email" className=" font-bold text-black block mb-3">
          メールアドレス
          {/* 空欄ならエラー表示 */}
          {errors.name && (
            <span className="text-red-500 ml-4">※入力してください</span>
          )}
        </label>
        <input
          {...register("email", { required: true })}
          className="formInput"
          id="email"
          type="text"
          placeholder="your@examle.com"
        />
      </div>
      <div>
        <label htmlFor="content" className=" font-bold text-black block mb-3">
          お問い合わせ内容
          {/* 空欄ならエラー表示 */}
          {errors.name && (
            <span className="text-red-500 ml-4">※入力してください</span>
          )}
        </label>
        <textarea
          {...register("content", { required: true })}
          className="formInput"
          id="content"
        />
      </div>
      <input
        type="submit"
        className="block bg-blue-700 py-2 px-3 text-white font-bold w-full rounded text-lg  shadow hover:cursor-pointer hover:opacity-80 transition-all"
      />
    </form>
  );
};
