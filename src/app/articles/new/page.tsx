"use client";

import { useRouter } from "next/navigation";
import { Heading, Button, Input, Textarea } from "@chakra-ui/react";
import { FormControl, FormLabel} from "@chakra-ui/form-control";
import { useState } from "react";

export default function CreateArticle() {
  const router = useRouter();

  const [userId] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userId, title, content})
    });

    console.log(res);

    router.push("/");
  };

  return (
    <div>
      <Heading mb={4}>投稿</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>タイトル</FormLabel>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Input>

          <FormLabel>本文</FormLabel>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <Button type="submit" color="white" bg="orange.400" mt={4}>
            作成
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
