import React from "react";
import { asset } from "../data/company";

// Grande photo de toiture en fond de bandeau, assombrie par un dégradé bleu marine pour garder le texte lisible.
export default function HeroBg({ src = "/hero-toiture.webp", strength = 0.78 }) {
  return (
    <>
      <img src={asset(src)} alt="" aria-hidden="true" width="1920" height="1080" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" decoding="async" />
      <div className="absolute inset-0" style={{ background: `linear-gradient(100deg, rgba(6,28,66,${strength}) 0%, rgba(8,35,80,${strength - 0.2}) 55%, rgba(8,35,80,${Math.max(strength - 0.45, 0.2)}) 100%)` }} />
    </>
  );
}
