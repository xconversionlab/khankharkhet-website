import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { gallery, visualNote } from "@/content/destination";
import { cn } from "@/lib/cn";

const themes = ["All", ...Array.from(new Set(gallery.map((item) => item.theme)))];

export function GalleryView() {
  const [theme, setTheme] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const items = useMemo(
    () => gallery.filter((item) => theme === "All" || item.theme === theme),
    [theme],
  );
  const current = index === null ? null : items[index];

  useEffect(() => {
    setIndex(null);
  }, [theme]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setIndex((value) => (value === null ? value : (value + 1) % items.length));
      if (event.key === "ArrowLeft")
        setIndex((value) => (value === null ? value : (value - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length]);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-4" role="tablist" aria-label="Gallery themes">
        {themes.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={theme === item}
            onClick={() => setTheme(item)}
            className={cn(
              "min-h-11 shrink-0 rounded-full px-4 text-sm",
              theme === item ? "bg-pine text-paper" : "bg-mist text-ink",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-stone">{visualNote}</p>
      <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
        {items.map((item, itemIndex) => (
          <li
            key={item.id}
            className={cn(
              "col-span-1 md:col-span-4",
              itemIndex % 5 === 0 && "md:col-span-8",
              item.theme === "Ridge" && item.id === "path" && "md:col-span-4 md:row-span-2",
            )}
          >
            <button
              type="button"
              onClick={() => setIndex(itemIndex)}
              className="group block w-full text-left"
            >
              <span className="block overflow-hidden bg-mist">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </span>
              <span className="mt-2 block text-xs tracking-widest text-stone uppercase">{item.theme}</span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog.Root open={current !== null} onOpenChange={(open) => !open && setIndex(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-pine-deep/92" />
          <Dialog.Content className="fixed inset-0 z-50 flex flex-col p-4 text-paper md:p-8">
            {current ? (
              <>
                <div className="flex items-center justify-between gap-3">
                  <Dialog.Title className="text-sm tracking-widest uppercase">{current.theme}</Dialog.Title>
                  <Dialog.Close className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-paper/30" aria-label="Close gallery">
                    <X />
                  </Dialog.Close>
                </div>
                <div className="flex min-h-0 flex-1 items-center justify-center py-4">
                  <img
                    src={current.src}
                    alt={current.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex items-end justify-between gap-4">
                  <Dialog.Description className="max-w-xl text-sm leading-relaxed text-mist">
                    {current.alt} {visualNote}
                  </Dialog.Description>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-paper/30"
                      aria-label="Previous photograph"
                      onClick={() => setIndex((value) => (value === null ? value : (value - 1 + items.length) % items.length))}
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      type="button"
                      className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-paper/30"
                      aria-label="Next photograph"
                      onClick={() => setIndex((value) => (value === null ? value : (value + 1) % items.length))}
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
