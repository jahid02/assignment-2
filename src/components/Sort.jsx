import { useState } from "react";

const Sort = ({ handleSortOrder, handleSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18l-8 8v6l-4 4v-8z"></path>
          </svg>
          Sort by
        </button>
      </div>
      {isOpen && (
        <div className="fixed right-36 w-80 p-4 rounded-md border border-neutral-800 bg-neutral-900/80 shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="flex justify-between">
            <h2 className="mb-2 text-lg font-semibold text-neutral-300">Sort Options</h2>
            <span onClick={() => setIsOpen(false)} className="cursor-pointer px-3 py-1 rounded-full hover:bg-neutral-700/50 transition-colors">
              X
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <label htmlFor="sort-name" className="block text-sm font-medium text-neutral-300">
                Name
              </label>
              <select
                id="sort-name"
                onChange={(e) => handleSortBy(e)}
                className="mt-1 block w-full rounded-sm border border-neutral-800 bg-neutral-900/60 p-5 text-sm py-2 pl-3 pr-10 text-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              >
                <option className="bg-neutral-900 text-white" value="category">
                  Category
                </option>
                <option className="bg-neutral-900 text-white" value="domain">
                  Domain
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="sort-order" className="block text-sm font-medium text-neutral-300">
                Sort by
              </label>
              <select
                id="sort-order"
                onChange={(e) => handleSortOrder(e)}
                className="mt-1 block w-full rounded-sm border border-neutral-800 bg-neutral-900/60 p-5 text-sm py-2 pl-3 pr-10 text-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              >
                <option className="bg-neutral-900 text-neutral-400" value="asc">
                  Asc
                </option>
                <option className="bg-neutral-900 text-neutral-400" value="desc">
                  Desc
                </option>
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sort;
