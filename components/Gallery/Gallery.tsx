import style from "./style.module.css";

const Gallery = () => {
  return (
    <div className={" mt-40 grid grid-col-2 p-2 md:p-0 sm:grid-cols-3 md:grid-cols-4 gap-6 " + style["container"]}>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e1.jpeg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e2.jpeg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e3.jpeg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e1.jpeg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e2.jpeg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e3.jpeg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e1.jpeg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e2.jpeg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e3.jpeg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
      <div className={style["imgBox"] + " flex justify-center items-center"}>
        <img
          src="/e1.jpeg"
          alt=""
          className="w-full h-full align-middle object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Gallery;
