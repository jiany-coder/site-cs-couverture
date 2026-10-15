import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY, telHref } from "../data/company";
import RoofPattern from "./RoofPattern";

export default function CTASection({ title = "Un problème de toiture ? Parlons-en", subtitle = "Décrivez-nous la situation : nous examinons la toiture et vous remettons un devis gratuit.", accent = "Devis gratuit" }) {
  return (
    <section className="py-20 sm:py-28 bg-[#0B1220] text-[#F6F8FB] relative overflow-hidden" data-testid="cta-section">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#0B1220] to-[#0A2A5C]" />
      <RoofPattern opacity={0.1} />
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center reveal">
        <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#E4EAF3] mb-5">{accent}</p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F6F8FB] font-light leading-tight tracking-tight mb-6">{title}</h2>
        <p className="text-lg text-[#F6F8FB]/80 max-w-2xl mx-auto mb-10 leading-relaxed">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#D7141E] text-white px-8 py-4 rounded-full font-sans font-semibold text-base transition-all duration-300 hover:bg-[#B50F18] hover:-translate-y-1 hover:shadow-xl"
            data-testid="cta-section-devis"
          >
            Demander un devis <ArrowRight className="w-5 h-5" strokeWidth={1.75} />
          </Link>
          <a
            href={telHref}
            className="inline-flex items-center justify-center gap-2 bg-transparent text-[#E4EAF3] px-8 py-4 rounded-full font-sans font-semibold text-base border-2 border-[#E4EAF3]/40 transition-all duration-300 hover:bg-[#E4EAF3] hover:text-[#0A2A5C]"
            data-testid="cta-section-phone"
          >
            <Phone className="w-5 h-5" strokeWidth={1.75} /> {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
