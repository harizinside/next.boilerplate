import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function Loading() {
  return (
    <>
      <div className="p-4">
        <ArrowPathIcon
          aria-hidden="true"
          className="size-6 text-gray-600 animate-spin"
        />
        <p className="font-medium">Loading...</p>
      </div>
    </>
  );
}
