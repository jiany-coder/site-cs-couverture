import React from "react";
import { Star } from "lucide-react";

export default function TestimonialCard({ t }) {
  return (
    <article className="premium-card p-8 flex flex-col h-full" data-testid="testimonial-card">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#D4A841] text-[#D4A841]" strokeWidth={1} />
        ))}
      </div>
      <p className="font-serif text-xl leading-snug text-[#0B1220] mb-6 flex-1">« {t.text} »</p>
      <div className="flex items-center justify-between pt-4 border-t border-[#D9E0EA]">
        <div>
          <p className="font-sans font-semibold text-[#0A2A5C] text-sm">{t.name}</p>
          <p className="font-sans text-xs text-[#475569]">{t.city}</p>
        </div>
        <p className="text-xs text-[#475569]/70 font-sans">{t.date}</p>
      </div>
    </article>
  );
}
