import { Search, ChevronDown } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      {/* Top Navigation */}
      <nav className="bg-gray-900 text-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-8 text-sm">
          {[
            "For Individuals",
            "For Businesses",
            "For Universities",
            "For Governments",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Left Section */}
        <div className="flex items-center gap-6 flex-1">
          <a
            href="#"
            className="text-blue-600 font-bold text-2xl hover:opacity-90 transition-opacity"
          >
            coursera
          </a>

          <button className="text-gray-700 text-sm flex items-center gap-1 hover:text-blue-600 transition-colors">
            Explore <ChevronDown className="w-4 h-4" />
          </button>

          {/* Search Bar */}
          <div className="flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full pl-4 pr-12 py-2 text-sm border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
          >
            Log In
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all border border-blue-600 shadow-sm"
          >
            Join for Free
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
