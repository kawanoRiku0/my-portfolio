export const MyEvent = ({
  text,
  subText,
}: {
  text: string;
  subText?: string;
}) => {
  return (
    <div className=" mt-3 w-full ml-1 p-4 text-white font-bold text-base sm:text-3xl align-middle bg-gray-500">
      {text}
      {subText && (
        <>
          <br />
          <span className=" text-xs sm:text-base font-white ">{subText}</span>
        </>
      )}
    </div>
  );
};
