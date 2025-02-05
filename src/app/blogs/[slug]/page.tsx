import MdxLayout from "@/app/mdx-page/layout";

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
        <input type="number" name="full_number" />
        <input type="file" name="full_file" />
        <input type="text" name="full_name" />

        <MdxLayout>
          <Post />
        </MdxLayout>
      </>
    );
  } catch (error) {
    console.log(error);
    return (
      <p className="text-center text-red-500 text-xl ">Post not found.s</p>
    );
  }
}
