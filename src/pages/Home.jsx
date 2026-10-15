import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Star, MapPin, CheckCircle2, ExternalLink } from "lucide-react";
import SEO, { buildWebSiteSchema, buildLocalBusinessSchema, buildFAQSchema, DESCRIPTION } from "../components/SEO";
import { COMPANY, telHref } from "../data/company";
import HeroBg from "../components/HeroBg";
import PhotoBand from "../components/PhotoBand";
import { SERVICES } from "../data/services";
import { CITIES, PRIORITY_CITIES } from "../data/cities";
import { PRICE_GROUPS } from "../data/prices";
import { GLOBAL_FAQ } from "../data/faq";
import { PHOTOS, HAS_PHOTOS, pickIllustrations } from "../data/photos";
import ServiceCard from "../components/ServiceCard";
import FAQAccordion from "../components/FAQAccordion";
import TrustBar from "../components/TrustBar";
import CTASection from "../components/CTASection";
import RoofPattern from "../components/RoofPattern";
import PhotoSlot from "../components/PhotoSlot";

const SITUATIONS = [
  ["Tache au plafond ou fuite après la pluie", "Un raccord, une tuile ou le faîtage à reprendre", "reparation-toiture-caen", "Réparation de toiture"],
  ["Tuiles ou ardoises au sol ou décalées", "Remplacement ciblé des éléments abîmés", "remplacement-tuiles-ardoises-caen", "Remplacement de tuiles"],
  ["Mousse, lichens, toiture noircie", "Démoussage, puis hydrofuge si la couverture est saine", "demoussage-toiture-caen", "Démoussage"],
  ["Gouttière qui déborde", "Nettoyage, réparation ou remplacement", "gouttieres-caen", "Gouttières"],
  ["Fuite près d'une cheminée ou d'un mur", "Solin ou noue à reprendre", "couvreur-zingueur-caen", "Couvreur zingueur"],
  ["Fuites sur plusieurs zones, couverture en fin de vie", "Rénovation partielle ou complète", "renovation-toiture-caen", "Rénovation de toiture"],
];

const STEPS = [
  ["Vous nous contactez", `Par téléphone au ${COMPANY.phone} ou avec le formulaire, en décrivant le problème (fuite, mousse, gouttière, projet de rénovation).`],
  ["Examen de la toiture", "Nous regardons la couverture, les raccords et les gouttières pour identifier la cause réelle."],
  ["Devis gratuit", "Vous recevez un devis détaillé poste par poste, sans engagement, avant de décider."],
  ["Intervention", "Les travaux sont réalisés selon le devis accepté, avec la méthode adaptée au matériau de votre toiture."],
];

