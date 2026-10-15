import React from "react";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import SEO, { buildLocalBusinessSchema, buildPageSchema, buildBreadcrumbSchema } from "../components/SEO";
import { COMPANY, telHref } from "../data/company";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const url = `${COMPANY.site}/contact`;
  const rows = [
    { Icon: Phone, label: "Téléphone", node: <a href={telHref} className="text-lg font-serif text-[#0B1220] hover:text-[#1F2D5A]" data-testid="contact-phone-link">{COMPANY.phone}</a> },
    ...(COMPANY.email ? [{ Icon: Mail, label: "E-mail", node: <a href={`mailto:${COMPANY.email}`} className="text-lg font-serif text-[#0B1220] hover:text-[#1F2D5A] break-all">{COMPANY.email}</a> }] : []),
    { Icon: MapPin, label: "Adresse", node: <p className="text-lg font-serif text-[#0B1220]">{COMPANY.address}</p> },
    { Icon: Clock, label: "Horaires", node: <p className="text-lg font-serif text-[#0B1220]">Lundi au samedi, 8 h à 20 h<br />Dimanche fermé</p> },
  ];
  return (
    <>
      <SEO
        title={`Devis gratuit couvreur Caen | ${COMPANY.shortBrand}`}
        description={`Demandez un devis gratuit pour une réparation, une rénovation ou un entretien de toiture à Caen et dans un rayon de ${COMPANY.radiusKm} km. Tél. ${COMPANY.phone}`}
        canonical={url}
        jsonLd={[
          buildLocalBusinessSchema(),
          buildPageSchema("ContactPage", `Contacter ${COMPANY.brand}`, url, "Coordonnées et formulaire de demande de devis gratuit."),
          buildBreadcrumbSchema([["Accueil", COMPANY.site + "/"], ["Contact", url]]),
        ]}
      />

      <section className="pt-28 pb-14 bg-[#F1F2F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 reveal">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F2D5A] mb-4">Contact</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1220] font-light leading-[1.1] tracking-tight max-w-4xl">Demander un devis gratuit à un couvreur de Caen</h1>
          <p className="text-lg text-[#475569] max-w-2xl mt-6">Décrivez le problème ou le projet : nous examinons la toiture puis vous remettons un devis gratuit. Vous pouvez aussi appeler directement.</p>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 reveal">
            <div className="premium-card p-8 mb-6">
              <h2 className="font-serif text-2xl font-semibold text-[#0B1220] mb-6">Nos coordonnées</h2>
              <ul className="space-y-5">
                {rows.map(({ Icon, label, node }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#DCE1EB] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#1F2D5A]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] font-bold text-[#1F2D5A] mb-1">{label}</p>
                      {node}
                    </div>
                  </li>
                ))}
              </ul>
              <a href={COMPANY.social.gbp} target="_blank" rel="noopener noreferrer" className="mt-7 w-full inline-flex items-center justify-center gap-2 border-2 border-[#1F2D5A] text-[#1F2D5A] px-6 py-3.5 rounded-full font-sans font-semibold text-sm hover:bg-[#1F2D5A] hover:text-[#F1F2F5] transition-colors">
                Voir notre fiche Google <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="premium-card p-8">
              <h2 className="font-serif text-xl font-semibold text-[#0B1220] mb-4">Zone d'intervention</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {COMPANY.brand} intervient à Caen et dans un rayon d'environ {COMPANY.radiusKm} km : Hérouville-Saint-Clair, Mondeville, Ifs, Ouistreham, Courseulles-sur-Mer, Cabourg, Bayeux, Villers-Bocage et les communes voisines.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 reveal">
            <div className="premium-card p-8 sm:p-10">
              <h2 className="font-serif text-2xl font-semibold text-[#0B1220] mb-2">Votre demande de devis</h2>
              <p className="text-sm text-[#475569] mb-6">Les champs marqués d'une étoile sont obligatoires.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
