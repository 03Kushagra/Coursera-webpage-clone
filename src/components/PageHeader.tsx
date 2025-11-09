import { ChevronRight } from "lucide-react";

function PageHeader() {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-blue-50 to-emerald-200 rounded-2xl p-10 shadow-sm">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <a href="#" className="hover:text-blue-600 transition-colors">
          Business
        </a>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">Finance</span>
      </nav>

      {/* Header Content */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-3">Finance</h1>
          <p className="text-gray-700 text-lg max-w-2xl leading-relaxed">
            Master finance through courses covering investment, accounting, and
            risk management — prepare for success in banking and corporate
            finance.
          </p>
        </div>

        <div className="flex gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-3 text-center shadow-sm">
            <p className="text-3xl font-semibold text-gray-900">41</p>
            <p className="text-sm text-gray-500">Credentials</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-3 text-center shadow-sm">
            <p className="text-3xl font-semibold text-gray-900">173</p>
            <p className="text-sm text-gray-500">Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