export default function Home() {
  const jsonLd = [buildLocalBusinessSchema(), buildWebSiteSchema(), buildFAQSchema(GLOBAL_FAQ)];
  const gallery = HAS_PHOTOS ? PHOTOS.slice(0, 6) : pickIllustrations(6, 2);

  return (
    <>
      <SEO
        title={`Couvreur à Caen | Toiture, zinguerie | ${COMPANY.shortBrand}`}
        description={`Couvreur à Caen : réparation, rénovation, démoussage et nettoyage de toiture, zinguerie. Rayon de ${COMPANY.radiusKm} km, devis gratuit. Tél. ${COMPANY.phone}`}
        canonical={`${COMPANY.site}/`}
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center bg-[#061C42] overflow-hidden" data-testid="hero-section">
        <HeroBg src="/hero-toiture.webp" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 bg-[#E4EAF3]/12 backdrop-blur-md border border-[#E4EAF3]/30 px-4 py-2 rounded-full mb-7">
              <MapPin className="w-3.5 h-3.5 text-[#E4EAF3]" strokeWidth={1.75} />
              <span className="text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#E4EAF3]">Caen · Calvados · {COMPANY.radiusKm} km autour</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-[#F6F8FB] mb-7">
              Couvreur à Caen : <span className="italic font-light">réparation, rénovation</span> et entretien de toiture
            </h1>
            <p className="text-lg sm:text-xl text-[#F6F8FB]/85 max-w-2xl mb-10 leading-relaxed">{DESCRIPTION}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#D7141E] text-white px-8 py-4 rounded-full font-sans font-semibold text-base transition-all hover:bg-[#B50F18] hover:-translate-y-1 hover:shadow-xl"
                data-testid="hero-cta-devis"
              >
                Devis gratuit <ArrowRight className="w-5 h-5" strokeWidth={1.75} />
              </Link>
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-[#F6F8FB] px-8 py-4 rounded-full font-sans font-semibold text-base border-2 border-[#E4EAF3]/40 transition-all hover:bg-[#E4EAF3] hover:text-[#0A2A5C]"
                data-testid="hero-cta-phone"
              >
                <Phone className="w-5 h-5" strokeWidth={1.75} /> {COMPANY.phone}
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 text-[#F6F8FB]/80 text-sm">
              <span className="inline-flex items-center gap-1.5 font-sans">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-4 h-4 fill-[#D4A841] text-[#D4A841]" strokeWidth={1} />)}
                <span className="ml-1">{COMPANY.rating.value}/5 · {COMPANY.rating.count} avis Google</span>
              </span>
              <span className="hidden sm:inline-block w-px h-4 bg-[#F6F8FB]/30" />
              <span className="font-sans">Lundi au samedi, 8 h à 20 h</span>
            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <img src={COMPANY.logos.main} alt="Logo CS Couverture, experts toiture à Caen" width="512" height="710" className="w-64 h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]" fetchPriority="high" decoding="async" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* SERVICES */}
      <section className="py-24 sm:py-28" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 reveal">
            <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#0A2A5C] mb-4">Nos prestations</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1220] font-light leading-[1.1] tracking-tight mb-5">
              Quels travaux de toiture réalise un couvreur à Caen ?
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed">
              {COMPANY.brand} traite la couverture, la zinguerie, les gouttières et l'entretien des toits : onze prestations, chacune avec sa page dédiée, ses repères de prix et ses réponses aux questions fréquentes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => <div key={s.slug} className="reveal"><ServiceCard service={s} /></div>)}
          </div>
        </div>
      </section>

      <PhotoBand src="/toiture-tuiles-rouges.webp" title="Votre toiture mérite un vrai diagnostic" text="Nous examinons la couverture, repérons l'origine du problème, puis remettons un devis gratuit et détaillé." />

      {/* SITUATIONS */}
      <section className="py-24 bg-[#EDF1F7]" data-testid="situations-section">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#0A2A5C] mb-4 reveal">Le bon réflexe</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1220] font-light leading-tight tracking-tight mb-5 reveal">
            Réparer, entretenir ou rénover : que faire selon ce que vous voyez ?
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed mb-10 reveal">
            Un désordre localisé sur une toiture saine se règle en général par une réparation ciblée. Des fuites sur plusieurs zones ou une couverture en fin de vie justifient une rénovation. Ce tableau donne les cas les plus courants ; l'examen de la toiture confirme le diagnostic.
          </p>
          <div className="overflow-x-auto reveal">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#E4EAF3] text-[#0B1220]">
                  <th className="p-4">Ce que vous constatez</th>
                  <th className="p-4">Ce qui est le plus probable</th>
                  <th className="p-4">Notre page</th>
                </tr>
              </thead>
              <tbody>
                {SITUATIONS.map(([a, b, slug, label]) => (
                  <tr key={slug} className="border-b border-[#D9E0EA] align-top">
                    <td className="p-4 font-medium text-[#0B1220]">{a}</td>
                    <td className="p-4">{b}</td>
                    <td className="p-4"><Link to={`/${slug}`} className="text-[#0A2A5C] underline">{label}</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="py-24" data-testid="gallery-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl reveal">
              <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#0A2A5C] mb-4">Chantiers</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1220] font-light leading-[1.1] tracking-tight">Des toitures de Caen et de ses environs</h2>
            </div>
            <Link to="/realisations" className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0A2A5C] link-underline">
              Voir les réalisations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {gallery
              ? gallery.map((p) => (
                  <div key={p.src} className="relative overflow-hidden rounded-2xl aspect-[4/3] reveal">
                    <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                ))
              : [0, 1, 2].map((i) => <PhotoSlot key={i} />)}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-[#0A2A5C] text-[#F6F8FB] relative overflow-hidden">
        <RoofPattern opacity={0.08} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#E4EAF3] mb-4">Comment ça se passe</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F6F8FB] font-light leading-tight tracking-tight mb-14 max-w-3xl">
            Du premier appel à l'intervention : quatre étapes
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="border-t-2 border-[#E4EAF3]/40 pt-6 reveal">
                <span className="font-serif text-5xl font-light text-[#E4EAF3]/60">0{i + 1}</span>
                <h3 className="font-serif text-xl font-semibold text-[#F6F8FB] mt-3 mb-3">{t}</h3>
                <p className="text-sm text-[#F6F8FB]/75 leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRIX */}
      <section className="py-24" data-testid="prices-section">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#0A2A5C] mb-4 reveal">Repères de prix</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1220] font-light leading-tight tracking-tight mb-5 reveal">Combien coûtent les travaux de toiture ?</h2>
          <p className="text-lg text-[#475569] leading-relaxed mb-8 reveal">
            Une réparation de fuite coûte en général de 400 à 2 500 €, un démoussage de 25 à 35 € le m² et une couverture neuve de 90 à 200 € le m² selon le matériau. Ces repères viennent de guides publics, cités en bas de la page des tarifs : seul le devis gratuit donne le prix de votre toiture.
          </p>
          <div className="overflow-x-auto reveal">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#E4EAF3] text-[#0B1220]"><th className="p-4">Prestation</th><th className="p-4">Repère de prix</th></tr>
              </thead>
              <tbody>
                {[PRICE_GROUPS[1].rows[0], PRICE_GROUPS[0].rows[0], PRICE_GROUPS[0].rows[1], PRICE_GROUPS[1].rows[1], PRICE_GROUPS[2].rows[2], PRICE_GROUPS[2].rows[3]].map(([a, b]) => (
                  <tr key={a} className="border-b border-[#D9E0EA]"><td className="p-4">{a}</td><td className="p-4 font-medium text-[#0B1220]">{b}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 reveal">
            <Link to="/tarifs-couvreur-caen" className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0A2A5C] link-underline">Voir tous les repères de prix <ArrowRight className="w-4 h-4" /></Link>
          </p>
        </div>
      </section>

      <PhotoBand src="/toiture-ardoise.webp" title="Du littoral au bocage, nous venons chez vous" text={`Caen et ${CITIES.length} communes dans un rayon d'environ 70 km, de la côte au Pays d'Auge : une seule entreprise, un seul interlocuteur.`} />

      {/* ZONE */}
      <section className="py-24 bg-[#EDF1F7]" data-testid="zone-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 reveal">
            <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#0A2A5C] mb-4">Zone d'intervention</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1220] font-light leading-tight tracking-tight mb-5">Où intervient CS Couverture Rénovation ?</h2>
            <p className="text-lg text-[#475569] leading-relaxed mb-6">
              L'entreprise est basée à Caen et se déplace dans un rayon d'environ {COMPANY.radiusKm} km : {CITIES.length + 1} communes, de la côte de Nacre au Pays d'Auge, jusqu'à Lisieux, Bernay, Vimoutiers, Falaise et Argentan. Chaque commune a sa page.
            </p>
            <Link to="/zone-d-intervention" className="inline-flex items-center gap-2 bg-[#0A2A5C] text-[#F6F8FB] px-7 py-3.5 rounded-full font-sans font-semibold text-sm hover:bg-[#061C42] transition-colors">
              Toutes les communes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-7 reveal">
            <p className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-[#D7141E] mb-3">Secteurs prioritaires</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {PRIORITY_CITIES.map((c) => (
                <li key={c.slug}>
                  <Link to={`/couvreur-${c.slug}`} className="block rounded-xl bg-[#0A2A5C] text-white border border-[#0A2A5C] px-4 py-3 text-sm font-semibold hover:bg-[#D7141E] hover:border-[#D7141E] transition-colors">
                    Couvreur {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/couvreur-pays-d-auge" className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0A2A5C] link-underline mb-6">Couvreur dans tout le Pays d'Auge <ArrowRight className="w-4 h-4" /></Link>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {CITIES.filter((c) => !c.priority).slice(0, 15).map((c) => (
                <li key={c.slug}>
                  <Link to={`/couvreur-${c.slug}`} className="block rounded-xl bg-white border border-[#D9E0EA] px-4 py-3 text-sm text-[#0B1220] hover:border-[#0A2A5C] hover:text-[#0A2A5C] transition-colors">
                    Couvreur {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section className="py-20" data-testid="reviews-section">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center reveal">
          <div className="flex justify-center gap-1 mb-4">
            {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-6 h-6 fill-[#D4A841] text-[#D4A841]" strokeWidth={1} />)}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1220] font-light leading-tight tracking-tight mb-4">
            {COMPANY.rating.value}/5 sur {COMPANY.rating.count} avis Google
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed mb-8">
            Les avis de nos clients sont publiés sur la fiche Google de {COMPANY.brand}. Note relevée en {COMPANY.rating.asOf}.
          </p>
          <a href={COMPANY.social.gbp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-[#0A2A5C] text-[#0A2A5C] px-7 py-3.5 rounded-full font-sans font-semibold text-sm hover:bg-[#0A2A5C] hover:text-[#F6F8FB] transition-colors">
            Lire les avis sur Google <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#EDF1F7]" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#0A2A5C] mb-4">Questions fréquentes</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1220] font-light leading-tight tracking-tight mb-10">Vos questions sur les travaux de toiture</h2>
          <FAQAccordion items={GLOBAL_FAQ} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
