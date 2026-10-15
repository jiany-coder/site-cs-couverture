import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { COMPANY, logoUrl } from "../data/company";
import { SERVICES } from "../data/services";

// Phrase de définition unique, reprise telle quelle sur le site (accueil, à propos, schéma).
export const DESCRIPTION = `${COMPANY.brand} est une entreprise de couverture basée à Caen (${COMPANY.streetAddress}) qui répare, rénove et entretient les toitures dans un rayon d'environ ${COMPANY.radiusKm} km.`;

const SEO = ({ title, description, canonical, image, type = "website", jsonLd, noindex = false }) => {
  const location = useLocation();
  const fullTitle = title || `Couvreur à Caen | ${COMPANY.brand}`;
  const desc = description || `Couvreur à Caen : réparation, rénovation et entretien de toiture dans un rayon de ${COMPANY.radiusKm} km. Devis gratuit. Tél. ${COMPANY.phone}`;
  const path = location.pathname === "/" ? "/" : location.pathname.replace(/\/$/, "");
  const url = canonical || `${COMPANY.site}${path}`;
  const img = image || logoUrl(COMPANY.logos.og);

  // Prérendu (build) : on mémorise les balises de la page pour les écrire dans le HTML statique.
  if (typeof window === "undefined") {
    globalThis.__HEAD__ = { title: fullTitle, desc, url, img, type, noindex, jsonLd };
    return null;
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <meta name="author" content={COMPANY.brand} />
      <meta name="geo.region" content="FR-14" />
      <meta name="geo.placename" content="Caen, Calvados, Normandie" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={COMPANY.brand} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};

const AREA = ["Caen", "Hérouville-Saint-Clair", "Mondeville", "Ifs", "Ouistreham", "Courseulles-sur-Mer", "Cabourg", "Bayeux", "Villers-Bocage"];

export const buildLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": `${COMPANY.site}/#business`,
  name: COMPANY.brand,
  description: DESCRIPTION,
  image: logoUrl(),
  logo: logoUrl(),
  url: COMPANY.site,
  telephone: COMPANY.phoneRaw,
  ...(COMPANY.email ? { email: COMPANY.email } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.streetAddress,
    addressLocality: COMPANY.city,
    postalCode: COMPANY.postalCode,
    addressRegion: COMPANY.region,
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: COMPANY.geo.latitude, longitude: COMPANY.geo.longitude },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  areaServed: [
    ...AREA.map((name) => ({ "@type": "City", name })),
    {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: COMPANY.geo.latitude, longitude: COMPANY.geo.longitude },
      geoRadius: COMPANY.radiusKm * 1000,
    },
  ],
  sameAs: [COMPANY.social.gbp],
  knowsAbout: ["Couverture", "Réparation de toiture", "Rénovation de toiture", "Démoussage de toiture", "Zinguerie", "Gouttières", "Traitement hydrofuge", "Charpente", "Fenêtres de toit"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Travaux de couverture à Caen",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      url: `${COMPANY.site}/${s.slug}`,
      itemOffered: { "@type": "Service", name: s.title, areaServed: "Caen, Calvados" },
    })),
  },
  ...(/\d/.test(COMPANY.legal.siret) ? { taxID: COMPANY.legal.siret } : {}),
});

export const buildWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${COMPANY.site}/#website`,
  url: COMPANY.site,
  name: COMPANY.brand,
  inLanguage: "fr-FR",
  publisher: { "@id": `${COMPANY.site}/#business` },
});

export const buildBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, item], i) => ({ "@type": "ListItem", position: i + 1, name, item })),
});

export const buildPageSchema = (type, name, url, description, extra = {}) => ({
  "@context": "https://schema.org",
  "@type": type,
  name,
  url,
  description,
  inLanguage: "fr-FR",
  isPartOf: { "@type": "WebSite", name: COMPANY.brand, url: COMPANY.site },
  about: { "@id": `${COMPANY.site}/#business` },
  ...extra,
});

export const buildServiceSchema = (service, url, areaName = "Caen") => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title || service.name,
  serviceType: service.title || service.name,
  description: service.answer || service.description,
  url,
  areaServed: { "@type": "City", name: areaName },
  provider: { "@id": `${COMPANY.site}/#business` },
});

export const buildFAQSchema = (faq) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const buildArticleSchema = (post) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  datePublished: post.date,
  dateModified: post.updated || post.date,
  author: { "@type": "Organization", name: COMPANY.brand, url: COMPANY.site },
  publisher: { "@type": "Organization", name: COMPANY.brand, logo: { "@type": "ImageObject", url: logoUrl() } },
  image: [logoUrl()],
  description: post.excerpt,
  mainEntityOfPage: `${COMPANY.site}/blog/${post.slug}`,
  inLanguage: "fr-FR",
  articleSection: post.category,
});

export default SEO;
