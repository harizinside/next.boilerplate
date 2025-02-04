import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import type { ArticleProps } from "@/models/article";
import type { ServiceProps } from "@/models/service";

const client = await clientPromise;

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;
  switch (slug) {
    case "articles":
      const responseArticle = await articleSitemap();
      return NextResponse.json({ success: true, data: responseArticle });

    case "services":
      const responseService = await servicesSitemap();
      return NextResponse.json({ success: true, data: responseService });

    case "inspection-package":
      return NextResponse.redirect("/blog");
  }

  return NextResponse.json({ success: true, data: slug });
}

export async function POST(req: Request) {
  try {
    console.log(req);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, code: error, message: "Error processing request" },
      { status: 500 }
    );
  }
}

async function articleSitemap() {
  const db = client.db("rheinmedika");
  const collection = db.collection<ArticleProps>("articles");
  const options = {
    projection: {
      _id: 0,
      slugs: 1,
      createdAt: 1,
    },
  };

  try {
    const data = await collection.find({}, options).toArray();

    return data.map((article) => ({
      url: `${process.env.APP_URL}/blogs/${article.slugs}`,
      lastModified: article.createdAt,
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function servicesSitemap() {
  const db = client.db("rheinmedika");
  const collection = db.collection<ServiceProps>("services");
  const options = {
    projection: {
      _id: 0,
      slugs: 1,
      createdAt: 1,
    },
  };

  try {
    const data = await collection.find({}, options).toArray();

    return data.map((article) => ({
      url: `${process.env.APP_URL}/services/${article.name}`,
      lastModified: article.createdAt,
      changeFrequency: "never",
      priority: 0.8,
    }));
  } catch (error) {
    console.error(error);
    return error;
  }
}
