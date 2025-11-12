const Sort = ({ handleSortType, handleSortBy }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18l-8 8v6l-4 4v-8z"></path>
        </svg>
        Sort by
      </button>
    </div>
  );
};

export default Sort;
