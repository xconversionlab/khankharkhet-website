import { useEffect, useState } from "react";
import { frames, planChecks } from "@/content/destination";
import { SourceTag } from "@/components/site/blocks";
import { cn } from "@/lib/cn";

const KEY = "khankharkhet-plan-checks";

export function Planner() {
  const [frameId, setFrameId] = useState(frames[0]?.id ?? "");
  const [checks, setChecks] = useState<string[]>([]);
  const frame = frames.find((item) => item.id === frameId) ?? frames[0];

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) ?? "[]") as unknown;
      if (Array.isArray(saved)) setChecks(saved.filter((item) => typeof item === "string"));
    } catch {
      /* ignore a broken draft */
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(checks));
  }, [checks]);

  if (!frame) return null;

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Draft itineraries">
          {frames.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={item.id === frame.id}
              onClick={() => setFrameId(item.id)}
              className={cn(
                "min-h-11 rounded-full px-4 text-sm",
                item.id === frame.id ? "bg-pine text-paper" : "bg-mist text-ink",
              )}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <SourceTag status="placeholder" />
          <p className="text-sm text-stone">Not a bookable package.</p>
        </div>
        <p className="mt-4 max-w-xl text-lg leading-relaxed">{frame.summary}</p>
        <ol className="mt-8 border-l border-line">
          {frame.days.map((day) => (
            <li key={`${frame.id}-${day.label}-${day.title}`} className="py-5 pl-6">
              <p className="text-xs tracking-widest text-copper-deep uppercase">{day.label}</p>
              <h3 className="mt-1 text-2xl">{day.title}</h3>
              <p className="mt-2 max-w-xl text-stone">{day.body}</p>
            </li>
          ))}
        </ol>
      </div>
      <aside className="bg-foam p-6 lg:col-span-5 lg:p-8">
        <h3 className="text-3xl">Before you promise a date</h3>
        <p className="mt-3 text-sm leading-relaxed text-stone">
          Tick these on this device. They stay in your browser and are not sent anywhere.
        </p>
        <ul className="mt-6 space-y-3">
          {planChecks.map((item) => {
            const checked = checks.includes(item.id);
            return (
              <li key={item.id}>
                <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm leading-relaxed">
                  <input
                    type="checkbox"
                    className="mt-1 size-4 accent-pine"
                    checked={checked}
                    onChange={() =>
                      setChecks((current) =>
                        checked ? current.filter((id) => id !== item.id) : [...current, item.id],
                      )
                    }
                  />
                  <span>{item.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-sm tabular-nums text-stone">
          {checks.length} of {planChecks.length} checked
        </p>
      </aside>
    </div>
  );
}
