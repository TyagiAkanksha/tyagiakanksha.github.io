"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SHELVES, type ShelfId } from "@/lib/shelves";

export type ShelfTab = {
  id: ShelfId;
  label: string;
  count: number;
  panel: React.ReactNode;
};

const isShelfId = (value: string): value is ShelfId =>
  SHELVES.some((s) => s.id === value);

export function ProjectShelves({ shelves }: { shelves: ShelfTab[] }) {
  const [active, setActive] = useState<ShelfId>("engineering");
  const tabRefs = useRef<Partial<Record<ShelfId, HTMLButtonElement | null>>>({});

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (!isShelfId(id)) return;
      setActive(id);
      document.getElementById("projects")?.scrollIntoView();
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const select = useCallback((id: ShelfId) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const last = shelves.length - 1;
    let next: number;
    if (e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    const id = shelves[next].id;
    select(id);
    tabRefs.current[id]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Project shelves"
        className="mb-2 flex gap-0 overflow-x-auto overflow-y-hidden shadow-[inset_0_-1px_0_var(--line)] sm:-mx-1 sm:gap-1 sm:px-1"
      >
        {shelves.map((s, i) => {
          const selected = s.id === active;
          return (
            <button
              key={s.id}
              ref={(el) => {
                tabRefs.current[s.id] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${s.id}`}
              aria-controls={s.id}
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(s.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`shrink-0 whitespace-nowrap focus-visible:-outline-offset-2! border-b-2 px-1 py-2 font-display text-xs font-semibold sm:px-3 sm:text-sm transition-colors ${
                selected
                  ? "border-accent text-accent"
                  : "border-transparent text-muted hover:text-fg"
              }`}
            >
              {s.label}{" "}
              <span className="font-mono text-xs font-normal text-faint">
                {s.count}
              </span>
            </button>
          );
        })}
      </div>
      {shelves.map((s) => (
        <div
          key={s.id}
          role="tabpanel"
          id={s.id}
          aria-labelledby={`tab-${s.id}`}
          hidden={s.id !== active}
        >
          {s.panel}
        </div>
      ))}
      <noscript>
        <style
          dangerouslySetInnerHTML={{
            __html: '[role="tabpanel"][hidden]{display:block !important}',
          }}
        />
      </noscript>
    </div>
  );
}
