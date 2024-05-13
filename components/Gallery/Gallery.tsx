import style from "./style.module.css";

const Gallery = () => {
  return (
    <div className={" mt-40 grid grid-col-2 p-2 md:p-0 sm:grid-cols-3 md:grid-cols-4 gap-6 " + style["container"]}>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <video
          muted
          autoPlay
          loop
          src="/slider-vid1.mp4"
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/slider-img1.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/slider-img2.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/slider-img3.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/slider-img4.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/slider-img5.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/slider-img6.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <video
          muted
          autoPlay
          loop
          src="/slider-vid2.mp4"
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <video
          muted
          autoPlay
          loop
          src="/slider-vid4.mp4"

          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <video
          muted
          autoPlay
          loop
          src="/slider-vid3.mp4"
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Gallery;
