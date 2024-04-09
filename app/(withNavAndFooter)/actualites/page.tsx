"use client"
import { useEffect, useState } from "react";
import NewsBox from "@/components/NewsBox/NewsBox";
import useNews from "@/hooks/useNews";
import DateParser from "@/utils/DataParser";

const News = () => {
  const { err, getNews, newsData } = useNews();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getNews(currentPage);
  }, [currentPage]);

  const getPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    else setCurrentPage(1);
  };

  const changePageTo = (page: number) => {
    setCurrentPage(page);
  };

  const getNextPage = () => {
    if (newsData?.totalPages) {
      if (currentPage < newsData.totalPages) setCurrentPage((prev) => prev + 1);
      else setCurrentPage(newsData.totalPages);
    }
  };

  if (err) {
    return (
      <main className="min-w-[100vw] min-h-[100vh] flex-col flex justify-center items-center">
        <p className="text-white text-3xl">Someting went wrong</p>
        <p className="text-white text-xl">{err}</p>
        <button
          className="py-2 px-4 bg-red-600 text-black"
          onClick={() => getNews()}
        >
          Retry
        </button>
      </main>
    );
  }
  return (
    <>
      <header
        style={{
          background: 'url("/newsBg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="flex h-[80vh] w-screen flex-col  items-center justify-center p-5 pt-32  md:p-24"
      >
        <h1 className="text-3xl sm:text-7xl lg:text-9xl uppercase font-heading">Actualités</h1>
      </header>

      <main className="py-20 flex flex-col items-center gap-20 bg-slate-200 justify-center">
        <h3 className="text-5xl text-center text-black  font-heading">Notre actualités</h3>
        <div className="flex gap-10 w-[80vw] flex-wrap justify-center items-center ">
          {newsData?.data.map((news) => {
            return (
              <NewsBox
              key={news._id}
                id={news._id}
                date={DateParser(`${news.createdAt}`)}
                heading={news.title}
                image={news.image}
                owner={news.createdBy}
                description={news.shortDescription || ""}
              />
            );
          })}
        </div>

        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm gap-1">
            <li>
              <button
                onClick={getPreviousPage}
                className={
                  "flex items-center justify-center rounded-l-lg px-3 h-8 leading-tight  border  " +
                  (currentPage === 1
                    ? " bg-gray-100 dark:bg-gray-700 border-gray-700 dark:text-white "
                    : " text-gray-500 bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ")
                }
              >
                Avant
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  changePageTo(1);
                }}
                className={
                  "flex items-center justify-center px-3 h-8 leading-tight  border  " +
                  (currentPage === 1
                    ? " bg-gray-100 dark:bg-gray-700 border-gray-700 dark:text-white "
                    : " text-gray-500 bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ")
                }
                disabled={currentPage == 1}
              >
                1
              </button>
            </li>
            {newsData?.totalPages &&
              newsData?.totalPages > 1 &&
              currentPage != 1 &&
              currentPage != newsData.totalPages && (
                <>
                  <li>
                    <button
                      onClick={() => {
                        changePageTo(currentPage - 1);
                      }}
                      className={
                        "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
                      }
                    >
                      {currentPage - 1}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {}}
                      className={
                        "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white " +
                        " bg-gray-100 text-gray-700 dark:bg-gray-700 !dark:text-white "
                      }
                      disabled={true}
                    >
                      {currentPage}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        changePageTo(currentPage + 1);
                      }}
                      className={
                        "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
                      }
                    >
                      {currentPage + 1}
                    </button>
                  </li>
                </>
              )}
            {newsData?.totalPages &&
              newsData?.totalPages === currentPage &&
              newsData?.totalPages != 1 && (
                <li>
                  <button
                    onClick={() => {
                      changePageTo(newsData?.totalPages);
                    }}
                    className={
                      "flex items-center justify-center px-3 h-8 leading-tight  border  " +
                      (currentPage === newsData.totalPages
                        ? " bg-gray-100 dark:bg-gray-700 dark:text-white "
                        : " text-gray-500 bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ")
                    }
                    disabled={currentPage == newsData.totalPages}
                  >
                    {newsData.totalPages}
                  </button>
                </li>
              )}

            <li>
              <button
                onClick={getNextPage}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Après
              </button>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
};

export default News;
