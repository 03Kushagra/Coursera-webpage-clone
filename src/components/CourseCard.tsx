import { Star } from "lucide-react";

interface Course {
  id: number;
  title: string;
  university: string;
  universityShort: string;
  image: string;
  rating: number;
  reviews: string;
  level: string;
  type: string;
  duration: string;
  skills: string[];
  badge: string | null;
  isNew?: boolean;
  buildDegree?: boolean;
}

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  const isGradient = course.image.startsWith("linear-gradient");

  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden group shadow-sm 
      hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 
      flex flex-col h-[420px] max-h-[420px]"
    >
      {/* Image Section */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        {isGradient ? (
          <div
            style={{ background: course.image }}
            className="w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Badges */}
        {course.badge && (
          <div className="absolute top-3 right-3 flex items-center gap-2">
            {course.isNew && (
              <span className="bg-blue-600 text-white px-2 py-1 text-[10px] font-semibold rounded-full shadow-sm">
                New
              </span>
            )}
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                course.badge === "Free Trial"
                  ? "bg-white text-gray-900 border border-gray-200"
                  : "bg-blue-100 text-blue-900"
              }`}
            >
              {course.badge}
            </span>
          </div>
        )}
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between flex-1 p-5">
        <div>
          {/* University */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
              {course.universityShort}
            </div>
            <span className="text-xs text-gray-600 font-medium truncate">
              {course.university}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 mb-2 text-base leading-snug line-clamp-2">
            {course.title}
          </h3>

          {/* Skills */}
          <div className="text-xs text-gray-600 mb-3 line-clamp-2">
            <span className="font-semibold text-gray-700">
              Skills you'll gain:
            </span>{" "}
            {course.skills.join(", ")}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">{course.rating}</span>
            </div>
            <span className="text-xs text-gray-500">
              · {course.reviews} reviews
            </span>
          </div>
        </div>

        {/* Metadata + Degree Link Section */}
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-2 text-xs text-gray-600 relative mb-2">
            <div className="relative inline-block">
              <span className="relative z-10">{course.level}</span>
              <span
                className="absolute left-0 bottom-[-2px] h-[2px] bg-blue-600 rounded-full w-0 
                transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
                group-hover:w-full"
              ></span>
            </div>
            <span>•</span>
            <span>{course.type}</span>
            <span>•</span>
            <span>{course.duration}</span>
          </div>

          {/* Degree Link */}
          {course.buildDegree && (
            <div className="pt-2 border-t border-gray-100">
              <a
                href="#"
                className="text-xs text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1 font-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Build toward a degree
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
