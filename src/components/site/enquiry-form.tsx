import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { experiences, organisation } from "@/content/destination";
import { Button } from "@/components/ui/button";

const interestNames = experiences.map((item) => item.name);

const schema = z.object({
  name: z.string().trim().min(2, "Add your name."),
  phone: z.string().trim().min(8, "Add a phone number we can reply to."),
  email: z.union([z.literal(""), z.string().trim().email("Use a valid email, or leave this blank.")]),
  window: z.string().trim().min(2, "Say roughly when you hope to travel."),
  group: z.string().min(1, "Choose a group size."),
  interests: z.array(z.string()).min(1, "Choose at least one published interest."),
  message: z.string().trim().min(12, "Add a sentence so the hosts know what you need."),
  consent: z.boolean().refine((value) => value, "Confirm that we may pass this note to the printed number."),
});

type FormValues = z.infer<typeof schema>;

const empty: FormValues = {
  name: "",
  phone: "",
  email: "",
  window: "",
  group: "",
  interests: [],
  message: "",
  consent: false,
};

const KEY = "khankharkhet-enquiry-draft";
const primary = organisation.phones[0];

function fieldClass(invalid: boolean) {
  return `min-h-11 w-full rounded-2xl border bg-foam px-4 py-3 text-ink ${invalid ? "border-copper-deep" : "border-line"}`;
}

export function EnquiryForm() {
  const [values, setValues] = useState<FormValues>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ready, setReady] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) ?? "null") as Partial<FormValues> | null;
      if (!saved || typeof saved !== "object") return;
      setValues({ ...empty, ...saved, interests: Array.isArray(saved.interests) ? saved.interests : [], consent: false });
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (ready) return;
    localStorage.setItem(KEY, JSON.stringify(values));
  }, [values, ready]);

  const note = useMemo(() => {
    return [
      `Khankharkhet enquiry`,
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : null,
      `When: ${values.window}`,
      `Group: ${values.group}`,
      `Interests: ${values.interests.join(", ")}`,
      values.message,
    ]
      .filter(Boolean)
      .join("\n");
  }, [values]);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setReady(null);
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setReady(null);
      return;
    }
    setErrors({});
    localStorage.removeItem(KEY);
    setReady(note);
  }

  async function copyNote() {
    if (!ready) return;
    try {
      await navigator.clipboard.writeText(ready);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (ready && primary) {
    const href = `https://wa.me/${primary.tel.replace("+", "")}?text=${encodeURIComponent(ready)}`;
    return (
      <div className="bg-pine text-paper p-6 md:p-10" role="status">
        <p className="text-xs tracking-widest uppercase text-mist">Ready to send</p>
        <h2 className="mt-3 text-4xl text-paper">Nothing was stored on a server.</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-mist">
          Your note is prepared for {primary.display}, the first number printed in the organisation profile.
          WhatsApp or a phone call leaves this site. A future booking desk can replace this hand-off.
        </p>
        <pre className="mt-6 overflow-x-auto whitespace-pre-wrap rounded-2xl bg-pine-deep p-4 text-sm text-paper">
          {ready}
        </pre>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="inline-flex min-h-11 items-center rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink" href={href}>
            Open WhatsApp
          </a>
          <a className="inline-flex min-h-11 items-center rounded-full px-5 py-3 text-sm ring-1 ring-paper/40" href={`tel:${primary.tel}`}>
            Call {primary.display}
          </a>
          <Button variant="ghost" className="text-paper ring-1 ring-paper/40" onClick={copyNote}>
            {copied ? "Copied" : "Copy note"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      {Object.keys(errors).length > 0 ? (
        <div role="alert" className="rounded-2xl bg-mist px-4 py-3 text-sm text-copper-deep">
          Check the marked fields before preparing the note.
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input className={fieldClass(Boolean(errors.name))} value={values.name} autoComplete="name" onChange={(event) => update("name", event.target.value)} />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input className={fieldClass(Boolean(errors.phone))} value={values.phone} autoComplete="tel" inputMode="tel" onChange={(event) => update("phone", event.target.value)} />
        </Field>
        <Field label="Email, if you have one" error={errors.email}>
          <input className={fieldClass(Boolean(errors.email))} value={values.email} autoComplete="email" inputMode="email" onChange={(event) => update("email", event.target.value)} />
        </Field>
        <Field label="When you hope to travel" error={errors.window}>
          <input className={fieldClass(Boolean(errors.window))} value={values.window} onChange={(event) => update("window", event.target.value)} />
        </Field>
      </div>
      <Field label="Group size" error={errors.group}>
        <select className={fieldClass(Boolean(errors.group))} value={values.group} onChange={(event) => update("group", event.target.value)}>
          <option value="">Choose</option>
          {["1", "2", "3–6", "7–15", "16 or more", "Not sure yet"].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>
      <fieldset>
        <legend className="text-sm font-medium">Published interests</legend>
        <p className="mt-1 text-sm text-stone">Chosen from the organisation list. This does not confirm they run at Khankharkhet.</p>
        {errors.interests ? <p className="mt-2 text-sm text-copper-deep">{errors.interests}</p> : null}
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {interestNames.map((name) => {
            const checked = values.interests.includes(name);
            return (
              <label key={name} className="flex min-h-11 items-center gap-3 rounded-2xl bg-foam px-3 text-sm">
                <input
                  type="checkbox"
                  className="size-4 accent-pine"
                  checked={checked}
                  onChange={() =>
                    update(
                      "interests",
                      checked ? values.interests.filter((item) => item !== name) : [...values.interests, name],
                    )
                  }
                />
                {name}
              </label>
            );
          })}
        </div>
      </fieldset>
      <Field label="What do you need?" error={errors.message}>
        <textarea className={`${fieldClass(Boolean(errors.message))} min-h-32`} value={values.message} onChange={(event) => update("message", event.target.value)} />
      </Field>
      <label className="flex min-h-11 items-start gap-3 text-sm leading-relaxed">
        <input
          type="checkbox"
          className="mt-1 size-4 accent-pine"
          checked={values.consent}
          onChange={(event) => update("consent", event.target.checked)}
        />
        <span>I understand this note is not a booking. It may be sent by me to the published phone number.</span>
      </label>
      {errors.consent ? <p className="text-sm text-copper-deep">{errors.consent}</p> : null}
      <div className="flex flex-wrap gap-3">
        <Button type="submit" variant="copper">
          Prepare enquiry
        </Button>
        <Button
          variant="line"
          onClick={() => {
            setValues(empty);
            setErrors({});
            setReady(null);
            localStorage.removeItem(KEY);
          }}
        >
          Clear draft
        </Button>
      </div>
      <p className="text-sm text-stone">A draft stays in this browser until you clear it or prepare the note. It is not uploaded.</p>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <span className="mt-2 block">{children}</span>
      {error ? <span className="mt-1 block text-sm text-copper-deep">{error}</span> : null}
    </label>
  );
}
