import style from "./style.module.css";

const Gallery = () => {
  return (
    <div className={" " + style["container"]}>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e1.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e2.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e3.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e1.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e2.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e3.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e1.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e2.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e3.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e1.jpg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Gallery;
