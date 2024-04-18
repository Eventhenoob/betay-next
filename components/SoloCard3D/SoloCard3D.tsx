import style from "./SoloCard.module.css"

interface Props {
    title: String;
    description: string;
    image: string;
}

const SoloCard3D = ({ description, image, title }: Props) => {
    return (
        <div className={style["card__article"] + " w-[90vw] max-w-96 h-[30rem]"}>
            <div className={style["card__data"]}>
                <img src={image} alt="card image" className={style["card__img"] + " w -full sm:w-2/3"} />

                <h1 className={style["card__title"] + " font-heading font-bold"}>{title}</h1>
                <p className={style["card__description"]}>{description}</p>
            </div>

            <div className={style["card__shapes"]}>
                <span className={style["card__shape"]}></span>
                <span className={style["card__shape"]}></span>
                <span className={style["card__shape"]}></span>
                <span className={style["card__shape"]}></span>
                <span className={style["card__shape"]}></span>
                <span className={style["card__shape"]}></span>
                <span className={style["card__shape"]}></span>
                <span className={style["card__shape"]}></span>
            </div>
        </div>
    )
}

export default SoloCard3D