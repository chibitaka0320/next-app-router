import { Heading } from "@chakra-ui/react";
import type { Article } from "./types";
import ArticleList from "./components/ArticleList";

async function getArticles() {
  const res = await fetch("http://localhost:8080/articles", {
    cache: "no-store"
  });

  if(!res.ok) {
    return [];
  }

  const data = await res.json();
  console.log(res);
  console.log(data);

  return data as Article[];
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div>
      <Heading as="h1" mb={4}>
        新着記事
      </Heading>
      <ArticleList articles={articles} />
    </div>
  );
}
