import { useState } from "react";

const PasswordCardItem = ({ item }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { faviconColor, category, username, password, textIcon, hostname, domain } = item;
  return (
    <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-[${faviconColor}] text-sm font-semibold uppercase text-[${faviconColor}]`}
          >
            {textIcon}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{domain}</h3>
            <p className="text-xs uppercase tracking-wide text-neutral-500">{category}</p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-neutral-400">{hostname}</p>
      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
          <dt className="text-xs uppercase tracking-wide text-neutral-500">Username</dt>
          <dd className="text-neutral-50">{username}</dd>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
          <dt className="text-xs uppercase tracking-wide text-neutral-500">Password</dt>
          <dd className="flex items-center gap-2 text-neutral-50">
            <span>{isRevealed ? password : "••••••••"}</span>
            <button className="text-xs font-semibold text-blue-400 cursor-pointer" onClick={() => setIsRevealed(!isRevealed)}>
              {isRevealed ? "Hide" : "Reveal"}
            </button>
          </dd>
        </div>
      </dl>
    </article>
  );
};

export default PasswordCardItem;
