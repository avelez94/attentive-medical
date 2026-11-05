"use client";

import { useEffect, useState } from "react";
import { External } from "./Icons";

type Props = {
  url: string;
};

/**
 * Embeds the practice's official Tebra online scheduler in an iframe.
 * Tebra controls everything inside the frame; this site only provides the
 * surrounding container, a loading state and an always visible fallback
 * link. No appointment data passes through this website.
 */
export function TebraScheduler({ url }: Props) {
  const [status, setStatus] = useState<"loading" | "loaded" | "slow">("loading");

  useEffect(() => {
    const t = window.setTimeout(() => setStatus((s) => (s === "loading" ? "slow" : s)), 12000);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="scheduler">
      <div className="scheduler-frame" data-status={status}>
        {status !== "loaded" && (
          <div className="scheduler-loading" role="status" aria-live="polite">
            <span className="spinner" aria-hidden="true" />
            <p>{status === "slow" ? "The scheduler is taking longer than usual to load." : "Loading the scheduler"}</p>
            {status === "slow" && (
              <a className="btn btn-primary btn-sm" href={url} target="_blank" rel="noopener noreferrer">
                <span>Open Tebra Scheduler</span>
                <External size={16} />
              </a>
            )}
          </div>
        )}
        <iframe
          src={url}
          title="Tebra online appointment scheduler"
          onLoad={() => setStatus("loaded")}
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className="scheduler-fallback">
        <p>Scheduler not loading, or easier to use full screen?</p>
        <a className="btn btn-outline btn-sm" href={url} target="_blank" rel="noopener noreferrer">
          <span>Open Tebra Scheduler</span>
          <External size={16} />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
