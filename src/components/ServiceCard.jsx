import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ICONS } from "../data/services";
import RoofPattern from "./RoofPattern";

export default function ServiceCard({ service }) {
  const Icon = ICONS[service.icon] || ICONS.House;
  return (
    <Link to={`/${service.slug}`} className="group block premium-card overflow-hidden" data-testid={`service-card-${service.slug}`}>
      <div className="relative h-28 overflow-hidden bg-gradient-to-br from-[#0A2A5C] to-[#061C42]">
        <RoofPattern opacity={0.16} />
        <div className="absolute bottom-0 left-6 translate-y-1/2 w-14 h-14 rounded-full bg-[#E4EAF3] border-4 border-white flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#0A2A5C]" strokeWidth={1.5} />
        </div>
      </div>
      <div className="p-7 pt-10">
        <h3 className="font-serif text-xl text-[#0B1220] font-semibold mb-2 leading-tight">{service.title}</h3>
        <p className="text-sm text-[#475569] mb-5 leading-relaxed">{service.short}</p>
        <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0A2A5C] group-hover:gap-3 transition-all">
          Découvrir <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
        </span>
      </div>
    </Link>
  );
}
