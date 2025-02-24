import { XCircleIcon } from "@heroicons/react/20/solid";

interface AlertProps {
  message: string;
  type: "success" | "error" | "warning" | "info";
}

export default function Alert({ message, type }: AlertProps) {
  return (
    <div
      className={`flex items-center justify-between bg-${type}-100 border-l-4 border-${type}-500 p-4`}
    >
      <div className="flex items-center">
        <div className="text-lg text-${type}-700">
          <XCircleIcon className="h-5 w-5" />
        </div>
        <div className="ml-3">
          <p className={`text-sm text-${type}-700`}>{message}</p>
        </div>
      </div>
    </div>
  );
}
