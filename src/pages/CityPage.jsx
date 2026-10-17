import React from "react";
import { useLocation, Navigate, Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, CheckCircle2 } from "lucide-react";
import SEO, { buildLocalBusinessSchema, buildFAQSchema, buildBreadcrumbSchema, buildServiceSchema } from "../components/SEO";
import HeroBg from "../components/HeroBg";
import PhotoBand from "../components/PhotoBand";
import { COMPANY, telHref } from "../data/company";
import { PAGE_UPDATED } from "../data/services";
import CONTENT from "../data/communes_content.json";
import FAQAccordion from "../components/FAQAccordion";
import { pickIllustrations, seedOf } from "../data/photos";
import ContactForm from "../components/ContactForm";
import CTASection from "../components/CTASection";
import RoofPattern from "../components/RoofPattern";
import { SERVICES } from "../data/services";
import { getCity } from "../data/cities";
import { svcLabel, svcCityPath } from "../data/serviceCities";

export default function CityPage() {
  const { pathname } = useLocation();
  const key = pathname.replace(/^\//, "").replace(/\/$/, "");
  const d = CONTENT[key];
  if (!d) return <Navigate to="/" replace />;

  const url = `${COMPANY.site}/${key}`;
  const ld = [
    buildLocalBusinessSchema(),
    buildServiceSchema({ title: d.h1, description: d.desc }, url, d.nom),
    buildBreadcrumbSchema([
      ["Accueil", COMPANY.site + "/"],
      ["Zone d'intervention", `${COMPANY.site}/zone-d-intervention`],
      [d.h1, url],
    ]),
    buildFAQSchema(d.faq.map(([q, a]) => ({ q, a }))),
  ];

  return (
    <>
      <SEO title={d.title} description={d.desc} canonical={url} jsonLd={ld} />

      <section className="relative bg-[#040F2F] overflow-hidden">
        <HeroBg src="/toiture-tuiles-rouges.webp" strength={0.82} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 w-full">
          <nav aria-label="Fil d'Ariane" className="text-sm text-[#DCE1EB]/80 font-sans">
            <Link to="/" className="hover:text-[#DCE1EB]">Accueil</Link> <span aria-hidden="true">/</span>{" "}
            <Link to="/zone-d-intervention" className="hover:text-[#DCE1EB]">Zone d'intervention</Link> <span aria-hidden="true">/</span> <span>{d.nom}</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-[#DCE1EB]/12 backdrop-blur-md border border-[#DCE1EB]/30 px-4 py-2 rounded-full mt-6 mb-6">
            <MapPin className="w-4 h-4 text-[#DCE1EB]" strokeWidth={1.75} />
            <span className="text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#DCE1EB]">{d.cp} · {d.km} km de Caen</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-[#F1F2F5] max-w-4xl">{d.h1}</h1>
          <p className="text-lg sm:text-xl text-white font-medium max-w-3xl mt-7 leading-relaxed bg-[#040F2F]/70 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 sm:px-6 sm:py-5 [text-shadow:0_1px_2px_rgba(0,0,0,.5)]">{d.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C70909] text-white px-8 py-4 rounded-full font-sans font-semibold text-base hover:bg-[#9E0707] hover:-translate-y-1 hover:shadow-xl transition-all">
              Devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={telHref} className="inline-flex items-center justify-center gap-2 bg-transparent text-[#F1F2F5] px-8 py-4 rounded-full font-sans font-semibold text-base border-2 border-[#DCE1EB]/40 hover:bg-[#DCE1EB] hover:text-[#1F2D5A] transition-all">
              <Phone className="w-5 h-5" /> {COMPANY.phone}
            </a>
          </div>
          <p className="text-xs text-[#F1F2F5]/60 mt-8 font-sans">Page mise à jour le <time dateTime={PAGE_UPDATED.iso}>{PAGE_UPDATED.label}</time></p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 prose-blog">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1220] font-semibold tracking-tight mb-5">Couvreur à {d.nom} : comment nous intervenons</h2>
          <p className="text-lg leading-[1.75]">{d.geo}</p>
          {d.special && <p className="text-lg leading-[1.75]">{d.special}</p>}
          <p className="text-lg leading-[1.75]">{d.popNote}</p>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1220] font-semibold tracking-tight mt-12 mb-5">Quels travaux de toiture à {d.nom} ?</h2>
          <p className="text-lg leading-[1.75]">Voici trois des {SERVICES.length} prestations de {COMPANY.brand}, que nous réalisons à {d.nom} comme dans les communes voisines :</p>
          <ul className="space-y-3 list-none ml-0">
            {d.services.map(([slug, t, p]) => (
              <li key={slug} className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-[#1F2D5A] mt-1 shrink-0" strokeWidth={1.75} />
                <span className="text-lg text-[#475569]"><Link to={`/${slug}`} className="font-semibold text-[#1F2D5A] underline">{t}</Link> : {p}</span>
              </li>
            ))}
          </ul>
          {getCity(d.slug)?.priority > 0 && (
            <>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1220] font-semibold tracking-tight mt-12 mb-5">Toutes nos prestations à {d.nom}</h2>
              <ul className="flex flex-wrap gap-3 list-none ml-0">
                {SERVICES.map((s) => (
                  <li key={s.slug}><Link to={svcCityPath(s, getCity(d.slug))} className="inline-block rounded-full bg-white border border-[#D9E0EA] px-4 py-2 text-sm text-[#1F2D5A] hover:border-[#1F2D5A]">{svcLabel(s)}</Link></li>
                ))}
              </ul>
            </>
          )}

          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1220] font-semibold tracking-tight mt-12 mb-5">Démoussage et nettoyage de toiture à {d.nom}</h2>
          {d.demoussage.map((p, i) => <p key={i} className="text-lg leading-[1.75]">{p}</p>)}
          <p className="text-lg leading-[1.75]">Détails de la méthode et des prix sur la page <Link to="/demoussage-toiture-caen" className="text-[#1F2D5A] underline">démoussage et nettoyage de toiture</Link>.</p>
          <p className="text-lg leading-[1.75]">Retrouvez aussi toutes nos prestations sur la page <Link to="/" className="text-[#1F2D5A] underline">couvreur à Caen</Link>.</p>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1220] font-semibold tracking-tight mt-12 mb-5">Les toitures de {d.nom} : ce qu'il faut savoir</h2>
          {d.roof.map((p, i) => <p key={i} className="text-lg leading-[1.75]">{p}</p>)}
          <p className="text-lg leading-[1.75] bg-[#DCE1EB] rounded-2xl p-5"><strong>Conseil.</strong> {d.tip}</p>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1220] font-semibold tracking-tight mt-12 mb-5">Comment demander un devis à {d.nom} ?</h2>
          <p className="text-lg leading-[1.75]">{d.how}</p>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1220] font-semibold tracking-tight mt-12 mb-5">Combien coûtent les travaux de toiture à {d.nom} ?</h2>
          <p className="text-lg leading-[1.75]">Quelques repères de prix publiés en France pour ces travaux. Chaque toiture est différente : le devis est gratuit.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden">
              <thead><tr className="bg-[#DCE1EB] text-[#0B1220]"><th className="p-4">Prestation</th><th className="p-4">Repère de prix</th></tr></thead>
              <tbody>
                {d.prices.map(([a, b]) => (
                  <tr key={a} className="border-b border-[#D9E0EA]"><td className="p-4">{a}</td><td className="p-4 font-medium text-[#0B1220]">{b}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#475569] mt-3">Prix indicatifs publiés par La Maison Saint-Gobain et MesDépanneurs (2025 et 2026). <Link to="/tarifs-couvreur-caen" className="text-[#1F2D5A] underline">Voir tous les repères de prix</Link></p>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1220] font-semibold tracking-tight mt-12 mb-5">Fiche pratique : {d.nom}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden">
              <tbody>
                {d.fiche.map(([a, b]) => (
                  <tr key={a} className="border-b border-[#D9E0EA]"><th className="p-4 font-semibold text-[#0B1220] w-1/3">{a}</th><td className="p-4">{b}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1220] font-semibold tracking-tight mt-12 mb-5">Communes voisines de {d.nom}</h2>
          <ul className="flex flex-wrap gap-3 list-none ml-0">
            {d.near.map((n) => (
              <li key={n.slug}><Link to={`/couvreur-${n.slug}`} className="inline-block rounded-full bg-white border border-[#D9E0EA] px-4 py-2 text-sm text-[#0B1220] hover:border-[#1F2D5A]">Couvreur {n.nom} ({n.km} km)</Link></li>
            ))}
            <li><Link to="/" className="inline-block rounded-full bg-white border border-[#D9E0EA] px-4 py-2 text-sm text-[#0B1220] hover:border-[#1F2D5A]">Couvreur Caen</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-20 bg-[#E8EBF1]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0B1220] font-light tracking-tight mb-8">Questions fréquentes à {d.nom}</h2>
          <FAQAccordion items={d.faq.map(([q, a]) => ({ q, a }))} />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1220] font-light tracking-tight mb-3">Demander un devis gratuit à {d.nom}</h2>
          <p className="text-[#475569] mb-8">Décrivez la situation : nous examinons la toiture et vous remettons un devis gratuit.</p>
          <div className="premium-card p-6 sm:p-8"><ContactForm defaultCity={d.nom} /></div>
        </div>
      </section>

      <section className="py-14 bg-[#E8EBF1]" data-testid="city-photos">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1220] font-semibold mb-8">Toitures à {d.nom} et aux alentours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pickIllustrations(3, seedOf(d.nom)).map((p) => (
              <div key={p.src} className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <PhotoBand src="/toiture-ardoise.webp" title={`Votre toiture à ${d.nom}`} text="Réparation, rénovation, démoussage, zinguerie : nous examinons la toiture puis remettons un devis gratuit." />
      <CTASection title={`Un couvreur à ${d.nom} ? Appelez-nous`} />
    </>
  );
}
