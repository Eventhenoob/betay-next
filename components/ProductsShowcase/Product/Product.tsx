import { BsArrowRight } from "react-icons/bs"

interface Props {
    image: string,
    title: string,
    subTitle: string,
    projectLink: string
}

const Product = ({ image, projectLink, subTitle, title }: Props) => {
    return (
        <div className="md:mx-10 mx-10 w-64 h-80 md:w-56 md:h-72 rounded-lg overflow-hidden relative flex flex-col justify-end">
            <img src={`/${image}`} alt={title} className="w-full h-full absolute top-0 left-0 object-cover " />
            <div className="z-10 relative w-full text-white backdrop-blur-lg bg-black bg-opacity-20 p-4">
                <h4 className="">{title}</h4>
                <p className="text-xs mb-2">{subTitle}</p>
                <a href={projectLink} className="text-sm flex justify-center items-center  group w-max gap-2">voir le projet <span className="group-[:hover]:translate-x-2 block pt-1 transition-all duration-300"><BsArrowRight /></span></a>
            </div>
        </div>
    )
}

export default Product