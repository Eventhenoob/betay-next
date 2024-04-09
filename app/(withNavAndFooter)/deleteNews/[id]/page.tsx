"use client"
import HtmlFromText from "@/components/HtmlFromText/HtmlFromText";
import useSingleNews from "@/hooks/useSingleNews";
import axios from "axios";
import { useRef, useState } from "react";

const SingleNews = ({params: {id}} : {params: {id: string}}) => {
    const { err, getNews, newsData } = useSingleNews(id);
    const [showError, setShowError] = useState("");
    const [showSuccess, setShowSuccess] = useState("");
    const keyRef = useRef<HTMLInputElement>(null);
    const toggleShowError = (message: string) => {
      setShowError(message);
      setTimeout(() => {
        setShowError("");
      }, 4000);
    };
  
    const toggleShowSuccess = (message: string) => {
      setShowSuccess(message);
      setTimeout(() => {
        setShowSuccess("");
      }, 4000);
    };
  if (id == null || !newsData?.data)
    return (
      <main className="min-w-[100vw] min-h-[100vh]  flex justify-center items-center">
        <p className="text-white text-2xl">404 News Not Found.</p>
      </main>
    );
  if (err) {
    return (<main className="min-w-[100vw] min-h-[100vh] flex-col flex justify-center items-center">
      <p className="text-white text-3xl">Someting went wrong</p>
      <p className="text-white text-xl">{err}</p>
      <button
        className="py-2 px-4 bg-red-600 text-black"
        onClick={() => getNews()}
      >
        Retry
      </button>
    </main>);
  } else {
      
    return (
      <main className="min-w-[100vw] flex-col bg-slate-200 text-black mt-32 p-10 min-h-[100vh] flex justify-center items-center">
             {showError && (
        <p className="bg-red-600 p-4 fixed w-screen top-20 left-1 z-30 text-black font-heading ">
          {showError}
        </p>
      )}
      {showSuccess && (
        <p className="bg-[#EF7238] p-4 fixed w-screen top-20 left-1 z-30 text-white font-heading ">
          {showSuccess}
        </p>
      )}
        <div className="flex gap-2">
        <label htmlFor="key">Key</label>
        <input ref={keyRef} />

        </div>
        <button className="hover:bg-red-600 bg-red-500 p-4 mt-2 text-black mb-10" onClick={() => {
            axios.delete(`/api/news/${id}`, {
                params: {
                    key: keyRef.current?.value
                }
            }).then(() => {toggleShowSuccess("News delete successfully");}).catch((e) => {toggleShowError("Error delete news: " + e);})
        }} >Delete News</button>
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
