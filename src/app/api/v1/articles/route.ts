import { ArticlesModel } from "@/models/article";

enum IRequirement {
  META = "meta",
  FEEDS = "feeds",
  RSS = "rss",
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requirement = searchParams.get("requirement") as IRequirement;
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

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
    skip: (parseInt(page!) - 1) * parseInt(limit!),
  };

  const aggregationPipeline = [
    {
      $facet: {
        data: [
          { $sort: { createdAt: -1 } },
          { $skip: options.skip },
          { $limit: options.limit },
          {
            $project: {
              title: 1,
              view: 1,
              slugs: 1,
              category: 1,
              thumbnail: 1,
              description: 1,
              keywords: 1,
              author: 1,
              editor: 1,
              status: 1,
              createdAt: 1,
              updateAt: 1,
            },
          },
        ],
        totalCount: [{ $count: "count" }],
      },
    },
  ];

  try {
    if (requirement === IRequirement.META) {
      const data = await ArticlesModel.find({}, options).toArray();

      if (!data.length) {
        return new Response(
          JSON.stringify({ status: false, message: "Data is empty" }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }

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
      const result = await ArticlesModel.aggregate(
        aggregationPipeline
      ).toArray();

      const { data, totalCount } = result[0];
      const total = totalCount.length > 0 ? totalCount[0].count : 0;
      const lastPage = Math.ceil(total / options.limit);

      return new Response(
        JSON.stringify({
          status: true,
          data: data,
          pagination: {
            from: options.skip + 1,
            to: options.skip + data.length,
            total,
            per_page: options.limit,
            current_page: page,
            last_page: lastPage,
          },
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ status: false, message: error }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
