import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

interface Props {
  heading: string;
  date: string;
  owner: string;
  image: string;
  description: string;
  id?: string;
}
const NewsBox = ({
  date,
  heading,
  image,
  owner,
  description,
  id = "",
}: Props) => {
  return (
    <div className="w-72 min-h-80 p-3 bg-white rounded-2xl drop-shadow-2xl">
      <h3 className="text-black font-bold capitalize">{heading}</h3>
      <div className="flex mt-2 gap-2">
        <p className="bg-slate-100 p-1 px-2 text-black rounded-md text-[.6rem]">
          {date}
        </p>
        <p className="bg-slate-100 p-1 px-2 font-bold text-black rounded-md text-[.6rem]">
          {owner}
        </p>
      </div>

      <p className="text-black mt-2 text-sm">{description.slice(0, 100)}...</p>

      <div className="w-full h-52 relative">
        <div className="bg-white inline-block  relative z-40 p-2 rounded-br-md">
          <Link
            href={`/actualites/${id}`}
            className="transition-all active:bg-gray-900 active:scale-90 duration-200 text-black flex relative z-20 hover:bg-black hover:text-white bg-white  justify-center items-center text-xs p-2 gap-1 rounded-md border-2 border-black"
          >
            read more <BsArrowRight />
          </Link>
        </div>
        <img
          src={`${image}`}
          alt=""
          className="w-full h-full top-0 left-0 absolute object-cover rounded-md "
        />
      </div>
    </div>
  );
};

export default NewsBox;
