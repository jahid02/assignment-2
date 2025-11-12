import { useState } from "react";
import PasswordCards from "./PasswordCards";
import SearchInput from "./SearchInput";
import Sort from "./Sort";

const MainContent = ({ passwordsCardData }) => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("domain");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  let filteredPasswordsCardData = [...passwordsCardData];

  if (filteredPasswordsCardData.length > 0) {
    filteredPasswordsCardData = filteredPasswordsCardData.filter((item) => {
      return item.domain.toLowerCase().includes(search.toLowerCase()) || item.username.toLowerCase().includes(search.toLowerCase());
    });
  }

  filteredPasswordsCardData = filteredPasswordsCardData.sort((a, b) => {
    const valA = a[sortBy]?.toLowerCase() ?? "";
    const valB = b[sortBy]?.toLowerCase() ?? "";

    return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });

  return (
    <main className="p-8">
      <div className="max-w-7xl mx-auto space-y-10 px-4">
        {/* Search, Sort, and Filter Buttons */}
        <section className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* Search Bar */}
            <SearchInput handleSearch={handleSearch} />
            <Sort handleSortOrder={handleSortOrder} handleSortBy={handleSortBy} />
          </div>
        </section>

        {/* Password Cards Grid */}
        <PasswordCards passwordsCardData={filteredPasswordsCardData} />
      </div>
    </main>
  );
};

export default MainContent;
