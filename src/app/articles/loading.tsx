import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function Loading() {
  return (
    <>
      <div className="p-4">
        <p className="font-medium flex flex-row gap-2">
          <ArrowPathIcon
            aria-hidden="true"
            className="size-6 text-gray-600 animate-spin"
          />
          Loading articles...
        </p>
      </div>
    </>
  );
}
