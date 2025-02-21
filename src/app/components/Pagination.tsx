interface PaginationProps {
  from: number;
  to: number;
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  from,
  to,
  total,
  current_page,
  last_page,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex flex-col items-center space-y-2 p-4">
      {/* Pagination Info */}
      <p>
        Showing {from} to {to} of {total} entries
      </p>
      <p>
        Page {current_page} of {last_page}
      </p>

      {/* Page Controls */}
      <div className="flex space-x-2">
        {/* Previous Button */}
        <button
          disabled={current_page <= 1}
          onClick={() => onPageChange(current_page - 1)}
          className={`px-3 py-1 border rounded ${
            current_page <= 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(last_page)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              disabled={current_page === pageNumber} // Disable current page button
              className={`px-3 py-1 border rounded ${
                current_page === pageNumber
                  ? "bg-blue-500 text-white cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          disabled={current_page >= last_page}
          onClick={() => onPageChange(Math.min(last_page, current_page + 1))}
          className={`px-3 py-1 border rounded ${
            current_page >= last_page
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
