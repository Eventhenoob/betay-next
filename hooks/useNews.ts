import axios from "axios";
import { useEffect, useState } from "react";
import News from "../types/News";

interface NewsResponse {
  data: News[];
  totalPages: number;
  totalNews: number;
}
const useNews = (page: number = 1, limit: number = 10) => {
  const [newsData, setNewsData] = useState<NewsResponse | null>(null);
  const [err, setError] = useState<null | string>(null);
  const getNews = async (page: number = 1, limit: number = 10) => {
    try {
      setNewsData(null);
      setError(null);
      const response = await axios.get<NewsResponse>(
        "/api/news",
        {
          params: {
            page,
            limit,
          },
        }
      );

      setNewsData(response.data);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getNews(page, limit);
  }, []);

  return { newsData, err, getNews };
};
export default useNews;
