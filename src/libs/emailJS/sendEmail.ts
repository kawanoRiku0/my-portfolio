import { init, send } from "@emailjs/browser";

// フォームに使用する値の型
type Inputs = {
  name: string;
  email: string;
  content: string;
};

// emailJSを用いたメール送信処理
export const sendEmail = async (data: Inputs) => {
  const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  if (userID && serviceID && templateID) {
    // emailJS初期化
    init(userID);

    // emailJS送信データ
    const template_params = {
      from_name: data.name,
      email: data.email,
      content: data.content,
    };

    // emailJS送信
    return await send(serviceID, templateID, template_params);
  } else {
    // 必要な環境変数が揃っていない場合、rejectを返す
    throw new Error();
  }
};
