import React from "react";
import { Link } from "react-router-dom";
import { Phone, FileText } from "lucide-react";
import { telHref } from "../data/company";

export default function FloatingCTA() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3" data-testid="floating-cta">
      <Link
        to="/contact"
        className="w-14 h-14 rounded-full bg-[#E4EAF3] border border-[#0A2A5C]/15 flex items-center justify-center float-shadow hover:scale-110 transition-transform"
        aria-label="Demander un devis gratuit"
        data-testid="floating-devis"
      >
        <FileText className="w-6 h-6 text-[#0A2A5C]" strokeWidth={2} />
      </Link>
      <a
        href={telHref}
        className="w-14 h-14 rounded-full bg-[#0A2A5C] flex items-center justify-center float-shadow hover:scale-110 transition-transform"
        aria-label="Appeler CS Couverture Rénovation"
        data-testid="floating-phone"
      >
        <Phone className="w-6 h-6 text-[#E4EAF3]" strokeWidth={2} />
      </a>
    </div>
  );
}
