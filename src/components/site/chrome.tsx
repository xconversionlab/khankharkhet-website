import { Link } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { chapters, identity, organisation } from "@/content/destination";
import { buttonClass } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const links = chapters.map((chapter) => ({ to: chapter.href, label: chapter.label }));

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b border-paper/10 bg-pine text-paper"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-10">
        <Link to="/" className="min-h-11 min-w-11 font-display text-xl leading-none tracking-tight">
          {identity.name}
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-paper/80 hover:text-paper"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-paper underline decoration-copper underline-offset-8" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/enquire" className={cn(buttonClass("paper"), "hidden sm:inline-flex")}>
            Enquire
          </Link>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger
              className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-inset ring-current/30 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-pine-deep/70" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-paper px-6 py-6 text-ink shadow-2xl">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-display text-2xl">{identity.name}</Dialog.Title>
                  <Dialog.Close className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-line" aria-label="Close menu">
                    <X className="size-5" />
                  </Dialog.Close>
                </div>
                <Dialog.Description className="mt-2 text-sm text-stone">{identity.place}</Dialog.Description>
                <nav className="mt-8 flex flex-col" aria-label="Mobile">
                  {links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="border-b border-line py-4 font-display text-3xl leading-none"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Link to="/enquire" onClick={() => setOpen(false)} className={cn(buttonClass("copper"), "mt-8")}>
                  Enquire
                </Link>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-pine-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-display text-4xl leading-none">{identity.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">{identity.place}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
            {organisation.name} · {organisation.initiative}
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs tracking-widest text-mist/80 uppercase">Visit pages</p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-paper hover:text-mist">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs tracking-widest text-mist/80 uppercase">Printed contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            {organisation.phones.map((phone) => (
              <li key={phone.tel}>
                <a href={`tel:${phone.tel}`} className="hover:text-mist">
                  {phone.display}
                </a>
              </li>
            ))}
            <li className="pt-2 text-mist">{organisation.office}</li>
          </ul>
          <Link to="/enquire" className={cn(buttonClass("paper"), "mt-6")}>
            Write an enquiry
          </Link>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs leading-relaxed text-mist/80 md:px-10">
          Facts on this site come from the destination brief, the supplied organisation profile, or named public
          peak records. Passages marked “To confirm” are editable placeholders, not travel advice.
        </p>
      </div>
    </footer>
  );
}
