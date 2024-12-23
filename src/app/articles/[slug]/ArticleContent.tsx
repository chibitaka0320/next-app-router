import {Card} from "@chakra-ui/react";
import {
    Text,
    Heading,
  } from "../../common/components";
  import { Article } from "../../types";

  export default function ArticleContent({ article }: { article: Article }) {
    return (
      <Card.Root as="article">
        <Card.Header>
          <Heading as="h1">{article.title}</Heading>
        </Card.Header>
        <Card.Body>
          <Text as="p" fontSize="md">
            {article.content}
          </Text>
        </Card.Body>
      </Card.Root>
    );
  }
