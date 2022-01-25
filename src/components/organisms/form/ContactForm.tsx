import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  content: string;
};

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-3 bg-white rounded shadow-2xl space-y-9  w-full"
    >
      <div>
        <label htmlFor="name" className=" font-bold text-black block mb-3">
          お名前
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
          メールアドレス{" "}
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

export default ContactForm;
