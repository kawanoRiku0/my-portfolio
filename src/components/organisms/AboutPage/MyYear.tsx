export const MyYear = ({
  year,
  subText,
}: {
  year: string;
  subText?: string;
}) => {
  return (
    <div>
      <span className="text-white font-bold text-2xl sm:text-4xl block text-center ">
        {year}
        {subText && (
          <>
            <br />
            <span className=" text-xs sm:text-base font-white ">{subText}</span>
          </>
        )}
      </span>
    </div>
  );
};
