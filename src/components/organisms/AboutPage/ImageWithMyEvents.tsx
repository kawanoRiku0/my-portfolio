export const ImageWithMyEvent = ({
  imageUrl,
  myEvents,
}: {
  imageUrl: string;
  myEvents: JSX.Element[];
}) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt="おもひで画像"
        className="rounded-2xl w-3/4 sm:w-1/2 mx-auto"
      />
      {/* keyを渡すためにdivでwrap */}
      {myEvents.map((myEvent, index) => {
        return <div key={index}>{myEvent}</div>;
      })}
    </div>
  );
};
