"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { STYLE_GROUPS, ALL_STYLES } from "@/lib/styles";

const STORAGE_KEY = "uistyles-sidebar-collapsed";
const CHANGE_EVENT = "uistyles:sidebar";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}
function getSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}
function getServerSnapshot() {
  return false;
}

export function Sidebar() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const collapsed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, collapsed ? "0" : "1");
    } catch {
      /* private mode */
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  const q = query.trim().toLowerCase();
  const groups = STYLE_GROUPS.map((group) => ({
    ...group,
    styles: group.styles.filter(
      (style) =>
        !q ||
        style.name.toLowerCase().includes(q) ||
        style.slug.includes(q),
    ),
  })).filter((group) => group.styles.length > 0);

  return (
    <aside
      className={`relative z-40 hidden h-full shrink-0 flex-col border-r border-line bg-panel transition-[width] duration-300 ease-in-out lg:flex ${
        collapsed ? "w-16" : "w-72"
      }`}
    >
      {/* collapse toggle — rides the border edge */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={!collapsed}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        data-cursor
        data-cursor-label={collapsed ? "Expand" : "Collapse"}
        className="absolute -right-3 top-16 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-line bg-panel-2 text-muted shadow-[0_4px_14px_rgba(0,0,0,0.5)] transition-colors hover:text-paper"
      >
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden
          className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
        >
          <path d="M6.2 1.5L3.4 5l2.8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* brand */}
      <div className={`border-b border-line ${collapsed ? "px-2 pb-4 pt-6" : "px-6 pb-5 pt-6"}`}>
        <Link
          href="/"
          data-cursor
          data-cursor-label="Home"
          className="group block"
          title="uistyles — home"
        >
          {collapsed ? (
            <span className="block text-center font-serif text-[26px] leading-none text-paper">
              u<span className="italic text-white/60">.</span>
            </span>
          ) : (
            <>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-[34px] leading-none tracking-tight text-paper">
                  uistyles
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted transition-colors group-hover:text-paper">
                  / index
                </span>
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-muted">
                The UI Style Index — 30 styles,<br />one language.
              </p>
            </>
          )}
        </Link>

        {/* filter */}
        {!collapsed && (
          <label className="mt-5 flex cursor-text items-center gap-2 border border-line bg-panel-2 px-3 py-2 transition-colors focus-within:border-white/25">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <circle cx="5.5" cy="5.5" r="4" stroke="#8a8a8a" strokeWidth="1.2" />
              <path d="M8.7 8.7L11 11" stroke="#8a8a8a" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter styles…"
              aria-label="Filter styles"
              className="w-full bg-transparent font-mono text-[11px] tracking-wide text-paper placeholder:text-muted focus:outline-none"
            />
            <kbd className="font-mono text-[9px] text-muted">{ALL_STYLES.length}</kbd>
          </label>
        )}
        {collapsed && (
          <button
            type="button"
            onClick={toggle}
            aria-label="Expand sidebar to filter styles"
            data-cursor
            className="mx-auto mt-4 flex h-9 w-9 items-center justify-center text-muted transition-colors hover:text-paper"
          >
            <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden>
              <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.2" />
              <path d="M8.7 8.7L11 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>

      {/* style index */}
      <nav className={`hscroll flex-1 overflow-y-auto ${collapsed ? "px-1.5 py-3" : "px-3 py-4"}`}>
        {groups.map((group) => (
          <div key={group.name} className="mb-5">
            {collapsed ? (
              <div className="mx-auto mb-2 h-px w-6 bg-white/10" aria-hidden />
            ) : (
              <p className="px-3 pb-2 font-mono text-[9px] uppercase tracking-[0.28em] text-muted">
                {group.name}
              </p>
            )}
            <ul className={collapsed ? "space-y-0.5" : ""}>
              {group.styles.map((style) => {
                const href = `/styles/${style.slug}`;
                const active = pathname === href;
                return (
                  <li key={style.slug}>
                    <Link
                      href={href}
                      data-cursor
                      title={collapsed ? style.name : undefined}
                      aria-label={collapsed ? style.name : undefined}
                      aria-current={active ? "page" : undefined}
                      className={`group flex items-baseline border-l transition-all duration-200 ${
                        collapsed
                          ? "justify-center border-l-0 border-transparent px-0 py-[7px]"
                          : "gap-3 px-3 py-[7px]"
                      } ${
                        active
                          ? collapsed
                            ? "bg-paper text-ink"
                            : "border-paper bg-white/[0.06] text-paper"
                          : "text-muted hover:text-paper " + (collapsed ? "" : "border-transparent hover:border-white/20 hover:bg-white/[0.03]")
                      } ${collapsed && active ? "rounded-sm" : ""}`}
                    >
                      <span
                        className={`font-mono text-[10px] tabular-nums transition-colors ${
                          active
                            ? collapsed
                              ? "text-ink"
                              : "text-paper"
                            : "text-muted/70 group-hover:text-muted"
                        }`}
                      >
                        {String(style.index).padStart(2, "0")}
                      </span>
                      {!collapsed && (
                        <>
                          <span className="flex-1 truncate text-[12.5px] leading-snug">
                            {style.name}
                          </span>
                          <span
                            className={`h-1 w-1 rounded-full transition-colors ${
                              style.status === "available"
                                ? "bg-paper"
                                : "bg-white/15 group-hover:bg-white/30"
                            }`}
                            title={style.status === "available" ? "Published" : "Coming soon"}
                          />
                        </>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        {!collapsed && groups.length === 0 && (
          <p className="px-3 py-6 font-mono text-[11px] text-muted">
            No styles match “{query}”.
          </p>
        )}
      </nav>

      {/* footer */}
      <div className={`border-t border-line ${collapsed ? "px-2 py-4" : "px-6 py-4"}`}>
        {collapsed ? (
          <p className="text-center font-mono text-[9px] text-muted/70" title="uistyles © 2026">
            ©26
          </p>
        ) : (
          <p className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.2em] text-muted/70">
            uistyles © 2026<br />
            Learn the look. Steal the classes.
          </p>
        )}
      </div>
    </aside>
  );
}
