import { Article, Comment } from "@/app/types";
import { notFound } from "next/navigation";
import ArticleContent from "./ArticleContent";
import { Heading } from "@chakra-ui/react";
import Comments from "./Comments";

type Props = {
  params: { slug: string };
};

const getArticle = async (slug: string) => {
  const res = await fetch(`http://localhost:8080/articles/${slug}`, {
    next: {revalidate: 60}
  });

  if(res.status === 404) {
    notFound();
  }

  if(!res.ok) {
    throw new Error();
  }

  const data = await res.json();
  return data as Article;
}

const getComments = async (slug: string) => {
  const res = await fetch(`http://localhost:8080/articles/${slug}/comments`, {
    cache: "no-store"
  });

  if(!res.ok) {
    throw new Error();
  }

  const data = await res.json();
  return data as Comment[];
}

export default async function ArticleDetail({ params }: Props) {
  const articlePromise = getArticle(params.slug);
  const commentsPromise = getComments(params.slug);

  const article = await articlePromise;

  return (
    <div>
      <ArticleContent article={article} />
      <Heading as="h2" mt={8} mb={4}>
        Comments
      </Heading>
      <Comments commentPromise={commentsPromise}></Comments>
    </div>
  );
}
