import { useState } from "react";
import { faqs } from "@/content/destination";
import { SourceTag } from "@/components/site/blocks";
import { cn } from "@/lib/cn";

export function FaqList() {
  const [open, setOpen] = useState<string>(faqs[0]?.id ?? "");
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((item) => {
        const expanded = open === item.id;
        return (
          <div key={item.id}>
            <h2>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? "" : item.id)}
              >
                <span className="font-display text-2xl leading-tight text-ink sm:text-3xl">{item.q}</span>
                <span className="mt-1 text-sm text-stone" aria-hidden="true">
                  {expanded ? "Close" : "Open"}
                </span>
              </button>
            </h2>
            <div className={cn("grid", expanded ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <SourceTag status={item.status === "placeholder" ? "placeholder" : "profile"} />
                <p className="mt-3 max-w-3xl leading-relaxed text-stone">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
