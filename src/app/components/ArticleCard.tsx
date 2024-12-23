import {Card} from "@chakra-ui/react";
import {
  Heading,
  Text,
} from "../common/components";
import NextLink from "next/link";
import { Article } from "../types";

export default function ArticleCard({ article }: { article: Article }) {
  const formattedDate = new Date(article.createdAt).toLocaleDateString(
    "ja-JP",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  return (
    <Card.Root
      as={"li"}
      minW="100%"
    >
      <NextLink href={`/articles/${article.id}`}>
        <Card.Header>
          <Heading size="md">{article.title}</Heading>
        </Card.Header>
        <Card.Body>
          <Text>{article.content.substring(0, 200)}...</Text>
        </Card.Body>
        <Card.Footer>
          <Text fontSize="sm" color="gray.600">
            {formattedDate}
          </Text>
        </Card.Footer>
      </NextLink>
    </Card.Root>
  );
}
