import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { buttonClass } from "@/components/ui/button";
import { SourceTag, Wrap } from "@/components/site/blocks";
import { Reveal } from "@/components/site/reveal";
import {
  chapters,
  experiences,
  identity,
  organisation,
  peakRecord,
  rural,
  visualNote,
} from "@/content/destination";
import { cn } from "@/lib/cn";

export function HomeView() {
  return (
    <>
      <Hero />
      <section className="border-b border-line" aria-label="Recorded figures">
        <Wrap className="grid gap-8 py-10 md:grid-cols-3">
          <Fact kicker="District" value={identity.district} note={identity.place} />
          <Fact
            kicker="Summit records differ"
            value="3,045–3,068 m"
            note={`${peakRecord.elevations.map((item) => `${item.source}: ${item.metres}`).join(" · ")}`}
          />
          <Fact kicker="Mission" value="120 days" note={organisation.mission} />
        </Wrap>
      </section>

      <section className="py-20 md:py-28" id="story">
        <Wrap className="grid items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-xs tracking-widest text-stone uppercase">The place</p>
            <h2 className="mt-3 text-4xl leading-none sm:text-6xl">Held quietly in Chamoli.</h2>
            <p className="mt-6 text-lg leading-relaxed text-stone">
              {identity.title} is in {identity.place}. The brief calls it a hidden Himalayan destination for
              eco-tourism and adventure travel.
            </p>
            <p className="mt-4 leading-relaxed text-stone">{identity.spellingNote}</p>
            <Link to="/story" className={cn(buttonClass("line"), "mt-8")}>
              Read the story
            </Link>
          </Reveal>
          <Reveal className="md:col-span-7">
            <figure>
              <img
                src="/media/ridge.jpg"
                alt="Atmospheric vertical photograph of a grassy ridge and snow peaks."
                width={1152}
                height={1728}
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="mt-3 text-sm text-stone">{visualNote}</figcaption>
            </figure>
          </Reveal>
        </Wrap>
      </section>

      <section className="relative">
        <img
          src="/media/meadow.jpg"
          alt="Atmospheric photograph of a high meadow and distant snow peaks."
          width={1600}
          height={900}
          className="h-[70vh] w-full object-cover"
        />
        <Wrap>
          <div className="relative z-10 -mt-24 max-w-xl bg-paper p-8 md:p-12">
            <SourceTag status="profile" />
            <h2 className="mt-4 text-4xl leading-none">Slow travel, local guides, village life.</h2>
            <ul className="mt-6 space-y-3 text-stone">
              {organisation.style.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </Wrap>
      </section>

      <section className="py-20 md:py-28" id="experiences">
        <Wrap>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-widest text-stone uppercase">Published activities</p>
              <h2 className="mt-3 max-w-xl text-4xl leading-none sm:text-6xl">What the profile names.</h2>
            </div>
            <Link to="/experiences" className={buttonClass("line")}>
              See the full list
            </Link>
          </div>
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {experiences.slice(0, 6).map((item, index) => (
              <li key={item.id} className="grid gap-3 py-6 md:grid-cols-12 md:items-baseline">
                <span className="font-display text-copper-deep md:col-span-1">0{index + 1}</span>
                <h3 className="text-3xl md:col-span-4">{item.name}</h3>
                <p className="text-stone md:col-span-7">{item.summary}</p>
              </li>
            ))}
          </ol>
        </Wrap>
      </section>

      <section className="bg-pine text-paper">
        <Wrap className="grid gap-10 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-xs tracking-widest text-mist uppercase">With the village</p>
            <h2 className="mt-3 text-4xl leading-none text-paper sm:text-6xl">Income that stays.</h2>
          </div>
          <ul className="space-y-5 text-lg leading-relaxed text-mist">
            {rural.vocal.map((line) => (
              <li key={line} className="border-t border-paper/15 pt-5">
                {line}
              </li>
            ))}
          </ul>
        </Wrap>
      </section>

      <section className="py-20 md:py-24">
        <Wrap>
          <h2 className="text-4xl leading-none sm:text-5xl">Walk the site.</h2>
          <ol className="mt-10 grid gap-px bg-line sm:grid-cols-2">
            {chapters.map((chapter) => (
              <li key={chapter.href} className="bg-paper">
                <Link to={chapter.href} className="flex min-h-28 flex-col justify-between p-6 hover:bg-foam">
                  <span className="font-display text-copper-deep">{chapter.index}</span>
                  <span>
                    <span className="block font-display text-3xl">{chapter.label}</span>
                    <span className="mt-1 block text-sm text-stone">{chapter.line}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Wrap>
      </section>

      <section className="border-t border-line bg-foam">
        <Wrap className="flex flex-col items-start gap-6 py-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-widest text-stone uppercase">No rate card yet</p>
            <h2 className="mt-3 max-w-xl text-4xl leading-none sm:text-6xl">Ask before you travel.</h2>
            <p className="mt-4 max-w-lg text-stone">
              Prices, permits and on-site rooms are not invented here. An enquiry prepares a note for the printed numbers.
            </p>
          </div>
          <Link to="/enquire" className={buttonClass("copper")}>
            Start an enquiry
          </Link>
        </Wrap>
      </section>
    </>
  );
}

function Fact({ kicker, value, note }: { kicker: string; value: string; note: string }) {
  return (
    <div>
      <p className="text-xs tracking-widest text-stone uppercase">{kicker}</p>
      <p className="mt-2 font-display text-3xl leading-none">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-stone">{note}</p>
    </div>
  );
}

function Hero() {
  const [motionPaused, setMotionPaused] = useState(false);

  return (
    <section className="hero-frame relative bg-pine-deep text-paper">
      <div className={`hero-media${motionPaused ? " is-paused" : ""}`} aria-hidden="true">
        <img
          src="/media/hero.jpg"
          alt=""
          width={1600}
          height={900}
          fetchPriority="high"
          decoding="async"
          className="hero-media-image"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/90 via-pine-deep/55 to-pine-deep/25" />
      <div className="hero-frame relative mx-auto flex max-w-6xl flex-col justify-end px-5 pt-8 pb-10 md:px-10 md:pb-14">
        <p className="text-xs tracking-widest text-mist uppercase">Chamoli · Uttarakhand</p>
        <h1 className="mt-3 max-w-5xl text-4xl leading-none text-paper sm:text-6xl lg:text-8xl">
          {identity.name}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist">
          {identity.title}. {identity.place}.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/explore" className={buttonClass("paper")}>
            Explore the record
          </Link>
          <Link to="/enquire" className={buttonClass("copper")}>
            Plan an enquiry
          </Link>
          <button
            type="button"
            onClick={() => setMotionPaused((paused) => !paused)}
            className="min-h-11 px-3 text-sm text-paper underline decoration-paper/40 underline-offset-4"
            aria-pressed={motionPaused}
          >
            {motionPaused ? "Play motion" : "Pause motion"}
          </button>
        </div>
        <p className="mt-8 max-w-lg text-xs leading-relaxed text-mist/90">{visualNote}</p>
      </div>
    </section>
  );
}
