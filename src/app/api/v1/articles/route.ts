import { ArticlesModel } from "@/models/article";

enum IRequirement {
  META = "meta",
  FEEDS = "feeds",
  RSS = "rss",
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requirement = searchParams.get("requirement") as IRequirement;
  const limit = searchParams.get("limit");
  const skip = searchParams.get("skip");

  if (!Object.values(IRequirement).includes(requirement)) {
    return new Response(
      JSON.stringify({ status: false, message: "Invalid requirement" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const options = {
    projection: {
      _id: 0,
    },
    limit: limit ? parseInt(limit) : 10,
    skip: skip ? parseInt(skip) : 0,
  };

  try {
    const data = await ArticlesModel.find({}, options).toArray();

    if (!data.length) {
      return new Response(
        JSON.stringify({ status: false, message: "Data is empty" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    if (requirement === IRequirement.META) {
      const resp = data.map((article) => ({
        url: `${Bun.env.APP_URL}/blogs/${article.slugs}`,
        lastModified: article.createdAt,
        changeFrequency: "weekly",
        priority: 0.8,
      }));

      return new Response(JSON.stringify({ status: true, data: resp }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else if (requirement === IRequirement.RSS) {
      return new Response(JSON.stringify({ status: true, data: data }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ status: false, message: error }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
