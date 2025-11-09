import { ChevronLeft, ChevronRight } from 'lucide-react';

function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button className="p-2 hover:bg-gray-100 rounded" disabled>
        <ChevronLeft className="w-5 h-5 text-gray-400" />
      </button>

      <button className="w-8 h-8 bg-gray-900 text-white rounded font-semibold">1</button>
      <button className="w-8 h-8 hover:bg-gray-100 rounded font-semibold">2</button>
      <button className="w-8 h-8 hover:bg-gray-100 rounded font-semibold">3</button>
      <button className="w-8 h-8 hover:bg-gray-100 rounded font-semibold">4</button>
      <button className="w-8 h-8 hover:bg-gray-100 rounded font-semibold">5</button>
      <span className="px-2">...</span>
      <button className="w-8 h-8 hover:bg-gray-100 rounded font-semibold">20</button>

      <button className="p-2 hover:bg-gray-100 rounded">
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}

export default Pagination;
