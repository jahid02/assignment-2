import FilterIcon from "../icon/FilterIcon";

const SearchInput = ({ handleSearch }) => {
  return (
    <label className="relative flex-1">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
        <FilterIcon />
      </span>
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search saved credentials"
        className="w-full rounded-2xl border border-neutral-800 bg-neutral-950/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-neutral-500 transition focus:border-blue-500 focus:bg-neutral-950 focus:outline-none"
      />
    </label>
  );
};

export default SearchInput;
