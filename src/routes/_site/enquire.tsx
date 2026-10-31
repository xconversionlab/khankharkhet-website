import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Wrap } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { organisation } from "@/content/destination";
import { organisationJsonLd, pageHead } from "@/lib/seo";
import { JsonLd } from "@/components/site/blocks";

export const Route = createFileRoute("/_site/enquire")({
  head: () =>
    pageHead(
      "Enquire",
      "Send a travel enquiry toward the phone numbers printed for Travel of Uttarakhand. This is not a live booking.",
    ),
  component: EnquirePage,
});

function EnquirePage() {
  return (
    <>
      <JsonLd data={organisationJsonLd()} />
      <PageHero
        index="09"
        kicker="Contact"
        title="Write it down. Then send it yourself."
        lede={`The form checks the note and prepares it for ${organisation.phones.map((phone) => phone.display).join(" or ")}, printed for ${organisation.name}. It does not take payment or reserve a place.`}
      />
      <Wrap className="grid gap-12 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-7">
          <EnquiryForm />
        </div>
        <aside className="md:col-span-5">
          <div className="bg-foam p-6 md:p-8">
            <h2 className="text-3xl">Office, as printed</h2>
            <p className="mt-4 leading-relaxed text-stone">{organisation.office}</p>
            <p className="mt-4 text-sm text-stone">
              Led by {organisation.lead}. Initiative: {organisation.initiative}.
            </p>
            <ul className="mt-6 space-y-2">
              {organisation.phones.map((phone) => (
                <li key={phone.tel}>
                  <a href={`tel:${phone.tel}`} className="font-display text-2xl">
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Wrap>
    </>
  );
}
