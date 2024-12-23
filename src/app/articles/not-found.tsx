import { Heading, Button } from "../common/components";

export default function NotFound() {
  return (
    <div>
      <Heading mb={4}>お探しの記事が見つかりませんでした。</Heading>
      <Button>
        トップへ戻る
      </Button>
    </div>
  );
}
