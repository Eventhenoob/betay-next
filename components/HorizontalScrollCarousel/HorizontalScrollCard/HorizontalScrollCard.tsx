import React, { useRef, useEffect } from "react";
import RevelAnimation from "../../RevelAnimation/RevelAnimation";

interface CardData {
  video: string;
  subText: {
    heading: string;
    description: string;
  }[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const HorizontalScrollCard = ({
  video,
  subText,
  onMouseEnter,
  onMouseLeave,
}: CardData) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Intersection threshold, when 50% of the component is visible
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When the component is in view
            if (videoRef.current) {
              videoRef.current.play(); // Play the video
            }
          } else {
            // When the component is out of view
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.pause(); // Pause the video
            }
          }
        });
      },
      options
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="w-screen text-white flex md:flex-row flex-col h-[90vh] py-10">
      <div className="md:w-1/2 w-full h-2/6 md:h-full relative flex justify-center items-center">
        <video
          autoPlay
          loop
          muted
          src={`/${video}`}
          ref={videoRef}
          className="z-10  w-full h-full absolute top-0 left-0 md:object-cover object-cover"
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
