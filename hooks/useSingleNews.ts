import axios from "axios";
import { useEffect, useState } from "react";
import News from "../types/News";

interface NewsResponse {
  data: News;
}
const useSingleNews = (id: string) => {
  const [newsData, setNewsData] = useState<NewsResponse | null>(null);
  const [err, setError] = useState<null | string>(null);
  const getNews = async () => {
    try {
      setNewsData(null);
      setError(null);
      const response = await axios.get<NewsResponse>(
        `/api/news/${id}`
      );

      setNewsData(response.data);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return { newsData, err, getNews };
};
export default useSingleNews;
