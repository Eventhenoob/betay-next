"use client"
import HtmlFromText from "@/components/HtmlFromText/HtmlFromText";
import useSingleNews from "@/hooks/useSingleNews";

const SingleNews = ({params: {id}} : {params: {id: string}}) => {
    const { err, getNews, newsData } = useSingleNews(id);

  if (id == null)
    return (
      <main className="min-w-[100vw] min-h-[100vh]  flex justify-center items-center">
        <p className="text-white text-2xl">404 News Not Found.</p>
      </main>
    );
  if (err) {
    <main className="min-w-[100vw] min-h-[100vh] flex-col flex justify-center items-center">
      <p className="text-white text-3xl">Someting went wrong</p>
      <p className="text-white text-xl">{err}</p>
      <button
        className="py-2 px-4 bg-red-600 text-black"
        onClick={() => getNews()}
      >
        Retry
      </button>
    </main>;
  } else {
    return (
      <main className="min-w-[100vw] flex-col bg-slate-200 text-black p-10 min-h-[100vh] flex justify-center items-center">
        <img
          src={newsData?.data.image}
          alt="no image"
          className="h-96 w-full bg-red-500 object-cover rounded-md"
        />
        <h1 className=" text-4xl font-bold">{newsData?.data.title}</h1>
        <HtmlFromText htmlString={newsData?.data.content || ""} />
      </main>
    );
  }
};

export default SingleNews;
