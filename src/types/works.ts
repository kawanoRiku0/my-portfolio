export type Work = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  description: string;
  url: string;
  skill: string;
};
