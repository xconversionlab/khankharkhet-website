import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SourceTag, Wrap } from "@/components/site/blocks";
import { buttonClass } from "@/components/ui/button";
import { identity, organisation, peakRecord } from "@/content/destination";
import { pageHead } from "@/lib/seo";

const { lat, lng } = peakRecord.coordinates;
const osm = `https://www.openstreetmap.org/export/embed.html?bbox=79.28%2C29.96%2C79.51%2C30.14&layer=mapnik&marker=${lat}%2C${lng}`;
const osmLink = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=12/${lat}/${lng}`;
const gmaps = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

export const Route = createFileRoute("/_site/visit")({
  head: () =>
    pageHead(
      "Visit",
      "Map and contact for Khankharkhet in Chamoli, with the public summit pin clearly separated from unconfirmed road directions.",
    ),
  component: VisitPage,
});

function VisitPage() {
  return (
    <>
      <PageHero
        index="07"
        kicker="Location"
        title="Find the record. Confirm the road."
        lede={`${identity.place}. The map marks a publicly recorded summit, not a verified gate for the block.`}
      />
      <Wrap className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
        <div className="overflow-hidden border border-line md:col-span-8">
          <iframe
            title="OpenStreetMap pin for the publicly recorded Khankrakhet summit"
            src={osm}
            className="h-[28rem] w-full bg-mist"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <aside className="md:col-span-4">
          <SourceTag status="record" />
          <h2 className="mt-4 text-3xl">Summit pin</h2>
          <p className="mt-3 text-sm leading-relaxed text-stone">{peakRecord.caution}</p>
          <p className="mt-4 font-display text-2xl tabular-nums">
            {lat.toFixed(5)}° N
            <br />
            {lng.toFixed(5)}° E
          </p>
          <p className="mt-2 text-sm text-stone">{peakRecord.alternate}</p>
          <div className="mt-6 flex flex-col items-start gap-3">
            <a className={buttonClass("pine")} href={osmLink} target="_blank" rel="noreferrer">
              Open in OpenStreetMap
            </a>
            <a className={buttonClass("line")} href={gmaps} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
        </aside>
      </Wrap>
      <section className="border-t border-line bg-foam">
        <Wrap className="grid gap-10 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-4xl">Directions we will not invent</h2>
            <ul className="mt-6 space-y-4 text-stone">
              <li>No bus timetable was supplied.</li>
              <li>No kilometre count from Karnaprayag or Gopeshwar to Badhan Patti was supplied.</li>
              <li>Pick-up and drop are described as available. The meeting point is not.</li>
              <li>Do not drive to the summit pin.</li>
            </ul>
          </div>
          <div>
            <SourceTag status="profile" />
            <h2 className="mt-4 text-4xl">Printed contact</h2>
            <p className="mt-4 text-stone">{organisation.office}</p>
            <ul className="mt-4 space-y-2">
              {organisation.phones.map((phone) => (
                <li key={phone.tel}>
                  <a className="font-display text-3xl hover:text-copper-deep" href={`tel:${phone.tel}`}>
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-3 text-sm">
              {organisation.socials.map((social) => (
                <li key={social.label}>
                  <span className="text-stone">{social.label}: </span>
                  {social.href ? (
                    <a href={social.href} className="underline decoration-line underline-offset-4" target="_blank" rel="noreferrer">
                      {social.value}
                    </a>
                  ) : (
                    <span>{social.value}</span>
                  )}
                  <span className="mt-1 block text-stone">{social.note}</span>
                </li>
              ))}
            </ul>
            <Link to="/enquire" className={`${buttonClass("copper")} mt-8`}>
              Prepare an enquiry
            </Link>
          </div>
        </Wrap>
      </section>
    </>
  );
}
