import { useState } from "react";
import capitalize from "../utils/capitalize";

const initialState = {
  websiteURL: "",
  faviconColor: "#3b82f6",
  category: "",
  username: "",
  password: "",
};

const Form = ({ handleAddPassword }) => {
  const [formData, setFormData] = useState(initialState);
  const [errorData, setErrorData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData(initialState);
    setErrorData(initialState);
  };

  const formValidation = () => {
    let isValid = true;
    const newErrorData = { ...initialState };
    if (!formData.websiteURL) {
      isValid = false;
      newErrorData.websiteURL = "Website URL is required";
    }
    if (
      formData.websiteURL &&
      // eslint-disable-next-line no-useless-escape
      !/^(http(s)?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(formData.websiteURL)
    ) {
      isValid = false;
      newErrorData.websiteURL = "Invalid website URL format";
    }
    if (!formData.category) {
      isValid = false;
      newErrorData.category = "Category is required";
    }
    if (!formData.username) {
      isValid = false;
      newErrorData.username = "Username is required";
    }
    if (!formData.password) {
      isValid = false;
      newErrorData.password = "Password is required";
    }
    if (formData.password && formData.password.length < 6) {
      isValid = false;
      newErrorData.password = "Password must be at least 6 characters";
    }
    setErrorData(newErrorData);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidate = formValidation();
    if (!isValidate) return;

    const hostname = new URL(formData.websiteURL).hostname.replace(/^www\./, "");
    const mainDomain = hostname.split(".")[0];
    const { domain, textIcon } = capitalize(mainDomain);
    const newData = { ...formData, id: crypto.randomUUID(), textIcon: textIcon, hostname, domain: domain };
    delete newData.websiteURL;
    handleAddPassword(newData);
    handleClearForm();
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4">
      <form
        className="mb-10 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/70 to-neutral-800/40 p-8 shadow-2xl shadow-black/40 backdrop-blur"
        onSubmit={handleSubmit}
      >
        <div className="mb-8 flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">New bookmark</p>
          <h2 className="text-2xl font-semibold">Store website credentials safely</h2>
          <p className="text-sm text-neutral-400">Fill the details below. Your brand color helps us render a matching favicon.</p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Website URL Input */}
            <label
              className={`flex flex-col gap-3 rounded-2xl border ${
                errorData.websiteURL ? "border-red-500" : "border-neutral-800"
              } bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Website URL</span>
              <input
                type="url"
                value={formData.websiteURL}
                name="websiteURL"
                onChange={handleInputChange}
                placeholder="https://example.com"
                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
              />
              <span className="text-xs text-neutral-500">Include https:// for best results.</span>
              {errorData.websiteURL && <span className="text-xs text-red-500">{errorData.websiteURL}</span>}
            </label>

            {/* Color Picker */}
            <div
              className={`rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Favicon color</p>
                  <p className="text-xs text-neutral-500">Select the accent color we should render.</p>
                </div>
                <input
                  type="color"
                  name="faviconColor"
                  onChange={handleInputChange}
                  value={formData.faviconColor}
                  className="h-12 w-12 cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 p-1 shadow-inner shadow-black/50"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs text-neutral-500">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/80 text-[10px] font-semibold uppercase text-neutral-400">
                  Hex
                </span>
                <span>Matches any brand primary color.</span>
              </div>
            </div>

            {/* Category Select */}
            <label
              className={`flex flex-col gap-3 rounded-2xl border ${
                errorData.category ? "border-red-500" : "border-neutral-800"
              } bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Category</span>
              <select
                className="w-full bg-transparent text-base text-white outline-none"
                value={formData.category}
                onChange={handleInputChange}
                name="category"
              >
                <option className="bg-neutral-900 text-white" value="">
                  Select category
                </option>
                <option className="bg-neutral-900 text-white" value="Social">
                  Social
                </option>
                <option className="bg-neutral-900 text-white" value="Video">
                  Video
                </option>
                <option className="bg-neutral-900 text-white" value="Design">
                  Design
                </option>
                <option className="bg-neutral-900 text-white" value="Streaming">
                  Streaming
                </option>
                <option className="bg-neutral-900 text-white" value="Productivity">
                  Productivity
                </option>
                <option className="bg-neutral-900 text-white" value="Entertainment">
                  Entertainment
                </option>
                <option className="bg-neutral-900 text-white" value="Shopping">
                  Shopping
                </option>
                <option className="bg-neutral-900 text-white" value="Music">
                  Music
                </option>
              </select>
              <span className="text-xs text-neutral-500">Helps you filter quicker later.</span>
              {errorData.category && <span className="text-xs text-red-500">{errorData.category}</span>}
            </label>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Username Input */}
            <label
              className={`flex flex-col gap-3 rounded-2xl border ${
                errorData.username ? "border-red-500" : "border-neutral-800"
              } bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Username</span>
              <input
                type="text"
                value={formData.username}
                name="username"
                onChange={handleInputChange}
                placeholder="Enter username"
                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
              />
              <span className="text-xs text-neutral-500">Use workspace or personal handle.</span>
              {errorData.username && <span className="text-xs text-red-500">{errorData.username}</span>}
            </label>

            {/* Password Input */}
            <label
              className={`flex flex-col gap-3 rounded-2xl border ${
                errorData.password ? "border-red-500" : "border-neutral-800"
              } bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Password</span>
              <input
                type="password"
                value={formData.password}
                name="password"
                onChange={handleInputChange}
                placeholder="Enter password"
                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
              />
              <span className="text-xs text-neutral-500">Choose at least 6 characters.</span>
              {errorData.password && <span className="text-xs text-red-500">{errorData.password}</span>}
            </label>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-neutral-500">By submitting you confirm the entry is safe to store.</div>
          <div className="flex flex-1 justify-end gap-3">
            <button
              type="reset"
              className="w-full cursor-pointer rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white md:w-auto"
              onClick={handleClearForm}
            >
              Clear
            </button>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 md:w-auto"
            >
              Add Bookmark
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
