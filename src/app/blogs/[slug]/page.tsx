import MdxLayout from "@/app/mdx-page/layout";
import { Input } from "@headlessui/react";

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
        <Input type="number" name="full_number" />
        <Input type="file" name="full_file" />
        <Input type="text" name="full_name" />

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
