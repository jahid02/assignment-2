import { useState } from "react";
import PasswordCards from "./PasswordCards";
import SearchInput from "./SearchInput";

const MainContent = ({ passwordsCardData }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  if (search.length > 0) {
    passwordsCardData = passwordsCardData.filter((item) => {
      return item.domain.toLowerCase().includes(search.toLowerCase()) || item.username.toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <main className="p-8">
      <div className="max-w-7xl mx-auto space-y-10 px-4">
        {/* Search, Sort, and Filter Buttons */}
        <section className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* Search Bar */}
            <SearchInput handleSearch={handleSearch} />

            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18l-8 8v6l-4 4v-8z"></path>
                </svg>
                Sort by
              </button>
            </div>
          </div>
        </section>

        {/* Password Cards Grid */}
        <PasswordCards passwordsCardData={passwordsCardData} />
      </div>
    </main>
  );
};

export default MainContent;
