export type Article = {
  id: number;
  userId: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type Comment = {
  id: number;
  userId: number;
  articleId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
};
