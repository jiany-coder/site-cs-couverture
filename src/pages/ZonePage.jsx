import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import SEO, { buildPageSchema, buildBreadcrumbSchema, buildLocalBusinessSchema } from "../components/SEO";
import { COMPANY } from "../data/company";
import { CITIES, PRIORITY_CITIES } from "../data/cities";
import CTASection from "../components/CTASection";

const ORDER = ["agglomération caennaise", "plaine de Caen", "littoral normand", "Pays d'Auge et alentours", "bocage normand", "sud du Calvados et nord de l'Orne"];
const INTRO = {
  "agglomération caennaise": "Caen et les communes voisines : notre base, avec les trajets les plus courts.",
  "plaine de Caen": "Les bourgs et villages de la plaine, au sud, à l'est et au nord de Caen.",
  "littoral normand": "De la côte de Nacre à Cabourg et Houlgate : toitures exposées aux embruns et au vent.",
  "Pays d'Auge et alentours": "Secteur prioritaire : Lisieux, Orbec, Livarot, Vimoutiers, Pont-l'Évêque, Mézidon, Cambremer, ainsi que Bernay.",
  "bocage normand": "Bayeux, Villers-Bocage et le bocage : grandes toitures, pierre et ardoise.",
  "sud du Calvados et nord de l'Orne": "Secteur prioritaire : Falaise et Argentan, avec les communes du sud de Caen jusqu'à Thury-Harcourt-le-Hom.",
};

export default function ZonePage() {
  const all = [{ slug: "caen", name: "Caen", code: "14000", sector: "agglomération caennaise", home: true }, ...CITIES];
  const groups = ORDER.map((s) => ({ s, list: all.filter((c) => c.sector === s) })).filter((g) => g.list.length);
  const url = `${COMPANY.site}/zone-d-intervention`;
  return (
    <>
      <SEO
        title={`Zone d'intervention couvreur Caen | ${COMPANY.shortBrand}`}
        description={`Couvreur à Caen et dans ${all.length - 1} communes du Calvados, de l'Orne et de l'Eure, dans un rayon de ${COMPANY.radiusKm} km : liste complète avec codes postaux. Devis gratuit.`}
        canonical={url}
        jsonLd={[
          buildLocalBusinessSchema(),
          buildPageSchema("CollectionPage", "Zone d'intervention de CS Couverture Rénovation", url, `Communes desservies par ${COMPANY.brand}, dans un rayon d'environ ${COMPANY.radiusKm} km autour de Caen.`),
          buildBreadcrumbSchema([["Accueil", COMPANY.site + "/"], ["Zone d'intervention", url]]),
        ]}
      />
      <section className="pt-28 pb-16 bg-[#F1F2F5]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F2D5A] mb-5">Zone d'intervention</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1220] font-light leading-tight tracking-tight mb-6">
            Couvreur à Caen et dans un rayon de {COMPANY.radiusKm} km
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed mb-4">
            {COMPANY.brand} est basée à Caen, au {COMPANY.address}, et intervient dans les {all.length} communes situées dans un rayon d'environ {COMPANY.radiusKm} km. Cette page les recense avec leur code postal et renvoie vers la page de chaque commune.
          </p>
          <p className="text-lg text-[#475569] leading-relaxed">
            Votre commune n'apparaît pas ou se trouve juste au-delà du rayon ? Appelez le {COMPANY.phone} : nous vous indiquons si le déplacement est possible.
          </p>
        </div>
      </section>

      <section className="pb-12 bg-[#F1F2F5]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1220] font-semibold mb-5">Nos secteurs prioritaires</h2>
          <ul className="flex flex-wrap gap-3">
            {PRIORITY_CITIES.map((c) => (
              <li key={c.slug}><Link to={`/couvreur-${c.slug}`} className="inline-block rounded-full bg-[#1F2D5A] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#C70909] transition-colors">Couvreur {c.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-20 bg-[#F1F2F5]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
          {groups.map(({ s, list }) => (
            <div key={s}>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1220] font-semibold mb-2 capitalize">{s}</h2>
              <p className="text-[#475569] mb-5">{INTRO[s]}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {list.map((c) => (
                  <li key={c.slug} className="rounded-xl border border-[#1F2D5A]/10 bg-white p-4">
                    <Link to={c.home ? "/" : `/couvreur-${c.slug}`} className="font-semibold text-[#0B1220] hover:text-[#1F2D5A] flex items-center gap-2">
                      <MapPin size={16} className="text-[#1F2D5A]" /> Couvreur {c.name} <span className="font-normal text-[#475569]">({c.code})</span>
                    </Link>
                    {c.distance && <p className="text-sm text-[#475569] mt-1">{c.distance}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
