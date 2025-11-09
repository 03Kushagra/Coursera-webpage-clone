import { useEffect, useRef, useState, useMemo } from "react";
import CourseCard from "./CourseCard";
import Pagination from "./Pagination";
import coursesData from "../data/courses.json";

function CourseGrid() {
  const [courses, setCourses] = useState<any[]>([]);
  const [hovered, setHovered] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Best Match");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const sortOptions = ["Best Match", "Highest Rated", "Newest"];

  useEffect(() => {
    setCourses(coursesData);
  }, []);

  // update blue slider under selected sort
  useEffect(() => {
    const index = sortOptions.indexOf(selectedSort);
    const btn = btnRefs.current[index];
    if (btn) {
      const { offsetWidth, offsetLeft } = btn;
      setIndicatorStyle({ width: offsetWidth, left: offsetLeft });
    }
  }, [selectedSort, hovered]);

  // filter + sort logic
  const visibleCourses = useMemo(() => {
    let filtered = courses;
    if (selectedLevel !== "All") {
      filtered = courses.filter(
        (c) => c.level.toLowerCase() === selectedLevel.toLowerCase()
      );
    }

    const sorted = [...filtered];
    if (selectedSort === "Highest Rated") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "Newest") {
      sorted.sort((a, b) => (b.created_at ?? b.id ?? 0) - (a.created_at ?? a.id ?? 0));
    }
    return sorted;
  }, [courses, selectedLevel, selectedSort]);

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        {/* Level Filters */}
        <div className="flex items-center gap-3">
          {["All", "Beginner", "Intermediate", "Mixed"].map((label, i) => (
            <button
              key={i}
              onClick={() => setSelectedLevel(label)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200
                ${
                  selectedLevel === label
                    ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                    : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Sort bar with smooth hover highlight */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {!hovered ? (
            <button className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all">
              Sort by
            </button>
          ) : (
            <div className="relative flex bg-white border border-gray-200 shadow-sm rounded-full px-1 py-1 transition-all duration-200 ease-out">
              {/* Sliding blue indicator */}
              <div
                className="absolute top-1 left-0 h-[28px] bg-blue-600 rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  width: `${indicatorStyle.width}px`,
                  transform: `translateX(${indicatorStyle.left}px)`,
                }}
              ></div>

              {sortOptions.map((opt, i) => (
                <button
                  key={i}
                  ref={(el) => (btnRefs.current[i] = el)}
                  onClick={() => setSelectedSort(opt)}
                  className={`relative z-10 px-4 py-1 text-sm font-medium rounded-full transition-all duration-150 ${
                    selectedSort === opt
                      ? "text-white"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-3 gap-6">
        {visibleCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className="mt-8">
        <Pagination />
      </div>
    </div>
  );
}

export default CourseGrid;
