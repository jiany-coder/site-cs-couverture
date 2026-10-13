import React from "react";
import SEO, { buildPageSchema, buildBreadcrumbSchema } from "../components/SEO";
import { COMPANY } from "../data/company";
import { PHOTOS, HAS_PHOTOS } from "../data/photos";
import CTASection from "../components/CTASection";
import PhotoSlot from "../components/PhotoSlot";

export default function Realisations() {
  const url = `${COMPANY.site}/realisations`;
  return (
    <>
      <SEO
        title={`Réalisations toiture à Caen | ${COMPANY.shortBrand}`}
        description={`Photos de chantiers de toiture à Caen et dans le Calvados : réparation, rénovation, démoussage, zinguerie. Devis gratuit. Tél. ${COMPANY.phone}`}
        canonical={url}
        noindex={!HAS_PHOTOS}
        jsonLd={[
          buildPageSchema("CollectionPage", "Réalisations de CS Couverture Rénovation", url, "Photos de chantiers de toiture à Caen et dans le Calvados.", HAS_PHOTOS ? {
            mainEntity: { "@type": "ImageGallery", name: "Chantiers de toiture à Caen", image: PHOTOS.map((p) => ({ "@type": "ImageObject", contentUrl: `${COMPANY.site}${p.src}`, description: p.alt })) },
          } : {}),
          buildBreadcrumbSchema([["Accueil", COMPANY.site + "/"], ["Réalisations", url]]),
        ]}
      />

      <section className="pt-28 pb-12 bg-[#F6F8FB]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center reveal">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#0A2A5C] mb-4">Réalisations</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1220] font-light leading-[1.1] tracking-tight mb-5">Nos chantiers de toiture à Caen et dans le Calvados</h1>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">Réparation, rénovation, démoussage, zinguerie : des chantiers réels, avec leur commune et leur type de travaux.</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HAS_PHOTOS
              ? PHOTOS.map((p) => (
                  <figure key={p.src} className="reveal">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                      <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    {(p.title || p.desc) && (
                      <figcaption className="mt-3">
                        {p.title && <p className="font-serif text-lg font-semibold text-[#0B1220]">{p.title}</p>}
                        {p.desc && <p className="text-sm text-[#475569]">{p.desc}</p>}
                      </figcaption>
                    )}
                  </figure>
                ))
              : [0, 1, 2, 3, 4, 5].map((i) => <PhotoSlot key={i} />)}
          </div>
        </div>
      </section>

      <CTASection title="Et si votre toiture était le prochain chantier ?" />
    </>
  );
}
