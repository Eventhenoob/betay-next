import Slider from "react-slick";
interface Props {
  images: string[];
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
}

const ImageSliderMini = ({
  images,
  handleMouseEnter,
  handleMouseLeave,
}: Props) => {
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-[80%] rounded-3xl  m-auto lg:w-full overflow-hidden h-[25rem]  lg:h-[35rem] "
    >
      {SimpleSlider(images)}
    </div>
  );
};

function SimpleSlider(images: string[]) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <></>,
    prevArrow: <></>,
  };
  return (
    <Slider {...settings}>
      {images.map((img, i) => (
        <div key={i} className="w-full h-[25rem] relative z-50 md:h-[35rem] ">
          <img
            src={`/${img}`}
            alt="image"
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
    </Slider>
  );
}

export default ImageSliderMini;
