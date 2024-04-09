"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import z from "zod";
import { useState } from "react";
import useSingleNews from "@/hooks/useSingleNews";

const schema = z.object({
  title: z
    .string()
    .trim(),
  key: z.string().trim(),
  createdBy: z.string(),
  image: z.any(),
  content: z.string(),
  shortDescription: z.string(),
});

const AddNews = ({params: {id}} : {params: {id: string}}) => {

  type FormData = z.infer<typeof schema>;
  const [showError, setShowError] = useState("");
  const [showSuccess, setShowSuccess] = useState("");

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { err, getNews, newsData } = useSingleNews(id);

  if (newsData == null)
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
    </main>)
  } else {
  return (
    <main className="min-h-screen w-full py-32">
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
      <form
        onSubmit={handleSubmit((data) => {
          try {
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("createdBy", data.createdBy);
            formData.append("content", data.content);
            formData.append("key", data.key);
            formData.append("image", data.image[0]);
            formData.append("shortDescription", data.shortDescription);
            
            axios
              .patch(`/api/news/${id}`, formData)
              .then((_res) => {
                toggleShowSuccess("News added successfully");
              })
              .catch((error: any) => {
                toggleShowError("Error adding news: " + error.message);
              });
          } catch (error: any) {
            toggleShowError("Error adding news: " + error.message);
          }
        })}
        className="flex flex-col gap-4 w-1/2 mx-auto"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="">
            Title
          </label>
          <input
            type="text"
            {...register("title")}
            className="text-black"
            id="title"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title?.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="createdBy" className="">
            Author
          </label>
          <input
            type="text"
            {...register("createdBy")}
            className=" text-black"
            id="createdBy"
          />
          {errors.createdBy && (
            <p className="text-red-500">{errors.createdBy?.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="text-black">
            Image
          </label>
          <input type="file" {...register("image")} className="" id="image" />
          {errors.image && (
            <p className="text-red-500">{errors?.image?.message?.toString()}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="content" className="">
            Content
          </label>
          <textarea
            className="text-black"
            {...register("content")}
            id="content"
          />
          {errors.content && (
            <p className="text-red-500">{errors.content?.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="key" className="">
            key
          </label>
          <input
            type="key"
            {...register("key")}
            className="text-black"
            id="key"
          />
          {errors.key && <p className="text-red-500">{errors.key?.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="content" className="">
            shortDescription
          </label>
          <textarea
            className="text-black"
            {...register("shortDescription")}
            id="shortDescription"
          />
          {errors.shortDescription && (
            <p className="text-red-500">{errors.shortDescription?.message}</p>
          )}
        </div>

        <button className="bg-blue-500 p-4 hover:bg-blue-700 transition-all decoration-slate-300">
          Submit
        </button>
      </form>
    </main>
  )}
};

export default AddNews;
