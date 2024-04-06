"use client";
interface Props {
  onLoadedData: () => void;
  isDarkBg: boolean;
  video: string;
}

const VideoBG = ({ video, onLoadedData, isDarkBg }: Props) => {
  return (
    <div
      className={
        "absolute -z-50 top-0 left-0 overflow-hidden w-full h-full " +
        (isDarkBg ? "bg-black" : "")
      }
    >
      <video
        onPlay={() => {
          onLoadedData();
        }}
        onError={(_e) => {}}
        autoPlay
        preload="auto"
        muted={true}
        loop={true}
        className={
          "object-cover w-full h-full " + (isDarkBg ? " opacity-30" : "")
        }
      >
        <source src={`/${video}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBG;
