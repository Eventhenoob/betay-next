import { LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";

interface Props {
    image: string;
    name: string;
    post: string;
    about: string;
    linkedin?: string;
    twitter?: string;
    insta?: string;
}

const CrewCard = ({ about, image, name, post, insta, linkedin, twitter }: Props) => {
    return (
        <div className="shrink-0 mt-20 w-[90vw] scale-1 hover:scale-[1.03] transition-all duration-300 p-2 rounded-lg sm:w-96 min-h-48 flex flex-col items-center text-white bg-zinc-800">
            <img src={`/${image}`} alt={name} className="rounded-full w-32 h-32 sm:w-40 sm:h-40 -mt-20 object-cover" />
            <div className="text-center">
                <h3 className="font-heading  text-bold text-3xl">{name}</h3>
                <p className=" mb-2 text-sm text-orange-500 ">{post}</p>
                <p className="mb-4">{about}</p>
                <div className="flex gap-4 mb-4 justify-center items-center">
                    {linkedin && <a href={linkedin} className="text-xl hover:text-blue-300">
                        <LuLinkedin />
                    </a>}

                    {insta && <a href={insta} className="text-xl hover:text-pink-600">
                        <LuInstagram />
                    </a>}

                    {twitter && <a href={twitter} className="text-xl hover:text-blue-500">
                        <LuTwitter />
                    </a>}
                </div>
            </div>
        </div>
    )
}

export default CrewCard