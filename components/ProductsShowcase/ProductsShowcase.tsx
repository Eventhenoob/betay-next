"use client";
import CustomButtonNext from "./CustomButtonNext";
import CustomButtonPrev from "./CustomButtonPrev";
import Slider from "react-slick";
import { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product/Product";
const ProductsShowcase = () => {
    let sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: false,

        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-20 slider-container">
            <Slider
                {...settings}
                ref={(slider) => {
                    sliderRef.current = slider;
                }}
                className=" relative "
            >
                <Product image="mugTemplate.jpg" projectLink="" subTitle="Produits personnalisés à votre logo" title="Personnalisés logo" />
                <Product image="mugTemplate.jpg" projectLink="" subTitle="Produits personnalisés à votre logo" title="Personnalisés logo" />
                <Product image="mugTemplate.jpg" projectLink="" subTitle="Produits personnalisés à votre logo" title="Personnalisés logo" />
                <Product image="mugTemplate.jpg" projectLink="" subTitle="Produits personnalisés à votre logo" title="Personnalisés logo" />
                <Product image="mugTemplate.jpg" projectLink="" subTitle="Produits personnalisés à votre logo" title="Personnalisés logo" />
                <Product image="mugTemplate.jpg" projectLink="" subTitle="Produits personnalisés à votre logo" title="Personnalisés logo" />
                <Product image="mugTemplate.jpg" projectLink="" subTitle="Produits personnalisés à votre logo" title="Personnalisés logo" />
                <Product image="mugTemplate.jpg" projectLink="" subTitle="Produits personnalisés à votre logo" title="Personnalisés logo" />
            </Slider>

            <div className="w-full relative">
                <div className=" m-auto mt-10 flex justify-center gap-10">
                    <div className="w-10 ">
                        <CustomButtonPrev
                            onClick={() => {
                                sliderRef.current?.slickPrev();
                            }}
                        />
                    </div>
                    <div className="w-10 ">
                        <CustomButtonNext
                            onClick={() => {
                                sliderRef.current?.slickNext();
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>);

}

export default ProductsShowcase