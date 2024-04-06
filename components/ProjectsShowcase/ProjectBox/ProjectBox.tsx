import RevelAnimation from "../../RevelAnimation";

interface Props {
  heading: string;
  img: string;
  dir?: "up" | "down";
}

const ProjectBox = ({ heading, img, dir = "down" }: Props) => {
  return (
    <div
      className={
        " flex group flex-col w-screen lg:w-[40vw] shrink-0 gap-10 " +
        (dir === "down" ? " translate-y-20 " : "")
      }
    >
      <RevelAnimation width="fit-content">
        <div className="w-full text-start">
          <h3 className="group-[:hover]:text-[#EF7238] duration-300 text-3xl font-heading font-bold">
            {heading}
          </h3>
        </div>
      </RevelAnimation>
      <div className="relative">
        <p className="absolute italic font-light top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-main uppercase opacity-0 group-[:hover]:opacity-100 transition-all duration-200">
          Vérifiez cela.
        </p>
        <img
          src={`/${img}`}
          alt={heading}
          className="w-full rounded-2xl group-[:hover]:bg-black group-[:hover]:opacity-15 transition-all duration-500 object-cover cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProjectBox;
