import { identity, organisation, peakRecord } from "@/content/destination";

export function pageHead(title: string, description: string) {
  const full = title === identity.name ? `${identity.title}` : `${title} · ${identity.name}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
    ],
  };
}

export function destinationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: identity.title,
    description: `${identity.positioning} Public peak records use the spelling ${peakRecord.spelling} and disagree on elevation. Confirm the approach locally.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: identity.block,
      addressLocality: identity.patti,
      addressRegion: `${identity.district}, ${identity.state}`,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: peakRecord.coordinates.lat,
      longitude: peakRecord.coordinates.lng,
      description: peakRecord.caution,
    },
    touristType: ["Eco-tourism", "Adventure travel"],
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Chamoli, Uttarakhand, India",
    },
  };
}

export function organisationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: organisation.name,
    alternateName: organisation.initiative,
    description: organisation.mission,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Petrol Pump, Simli",
      addressLocality: "Karnaprayag",
      addressRegion: "Chamoli, Uttarakhand",
      addressCountry: "IN",
    },
    founder: { "@type": "Person", name: organisation.lead },
    telephone: organisation.phones.map((phone) => phone.tel),
    areaServed: "Uttarakhand, India",
  };
}
