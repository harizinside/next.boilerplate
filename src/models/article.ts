import clientPromise from "@/app/lib/mongodb";
import type { ObjectId } from "mongodb";

interface ArticleProps {
  _id?: ObjectId;
  title: string;
  slugs: string;
  category: {
    name: string;
    href: string;
  }[];
  thumbnail: {
    src: string;
    alt: string;
    source?: {
      url: string;
      description: string;
    };
  };
  description: string;
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

const client = await clientPromise;
const db = client.db(Bun.env.MONGODB_DBS);
const ArticlesModel = db.collection<ArticleProps>("articles");

await ArticlesModel.createIndex({ slugs: 1 }, { unique: true });

export type { ArticleProps };
export { db, ArticlesModel };
