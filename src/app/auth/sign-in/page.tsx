import { Metadata } from "next";
import FormLogin from "./form";

export const metadata: Metadata = {
  title: "Blog | My Website",
  description: "Read the latest blog posts.",
};

export default function Page() {
  return (
    <>
      <div className="p-6">
        <FormLogin />
      </div>
    </>
  );
}
