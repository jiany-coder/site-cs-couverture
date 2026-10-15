import React from "react";
import { Link } from "react-router-dom";
import { Search, Wrench, FileText, MapPin } from "lucide-react";
import SEO, { buildPageSchema, buildBreadcrumbSchema, buildLocalBusinessSchema, DESCRIPTION } from "../components/SEO";
import { COMPANY } from "../data/company";
import { SERVICES } from "../data/services";
import CTASection from "../components/CTASection";
import StatsBar from "../components/StatsBar";

const VALUES = [
  { Icon: Search, t: "Examen avant devis", d: "Nous regardons la toiture avant de chiffrer, pour que le devis corresponde à la réalité du chantier." },
  { Icon: Wrench, t: "Réparation ciblée", d: "Quand un désordre est localisé et le reste de la couverture sain, nous réparons ce qui est abîmé plutôt que de refaire le toit." },
  { Icon: FileText, t: "Devis gratuit et détaillé", d: "Le devis est gratuit et détaille les travaux, pour que vous puissiez décider en connaissance de cause." },
  { Icon: MapPin, t: "Entreprise de proximité", d: `Basée à Caen, ${COMPANY.brand} intervient dans un rayon d'environ ${COMPANY.radiusKm} km, sur la côte, dans la plaine et jusqu'au bocage.` },
];

export default function About() {
  const url = `${COMPANY.site}/a-propos`;
  return (
    <>
      <SEO
        title={`À propos | ${COMPANY.brand}, couvreur à Caen`}
        description={`${COMPANY.brand} : entreprise de couverture basée à Caen, ${SERVICES.length} prestations de toiture, rayon d'intervention de ${COMPANY.radiusKm} km. Devis gratuit.`}
        canonical={url}
        jsonLd={[
          buildLocalBusinessSchema(),
          buildPageSchema("AboutPage", `À propos de ${COMPANY.brand}`, url, DESCRIPTION),
          buildBreadcrumbSchema([["Accueil", COMPANY.site + "/"], ["À propos", url]]),
        ]}
      />

      <section className="pt-28 pb-20 bg-[#F1F2F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7 reveal">
            <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F2D5A] mb-5">À propos</p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1220] font-light leading-[1.1] tracking-tight mb-7">
              {COMPANY.brand}, couvreur à Caen
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-5">{DESCRIPTION}</p>
            <p className="text-lg text-[#475569] leading-relaxed">
              L'entreprise traite la couverture, la zinguerie, les gouttières et l'entretien des toits pour les particuliers de Caen et de ses environs. Chaque intervention commence par l'examen de la toiture et un devis gratuit.
            </p>
          </div>
          <div className="lg:col-span-5 reveal flex justify-center">
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-[#D9E0EA]">
              <img src={COMPANY.logos.main} alt="Logo CS Couverture, experts toiture à Caen" width="512" height="710" className="w-48 h-auto object-contain" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#E8EBF1]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14 reveal">
            <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F2D5A] mb-4">Notre approche</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1220] font-light leading-tight tracking-tight">Comment nous travaillons</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ Icon, t, d }) => (
              <div key={t} className="premium-card p-7 reveal">
                <Icon className="w-9 h-9 text-[#1F2D5A] mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-semibold text-[#0B1220] mb-3">{t}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 prose-blog">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1220] font-light leading-tight tracking-tight mb-6">Quels travaux réalise {COMPANY.brand} ?</h2>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug} className="text-lg text-[#475569]"><Link to={`/${s.slug}`} className="text-[#1F2D5A] underline font-semibold">{s.title}</Link> : {s.short}</li>
            ))}
          </ul>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1220] font-light leading-tight tracking-tight mt-12 mb-6">Où nous trouver ?</h2>
          <p className="text-lg leading-[1.75]">
            {COMPANY.brand} est installée au {COMPANY.address}. Les horaires indiqués sur la fiche Google sont du lundi au samedi, de 8 h à 20 h. Vous pouvez appeler le {COMPANY.phone} ou demander un devis depuis la <Link to="/contact" className="text-[#1F2D5A] underline">page contact</Link>.
          </p>
          <p className="text-lg leading-[1.75]">
            Les avis de nos clients sont publiés sur <a href={COMPANY.social.gbp} target="_blank" rel="noopener noreferrer" className="text-[#1F2D5A] underline">notre fiche Google</a> : {COMPANY.rating.value}/5 sur {COMPANY.rating.count} avis en {COMPANY.rating.asOf}.
          </p>
        </div>
      </section>

      <CTASection title="Confiez-nous l'examen de votre toiture" />
    </>
  );
}
