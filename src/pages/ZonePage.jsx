import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import SEO, { buildPageSchema, buildBreadcrumbSchema, buildLocalBusinessSchema } from "../components/SEO";
import { COMPANY } from "../data/company";
import { CITIES } from "../data/cities";
import CTASection from "../components/CTASection";

const ORDER = ["agglomération caennaise", "plaine de Caen", "littoral normand", "Pays d'Auge", "bocage normand", "sud du Calvados"];
const INTRO = {
  "agglomération caennaise": "Caen et les communes voisines : notre base, avec les trajets les plus courts.",
  "plaine de Caen": "Les bourgs et villages de la plaine, au sud, à l'est et au nord de Caen.",
  "littoral normand": "De la côte de Nacre à Cabourg et Houlgate : toitures exposées aux embruns et au vent.",
  "Pays d'Auge": "Les communes du Pays d'Auge comprises dans le rayon d'intervention.",
  "bocage normand": "Bayeux, Villers-Bocage et le bocage : grandes toitures, pierre et ardoise.",
  "sud du Calvados": "Les communes du sud de Caen, jusqu'à Thury-Harcourt-le-Hom.",
};

export default function ZonePage() {
  const all = [{ slug: "caen", name: "Caen", code: "14000", sector: "agglomération caennaise", home: true }, ...CITIES];
  const groups = ORDER.map((s) => ({ s, list: all.filter((c) => c.sector === s) })).filter((g) => g.list.length);
  const url = `${COMPANY.site}/zone-d-intervention`;
  return (
    <>
      <SEO
        title={`Zone d'intervention couvreur Caen | ${COMPANY.shortBrand}`}
        description={`Couvreur à Caen et dans ${all.length - 1} communes du Calvados, dans un rayon de ${COMPANY.radiusKm} km : liste complète avec codes postaux. Devis gratuit.`}
        canonical={url}
        jsonLd={[
          buildLocalBusinessSchema(),
          buildPageSchema("CollectionPage", "Zone d'intervention de CS Couverture Rénovation", url, `Communes du Calvados desservies par ${COMPANY.brand}, dans un rayon d'environ ${COMPANY.radiusKm} km autour de Caen.`),
          buildBreadcrumbSchema([["Accueil", COMPANY.site + "/"], ["Zone d'intervention", url]]),
        ]}
      />
      <section className="pt-28 pb-16 bg-[#F6F8FB]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#0A2A5C] mb-5">Zone d'intervention</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1220] font-light leading-tight tracking-tight mb-6">
            Couvreur à Caen et dans un rayon de {COMPANY.radiusKm} km
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed mb-4">
            {COMPANY.brand} est basée à Caen, au {COMPANY.address}, et intervient dans les {all.length} communes du Calvados situées dans un rayon d'environ {COMPANY.radiusKm} km. Cette page les recense avec leur code postal et renvoie vers la page de chaque commune.
          </p>
          <p className="text-lg text-[#475569] leading-relaxed">
            Votre commune n'apparaît pas ou se trouve juste au-delà du rayon ? Appelez le {COMPANY.phone} : nous vous indiquons si le déplacement est possible.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-[#F6F8FB]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
          {groups.map(({ s, list }) => (
            <div key={s}>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1220] font-semibold mb-2 capitalize">{s}</h2>
              <p className="text-[#475569] mb-5">{INTRO[s]}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {list.map((c) => (
                  <li key={c.slug} className="rounded-xl border border-[#0A2A5C]/10 bg-white p-4">
                    <Link to={c.home ? "/" : `/couvreur-${c.slug}`} className="font-semibold text-[#0B1220] hover:text-[#0A2A5C] flex items-center gap-2">
                      <MapPin size={16} className="text-[#0A2A5C]" /> Couvreur {c.name} <span className="font-normal text-[#475569]">({c.code})</span>
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
