"use client";

import { useId, useState } from "react";
import { Check } from "./Icons";

/**
 * A small, private "getting ready" checklist. Selections stay in the
 * visitor's browser tab only and are never stored or sent anywhere.
 */
export function PrepChecklist({ items }: { items: string[] }) {
  const base = useId();
  const [done, setDone] = useState<boolean[]>(() => items.map(() => false));
  const count = done.filter(Boolean).length;

  return (
    <div className="prep-checklist">
      <ul>
        {items.map((item, i) => (
          <li key={item}>
            <input
              type="checkbox"
              id={`${base}-${i}`}
              checked={done[i]}
              onChange={() => setDone((d) => d.map((v, j) => (j === i ? !v : v)))}
            />
            <label htmlFor={`${base}-${i}`}>
              <span className="prep-box" aria-hidden="true">
                <Check size={16} />
              </span>
              {item}
            </label>
          </li>
        ))}
      </ul>
      <p className="prep-progress" aria-live="polite">
        {count === items.length ? "You are all set for your visit." : `${count} of ${items.length} ready`}
      </p>
    </div>
  );
}
