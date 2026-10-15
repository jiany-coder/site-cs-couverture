import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { COMPANY, telHref } from "../data/company";
import { SERVICES } from "../data/services";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/couvreur-pays-d-auge", label: "Pays d'Auge" },
  { to: "/zone-d-intervention", label: "Zone" },
  { to: "/tarifs-couvreur-caen", label: "Tarifs" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/blog", label: "Blog" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  React.useEffect(() => { setOpen(false); }, [loc.pathname]);

  const linkCls = ({ isActive }) =>
    `text-sm font-sans link-underline ${isActive ? "text-[#0A2A5C] font-semibold" : "text-[#475569] hover:text-[#0A2A5C]"}`;

  return (
    <header data-testid="site-header" className="sticky top-0 z-40 backdrop-blur-xl bg-[#F6F8FB]/90 border-b border-[#0A2A5C]/10">
      <div className="hidden md:block border-b border-[#0A2A5C]/10 bg-white/70">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-9 flex items-center justify-between text-xs font-sans text-[#475569]">
          <div className="flex items-center gap-6">
            <a href={telHref} className="inline-flex items-center gap-1.5 font-semibold text-[#0A2A5C]"><Phone className="w-3.5 h-3.5" strokeWidth={2} /> {COMPANY.phone}</a>
            {COMPANY.email && <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" strokeWidth={2} /> {COMPANY.email}</a>}
          </div>
          <span>{COMPANY.hours} · Devis gratuit · Caen, Pays d'Auge et Calvados</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
            <img src={COMPANY.logos.icon} alt="CS Couverture Caen" width="46" height="64" className="h-14 w-auto lg:h-16 object-contain" />
            <div className="hidden sm:block leading-tight">
              <div className="font-serif text-[#0B1220] text-lg lg:text-xl font-semibold tracking-tight">{COMPANY.brand}</div>
              <div className="text-[10px] lg:text-xs tracking-[0.18em] uppercase text-[#0A2A5C] font-sans font-semibold">Couvreur à Caen · Pays d'Auge</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7" data-testid="desktop-nav">
            <NavLink to="/" end className={linkCls}>Accueil</NavLink>
            <div className="relative group">
              <button className="text-sm font-sans text-[#475569] hover:text-[#0A2A5C] inline-flex items-center gap-1" data-testid="nav-services" aria-haspopup="true">
                Services <ChevronDown className="w-4 h-4" strokeWidth={1.75} />
              </button>
              <div className="absolute left-0 top-full pt-3 hidden group-hover:block group-focus-within:block">
                <ul className="w-72 rounded-2xl bg-white border border-[#D9E0EA] shadow-xl p-2">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/${s.slug}`} className="block px-4 py-2.5 rounded-xl text-sm text-[#475569] hover:bg-[#E4EAF3] hover:text-[#0A2A5C]">{s.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {NAV.slice(1).map((n) => (
              <NavLink key={n.to} to={n.to} className={linkCls} data-testid={`nav-${n.to.replace(/\//g, "") || "home"}`}>{n.label}</NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={telHref} className="hidden md:inline-flex items-center gap-2 text-[#0A2A5C] font-sans font-semibold text-sm" data-testid="header-phone">
              <Phone className="w-4 h-4" strokeWidth={1.75} /> {COMPANY.phone}
            </a>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center bg-[#D7141E] text-white px-5 py-2.5 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:bg-[#061C42] hover:-translate-y-0.5"
              data-testid="header-cta-devis"
            >
              Demander un devis
            </Link>
            <button className="lg:hidden p-2 -mr-2 text-[#0A2A5C]" onClick={() => setOpen((v) => !v)} aria-label="Menu" data-testid="mobile-menu-toggle">
              {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#0A2A5C]/10 bg-[#F6F8FB] max-h-[80vh] overflow-y-auto" data-testid="mobile-menu">
          <nav className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
            <NavLink to="/" end className={({ isActive }) => `py-3 px-3 rounded-lg text-base font-sans ${isActive ? "bg-[#E4EAF3] text-[#0A2A5C] font-semibold" : "text-[#475569]"}`}>Accueil</NavLink>
            <p className="px-3 pt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0A2A5C]">Services</p>
            {SERVICES.map((s) => (
              <NavLink key={s.slug} to={`/${s.slug}`} className={({ isActive }) => `py-2.5 px-3 rounded-lg text-sm font-sans ${isActive ? "bg-[#E4EAF3] text-[#0A2A5C] font-semibold" : "text-[#475569]"}`}>{s.title}</NavLink>
            ))}
            <p className="px-3 pt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0A2A5C]">Le site</p>
            {NAV.slice(1).map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => `py-3 px-3 rounded-lg text-base font-sans ${isActive ? "bg-[#E4EAF3] text-[#0A2A5C] font-semibold" : "text-[#475569]"}`}>{n.label}</NavLink>
            ))}
            <div className="flex gap-3 mt-4">
              <a href={telHref} className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D7141E] text-white px-4 py-3 rounded-full font-semibold text-sm">
                <Phone className="w-4 h-4" /> Appeler
              </a>
              <Link to="/contact" className="flex-1 inline-flex items-center justify-center bg-[#D7141E] text-white px-4 py-3 rounded-full font-semibold text-sm">Devis gratuit</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
