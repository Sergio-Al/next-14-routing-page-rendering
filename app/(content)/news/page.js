import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

export default function NewsPage() {
  return (
    <>
      <h1>Your news page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
