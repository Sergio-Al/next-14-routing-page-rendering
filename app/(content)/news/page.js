"use client";

import { useEffect, useState } from "react";

import NewsList from "@/components/news-list";

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [news, SetNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Something went wrong");
        setIsLoading(false);
      }

      const news = await response.json();
      setIsLoading(false);
      SetNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <>
      <h1>Your news page</h1>
      {newsContent}
    </>
  );
}
