import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | My Website",
  description: "Read the latest blog posts.",
};

export default async function Page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-2xl font-bold">Password Recovery</h1>
        <p className="mt-2">Your recovery token: {token}</p>
        <input
          type="password"
          placeholder="Enter new password"
          className="mt-4 p-2 border rounded"
        />
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Reset Password
        </button>
      </div>
    </>
  );
}
