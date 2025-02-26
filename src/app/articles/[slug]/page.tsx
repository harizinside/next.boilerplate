import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | My Website",
  description: "Read the latest blog posts.",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { default: Post } = await import(`@/content/${slug}.mdx`);
    return (
      <>
        <div className="prose lg:prose-md">
          <Post />
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
    return (
      <p className="text-center text-red-500 text-xl ">Post not found.s</p>
    );
  }
}
