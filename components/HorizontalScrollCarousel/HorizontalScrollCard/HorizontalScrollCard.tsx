import RevelAnimation from "../../RevelAnimation/RevelAnimation";

interface CardData {
  img: string;
  mainTitle: string;
  subText: {
    heading: string;
    description: string;
  }[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const HorizontalScrollCard = ({
  img,
  mainTitle,
  subText,
  onMouseEnter,
  onMouseLeave,
}: CardData) => {
  return (
    <div className="w-screen text-white flex md:flex-row flex-col h-[90vh] py-10">
      <div className="md:w-1/2 w-full h-2/6 md:h-full relative flex justify-center items-center">
        <p className="font-bold text-3xl relative z-20 text-black bg-opacity-70 bg-white p-8">
          {mainTitle}
        </p>

        <img
          src={`/${img}`}
          alt={`${mainTitle}`}
          className="z-10 bg-red-500 w-full h-full absolute top-0 left-0 md:object-cover object-fill"
        />
      </div>
      <div className="md:w-1/2 p-4 gap-2 pt-10 md:p-10 md:gap-10 flex overflow-y-scroll md:overflow-auto justify-center flex-col">
        {subText.map((subData, i) => (
          <RevelAnimation key={i} width="fit-content">
            <div className="w-full flex flex-col justify-start">
              <h2
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="font-heading font-bold md:text-xl lg:text-2xl"
              >
                {subData.heading}
              </h2>
              <p className="">{subData.description}</p>
            </div>
          </RevelAnimation>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
