interface Props {
  smallImage: string;
  bigImage: string;
  name: string;
  post: string;
}
const Crew = ({ bigImage, name, smallImage, post }: Props) => {
  return (
    <div className="w-full  md:w-64 h-96 relative group ">
      <img
        src={"/" + bigImage}
        alt={name}
        className="w-full  absolute top-0 left-0 group-[:hover]:opacity-100 opacity-0 transition-all duration-700 h-64 group-[:hover]:h-full  rounded-full object-cover"
      />

      <div className="absolute flex flex-col items-center justify-between h-full w-full group-[:hover]:opacity-0 opacity-100 top-0 duration-1000 transition-all left-0">
        <img
          src={"/" + smallImage}
          alt={name}
          className="w-64 h-64 group-[:hover]:opacity-0 opacity-100 transition-all duration-[1.2s] rounded-full object-cover"
        />
        <div className="">
          <p className="text-[#EF7238] text-center text-2xl">{name}</p>
          <p className=" text-center">{post}</p>
        </div>
      </div>
    </div>
  );
};

export default Crew;
