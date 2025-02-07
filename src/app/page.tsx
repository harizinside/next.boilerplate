import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | My Website",
  description: "Read the latest blog posts.",
};

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
    </>
  );
}
