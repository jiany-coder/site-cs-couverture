import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY, telHref } from "../data/company";
import { SERVICES } from "../data/services";
import { CITIES } from "../data/cities";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-[#F1F2F5]/85 pt-20 pb-10 mt-24" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <img loading="lazy" decoding="async" src={COMPANY.logos.icon} alt="CS Couverture Caen" width="58" height="80" className="h-20 w-auto object-contain" />
          <h3 className="font-serif text-xl font-semibold text-[#F1F2F5] mt-6 mb-3">{COMPANY.brand}</h3>
          <p className="text-sm leading-relaxed mb-6 text-[#F1F2F5]/70">
            Couvreur basé à Caen : réparation, rénovation et entretien de toiture dans un rayon d'environ {COMPANY.radiusKm} km.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-[#DCE1EB]" strokeWidth={1.5} /> {COMPANY.address}</li>
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#DCE1EB]" strokeWidth={1.5} /> <a href={telHref} className="hover:text-[#DCE1EB]">{COMPANY.phone}</a></li>
            {COMPANY.email && <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#DCE1EB]" strokeWidth={1.5} /> <a href={`mailto:${COMPANY.email}`} className="hover:text-[#DCE1EB]">{COMPANY.email}</a></li>}
            <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-[#DCE1EB]" strokeWidth={1.5} /> {COMPANY.hours}</li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-xs text-[#DCE1EB] mb-5">Nos services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link to={`/${s.slug}`} className="hover:text-[#DCE1EB] text-[#F1F2F5]/75">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-xs text-[#DCE1EB] mb-5">Communes</h4>
          <ul className="space-y-1.5 text-sm">
            {CITIES.slice(0, 10).map((c) => (
              <li key={c.slug}><Link to={`/couvreur-${c.slug}`} className="hover:text-[#DCE1EB] text-[#F1F2F5]/75 link-underline">Couvreur {c.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-xs text-[#DCE1EB] mb-5">Informations</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/a-propos" className="hover:text-[#DCE1EB]">À propos</Link></li>
            <li><Link to="/tarifs-couvreur-caen" className="hover:text-[#DCE1EB]">Tarifs</Link></li>
            <li><Link to="/realisations" className="hover:text-[#DCE1EB]">Réalisations</Link></li>
            <li><Link to="/zone-d-intervention" className="hover:text-[#DCE1EB]">Zone d'intervention</Link></li>
            <li><Link to="/blog" className="hover:text-[#DCE1EB]">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-[#DCE1EB]">Contact / Devis</Link></li>
            <li><Link to="/mentions-legales" className="hover:text-[#DCE1EB]">Mentions légales</Link></li>
            <li><Link to="/politique-de-confidentialite" className="hover:text-[#DCE1EB]">Confidentialité</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12 pt-8 border-t border-[#F1F2F5]/10">
        <details className="text-xs text-[#F1F2F5]/55 mb-4">
          <summary className="cursor-pointer hover:text-[#DCE1EB] font-semibold mb-3">▾ Voir toutes les communes desservies ({CITIES.length + 1})</summary>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
            <Link to="/" className="hover:text-[#DCE1EB]">Couvreur Caen</Link>
            {CITIES.map((c) => (
              <Link key={c.slug} to={`/couvreur-${c.slug}`} className="hover:text-[#DCE1EB]">Couvreur {c.name}</Link>
            ))}
          </div>
        </details>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
          <p className="text-xs text-[#F1F2F5]/55">© {new Date().getFullYear()} {COMPANY.brand}. Tous droits réservés.</p>
          <p className="text-xs text-[#F1F2F5]/55">Site créé par <strong className="font-semibold text-[#DCE1EB]/80">Next Business</strong></p>
        </div>
      </div>
    </footer>
  );
}
