import { Info } from "lucide-react";
import { useState } from "react";

function FilterSidebar() {
  const [showMoreSubjects, setShowMoreSubjects] = useState(false);
  const [showMoreLanguages, setShowMoreLanguages] = useState(false);

  return (
    <aside className="w-56 flex-shrink-0 h-[calc(100vh-8rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 bg-white rounded-md">
      <div className="pb-8">
        <h2 className="text-lg font-semibold mb-4 sticky top-0 bg-white pt-2 pb-2 border-b border-gray-100 z-10">
          Filter by
        </h2>

        {/* Subject */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Subject</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-700">
                Business <span className="text-gray-500">(198)</span>
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-700">
                Social Sciences <span className="text-gray-500">(10)</span>
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-700">
                Physical Science <span className="text-gray-500">(8)</span>
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-700">
                Data Science <span className="text-gray-500">(7)</span>
              </span>
            </label>
          </div>
          <button
            onClick={() => setShowMoreSubjects(!showMoreSubjects)}
            className="text-blue-600 text-sm mt-2 hover:underline"
          >
            Show 4 more
          </button>
        </div>

        {/* Language */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-1">
            Language
            <Info className="w-4 h-4 text-gray-400" />
          </h3>
          <div className="space-y-2 mt-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-700">
                English <span className="text-gray-500">(188)</span>
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-700">
                Spanish <span className="text-gray-500">(129)</span>
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-700">
                French <span className="text-gray-500">(114)</span>
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-700">
                Portuguese <span className="text-gray-500">(113)</span>
              </span>
            </label>
          </div>
          <button
            onClick={() => setShowMoreLanguages(!showMoreLanguages)}
            className="text-blue-600 text-sm mt-2 hover:underline"
          >
            Show 34 more
          </button>
        </div>

        {/* Learning Product */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Learning Product</h3>
          <div className="space-y-2">
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mt-0.5" />
              <div>
                <span className="text-sm text-gray-700">
                  Guided Projects <span className="text-gray-500">(13)</span>
                </span>
                <p className="text-xs text-gray-500 mt-0.5">
                  Build job-relevant skills in under 2 hours with hands-on
                  tutorials.
                </p>
              </div>
            </label>

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mt-0.5" />
              <div>
                <span className="text-sm text-gray-700">
                  Courses <span className="text-gray-500">(173)</span>
                </span>
                <p className="text-xs text-gray-500 mt-0.5">
                  Learn from top instructors with graded assignments, videos, and
                  discussion forums.
                </p>
              </div>
            </label>

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mt-0.5" />
              <div>
                <span className="text-sm text-gray-700">
                  Specializations <span className="text-gray-500">(40)</span>
                </span>
                <p className="text-xs text-gray-500 mt-0.5">
                  Get in-depth knowledge of a subject by completing a series of
                  courses and projects.
                </p>
              </div>
            </label>

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mt-0.5" />
              <div>
                <span className="text-sm text-gray-700">
                  Professional Certificates{" "}
                  <span className="text-gray-500">(1)</span>
                </span>
                <p className="text-xs text-gray-500 mt-0.5">
                  Earn career credentials from industry leaders that demonstrate
                  your expertise.
                </p>
              </div>
            </label>

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mt-0.5" />
              <div>
                <span className="text-sm text-gray-700">
                  MasterTrack® Certificates{" "}
                  <span className="text-gray-500">(2)</span>
                </span>
                <p className="text-xs text-gray-500 mt-0.5">
                  Earn career credentials while taking courses that count towards
                  your degree.
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default FilterSidebar;
