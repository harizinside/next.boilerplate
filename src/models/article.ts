export interface ArticleProps {
  _id: string;
  title: string;
  slugs: string;
  category: {
    name: string;
    href: string;
  }[];
  thumbnail: {
    src: string;
    alt: string;
    source: {
      url: string;
      description: string;
    };
  };
  description: string;
  readingTime: string;
  keywords: string[];
  author: {
    name: string;
    href: string;
    src: string;
  };
  editor: {
    name: string;
    href: string;
    src: string;
  };
  status: boolean;
  createdAt: Date;
  updateAt: Date;
}
