import Header from "./components/Header";
import PageHeader from "./components/PageHeader";
import FilterSidebar from "./components/FilterSidebar";
import CourseGrid from "./components/CourseGrid";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-[90rem] mx-auto px-8 py-10">
        <PageHeader />

        <div className="flex gap-10 mt-10">
          {/* Sidebar */}
          <aside
            className="w-64 flex-shrink-0 sticky top-28 self-start h-fit 
                       bg-white/80 backdrop-blur-lg border border-gray-100/80 
                       shadow-[0_2px_10px_rgba(0,0,0,0.05)] rounded-xl p-5 
                       transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          >
            <FilterSidebar />
          </aside>

          {/* Main content area */}
          <div
            className="flex-1 overflow-y-auto pr-2
                       scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
                       hover:scrollbar-thumb-gray-400"
          >
            <CourseGrid />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
