import { Comment } from "@/app/types";
import { Avatar } from "@/components/ui/avatar"
import { Text, VStack, Flex } from "../../common/components";

export default async function Comments({
  commentPromise,
}: {
  commentPromise: Promise<Comment[]>;
}) {
  const comments = await commentPromise;

  if (comments.length === 0) {
    return (
      <Text as="p" fontSize="md">
        コメントはありません。
      </Text>
    );
  }

  return (
    <VStack
      as="ul"
      align="stretch"
      px={4}
    >
        {comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
        ))}
    </VStack>
  );
}

function CommentItem({comment}: {comment: Comment}) {
    return (
        <Flex as="li" listStyleType="none" align="center">
          <Avatar mr={4} variant="subtle" name={comment.articleId.toString()} />
          <Text fontSize="sm">{comment.content}</Text>
        </Flex>
      );
}
