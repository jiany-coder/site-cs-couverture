import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page introuvable" noindex />
      <section className="min-h-[70vh] flex items-center justify-center px-6 py-32 text-center">
        <div>
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F2D5A] mb-4">404</p>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#0B1220] font-light tracking-tight mb-6">Cette page n'existe pas</h1>
          <p className="text-lg text-[#475569] mb-8 max-w-xl mx-auto">Revenez à l'accueil ou appelez-nous pour un devis gratuit de toiture à Caen.</p>
          <Link to="/" className="inline-flex items-center bg-[#1F2D5A] text-[#F1F2F5] px-8 py-4 rounded-full font-sans font-semibold hover:bg-[#040F2F] transition-colors" data-testid="404-home-link">
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </>
  );
}
