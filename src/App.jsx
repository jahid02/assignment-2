const App = () => {
  return (
    <>
      {/* Header */}
      <header className="border-b border-neutral-800 bg-gradient-to-b from-neutral-950 via-neutral-900/80 to-transparent">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Vault overview</p>
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <h1 className="text-4xl font-semibold tracking-tight">Good Morning, World!</h1>
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800/80 bg-neutral-900/70 px-4 py-1 text-xs font-medium text-neutral-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                Monday, Nov 10
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-2xl">
              Keep your most-used credentials organised and in sync with every device. Review the snapshot below before adding a new bookmark.
            </p>
          </div>
        </div>
      </header>

      {/* Form */}
      <div className="max-w-7xl mx-auto mt-8 px-4">
        <form className="mb-10 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/70 to-neutral-800/40 p-8 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="mb-8 flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">New bookmark</p>
            <h2 className="text-2xl font-semibold">Store website credentials safely</h2>
            <p className="text-sm text-neutral-400">Fill the details below. Your brand color helps us render a matching favicon.</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Website URL Input */}
              <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Website URL</span>
                <input
                  type="url"
                  placeholder="https://example.com"
                  className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                />
                <span className="text-xs text-neutral-500">Include https:// for best results.</span>
              </label>

              {/* Color Picker */}
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Favicon color</p>
                    <p className="text-xs text-neutral-500">Select the accent color we should render.</p>
                  </div>
                  <input
                    type="color"
                    value="#3b82f6"
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
              <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Category</span>
                <select className="w-full bg-transparent text-base text-white outline-none">
                  <option className="bg-neutral-900 text-white">Select category</option>
                  <option className="bg-neutral-900 text-white">Social</option>
                  <option className="bg-neutral-900 text-white">Video</option>
                  <option className="bg-neutral-900 text-white">Design</option>
                  <option className="bg-neutral-900 text-white">Streaming</option>
                  <option className="bg-neutral-900 text-white">Productivity</option>
                  <option className="bg-neutral-900 text-white">Entertainment</option>
                  <option className="bg-neutral-900 text-white">Shopping</option>
                  <option className="bg-neutral-900 text-white">Music</option>
                </select>
                <span className="text-xs text-neutral-500">Helps you filter quicker later.</span>
              </label>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Username Input */}
              <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Username</span>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                />
                <span className="text-xs text-neutral-500">Use workspace or personal handle.</span>
              </label>

              {/* Password Input */}
              <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Password</span>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                />
                <span className="text-xs text-neutral-500">Choose at least 6 characters.</span>
              </label>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-xs text-neutral-500">By submitting you confirm the entry is safe to store.</div>
            <div className="flex flex-1 justify-end gap-3">
              <button
                type="reset"
                className="w-full rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white md:w-auto"
              >
                Clear
              </button>
              <button
                type="submit"
                className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 md:w-auto"
              >
                Add Bookmark
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Main Content */}
      <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-10 px-4">
          {/* Search, Sort, and Filter Buttons */}
          <section className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              {/* Search Bar */}
              <label className="relative flex-1">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search saved credentials"
                  className="w-full rounded-2xl border border-neutral-800 bg-neutral-950/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-neutral-500 transition focus:border-blue-500 focus:bg-neutral-950 focus:outline-none"
                />
              </label>

              <div className="flex flex-wrap gap-2">
                <button className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h18l-8 8v6l-4 4v-8z"></path>
                  </svg>
                  Sort by
                </button>
              </div>
            </div>
          </section>

          {/* Password Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* Card 1 - Facebook */}
            <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-blue-500/10 text-sm font-semibold uppercase text-blue-400">
                    Fb
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Facebook</h3>
                    <p className="text-xs uppercase tracking-wide text-neutral-500">Social</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-400">facebook.com</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Username</dt>
                  <dd className="text-neutral-50">john.doe@email.com</dd>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Password</dt>
                  <dd className="flex items-center gap-2 text-neutral-50">
                    <span>••••••••</span>
                    <button className="text-xs font-semibold text-blue-400">Reveal</button>
                  </dd>
                </div>
              </dl>
            </article>

            {/* Card 2 - YouTube */}
            <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-red-500/10 text-sm font-semibold uppercase text-red-400">
                    Yt
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">YouTube</h3>
                    <p className="text-xs uppercase tracking-wide text-neutral-500">Video</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-400">youtube.com</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Username</dt>
                  <dd className="text-neutral-50">myaccount</dd>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Password</dt>
                  <dd className="flex items-center gap-2 text-neutral-50">
                    <span>••••••••</span>
                    <button className="text-xs font-semibold text-blue-400">Reveal</button>
                  </dd>
                </div>
              </dl>
            </article>

            {/* Card 3 - Dribbble */}
            <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-pink-500/10 text-sm font-semibold uppercase text-pink-300">
                    Db
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Dribbble</h3>
                    <p className="text-xs uppercase tracking-wide text-neutral-500">Design</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-400">dribbble.com</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Username</dt>
                  <dd className="text-neutral-50">designer_pro</dd>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Password</dt>
                  <dd className="flex items-center gap-2 text-neutral-50">
                    <span>••••••••</span>
                    <button className="text-xs font-semibold text-blue-400">Reveal</button>
                  </dd>
                </div>
              </dl>
            </article>

            {/* Card 4 - Twitch */}
            <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-purple-500/10 text-sm font-semibold uppercase text-purple-300">
                    Tw
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Twitch</h3>
                    <p className="text-xs uppercase tracking-wide text-neutral-500">Streaming</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-400">twitch.tv</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Username</dt>
                  <dd className="text-neutral-50">streamer_123</dd>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Password</dt>
                  <dd className="flex items-center gap-2 text-neutral-50">
                    <span>••••••••</span>
                    <button className="text-xs font-semibold text-blue-400">Reveal</button>
                  </dd>
                </div>
              </dl>
            </article>

            {/* Card 5 - GitHub */}
            <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-500/10 text-sm font-semibold uppercase text-neutral-300">
                    Gh
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">GitHub</h3>
                    <p className="text-xs uppercase tracking-wide text-neutral-500">Productivity</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-400">github.com</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Username</dt>
                  <dd className="text-neutral-50">devuser</dd>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Password</dt>
                  <dd className="flex items-center gap-2 text-neutral-50">
                    <span>••••••••</span>
                    <button className="text-xs font-semibold text-blue-400">Reveal</button>
                  </dd>
                </div>
              </dl>
            </article>

            {/* Card 6 - Netflix */}
            <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-red-600/10 text-sm font-semibold uppercase text-red-400">
                    Nx
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Netflix</h3>
                    <p className="text-xs uppercase tracking-wide text-neutral-500">Entertainment</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-400">netflix.com</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Username</dt>
                  <dd className="text-neutral-50">user@email.com</dd>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Password</dt>
                  <dd className="flex items-center gap-2 text-neutral-50">
                    <span>••••••••</span>
                    <button className="text-xs font-semibold text-blue-400">Reveal</button>
                  </dd>
                </div>
              </dl>
            </article>

            {/* Card 7 - Amazon */}
            <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-yellow-500/10 text-sm font-semibold uppercase text-yellow-400">
                    Am
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Amazon</h3>
                    <p className="text-xs uppercase tracking-wide text-neutral-500">Shopping</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-400">amazon.com</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Username</dt>
                  <dd className="text-neutral-50">shopper@email.com</dd>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Password</dt>
                  <dd className="flex items-center gap-2 text-neutral-50">
                    <span>••••••••</span>
                    <button className="text-xs font-semibold text-blue-400">Reveal</button>
                  </dd>
                </div>
              </dl>
            </article>

            {/* Card 8 - Spotify */}
            <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-green-500/10 text-sm font-semibold uppercase text-green-400">
                    Sp
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Spotify</h3>
                    <p className="text-xs uppercase tracking-wide text-neutral-500">Music</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-400">spotify.com</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Username</dt>
                  <dd className="text-neutral-50">musiclover</dd>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Password</dt>
                  <dd className="flex items-center gap-2 text-neutral-50">
                    <span>••••••••</span>
                    <button className="text-xs font-semibold text-blue-400">Reveal</button>
                  </dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-12 py-8 px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a href="#" className="hover:text-white transition">
              Blog
            </a>
            <a href="#" className="hover:text-white transition">
              Features
            </a>
            <a href="#" className="hover:text-white transition">
              Help & Feedback
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">© Learn with Sumit — All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default App;
