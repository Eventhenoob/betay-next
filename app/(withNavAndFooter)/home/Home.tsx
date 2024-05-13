"use client";
import AutoChangeableText from "@/components/AutoChangeableTex";
import HorizontalScrollCarousel from "@/components/HorizontalScrollCarousel";
import VideoBG from "@//components/VideoBG";
import { useRef, useState } from "react";
import MyImageSlider from "@/components/MyImageSlider/MyImageSlider";
import PremiumButton from "@/components/Buttons/PermiumButton";
import useTab from "@/utils/useTab";
import { PiCaretDoubleDownLight } from "react-icons/pi";
import CustomImageShowcase from "@/components/CustomImageShowcase/CustomImageShowcase";
import SwiperSlider3D from "@/components/3dSwiperSlider";
import SoloCard3D from "@/components/SoloCard3D";

export default function Home() {
    // const [isHovered, setIsHovered] = useState(false);
    const mainRef = useRef<HTMLDivElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const isTab = useTab();

    const scrollToMain = () => {
        if (mainRef.current) mainRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const enableHover = () => {
        // setIsHovered(true);
    };
    const disableHover = () => {
        // setIsHovered(false);
    };


    return (
        <>
            {/* <CursorMask isHovered={isHovered} /> */}
            <header className=" flex z-10 md:h-screen min-h-[90vh] w-screen flex-col items-center relative justify-center p-5 pt-32  md:p-24">
                {isTab ? (
                    <VideoBG
                        key={1}
                        video={"header.mp4"}
                        isDarkBg={isTab ? true : false}
                        onLoadedData={() => {
                            setIsVideoLoaded(true);
                        }}
                    />
                ) : (
                    <VideoBG
                        key={2}
                        video={"headerWithText.mp4"}
                        isDarkBg={isTab ? true : false}
                        onLoadedData={() => {
                            setIsVideoLoaded(true);
                        }}
                    />
                )}
                {isTab ? (
                    <div className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center p-5 ">
                        <div className="content w-full lg:w-2/3  text-center">
                            {isVideoLoaded && (
                                <AutoChangeableText
                                    onMouseEnter={enableHover}
                                    onMouseLeave={disableHover}
                                    timings={[2.5, 2.9, 2, 3, 5.1, 2, 3, 1]}
                                    textArray={[
                                        "Nous Sommes Des Passionnes",
                                        "Nous Sommes Creatifs",
                                        "Referencement seo",
                                        "Creation de sites internet",
                                        "Communication digital",
                                        "Acquisition de leads",
                                        "Image de marque et reputation",
                                        "Nous Sommes Des Passionnes",
                                    ]}
                                />
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center p-5 pt-32  md:p-24">
                        <div
                            className="content w-full lg:w-2/3  text-center h-16"
                            onMouseEnter={enableHover}
                            onMouseLeave={disableHover}
                        ></div>
                    </div>
                )}

                <button onClick={() => scrollToMain()} className=" text-5xl absolute bottom-0 text-black opacity-75"><PiCaretDoubleDownLight className="animate-bounce cursor-pointer" />
                </button>
            </header>

            <main ref={mainRef} className="min-h-screen w-full py-10">

                <section className=" py-14 w-full">
                    <HorizontalScrollCarousel
                        onMouseEnter={enableHover}
                        onMouseLeave={disableHover}
                    />
                </section>
                <section className="w-full overflow-hidden relative min-h-screen flex flex-col justify-center items-center">
                    <h2
                        className="text-4xl text-white mb-20 font-heading font-bold text-center "
                    >
                        Nos Réalisations
                    </h2>
                    <div className="w-full md:w-7/12 md:mb-0 mb-10 flex justify-center items-center">
                        <CustomImageShowcase />
                    </div>
                </section>
            </main>
        </>
    );
}
