// Source unique des informations de l'entreprise. Tout ce qui est marqué [À COMPLÉTER] est à confirmer avec le client avant mise en ligne.
export const COMPANY = {
  brand: "CS Couverture Rénovation",
  shortBrand: "CS Couverture",
  tagline: "Couvreur à Caen",
  phone: "06 04 11 66 68", // numéro affiché sur la fiche Google, à confirmer
  phoneRaw: "+33604116668",
  email: null, // [À COMPLÉTER] adresse e-mail professionnelle
  address: "13 rue des Quatre Vents, 14000 Caen",
  streetAddress: "13 rue des Quatre Vents",
  city: "Caen",
  postalCode: "14000",
  region: "Normandie",
  department: "Calvados (14)",
  hours: "Lun-Sam : 8h00 à 20h00", // horaires de la fiche Google
  geo: { latitude: 49.1646369, longitude: -0.3431176 },
  radiusKm: 70,
  logos: {
    og: `${process.env.PUBLIC_URL || ""}/og-cs-couverture.jpg`,
    main: `${process.env.PUBLIC_URL || ""}/logo-cs-couverture-512.webp`,
    icon: `${process.env.PUBLIC_URL || ""}/logo-cs-couverture-192.webp`,
  },
  social: {
    gbp: "https://www.google.com/maps/place/?q=place_id:ChIJXXNMmIPKD0ARObhgGYiNXpo",
    reviewLink: "https://search.google.com/local/writereview?placeid=ChIJXXNMmIPKD0ARObhgGYiNXpo",
  },
  // Avis Google relevés dans l'audit du 13 octobre 2026 (à mettre à jour avec la fiche).
  rating: { value: "5", count: 18, asOf: "octobre 2026" },
  // Domaine : un seul endroit à changer. [À COMPLÉTER] domaine définitif.
  site: process.env.REACT_APP_SITE_URL || "https://www.cs-couverture-caen.fr",
  // Informations à fournir par le client : tant qu'elles sont nulles, elles ne sont pas affichées sur le site.
  // Offre affichée dans le bandeau du haut : à valider avec le client avant la mise en ligne (mettre enabled: false sinon).
  promo: { enabled: true, text: "Profitez-en ! 10 % de remise pour tout service de couvreur avant le 11/12/2026", until: "2026-12-11" },
  labels: [],
  decennale: true, // garantie décennale, confirmée par le client
  experienceYears: 20, // confirmé par le client : expérience de l'artisan dans la couverture
  urgence: null,
  legal: {
    name: "Sony Capello (CS Couverture Rénovation)",
    form: "Entrepreneur individuel",
    siret: "538 869 132 00026", // SIREN 538 869 132, registre public (societe.com), siège 13 rue des Quatre Vents, 14000 Caen
    tva: "[À COMPLÉTER]",
    publisher: "Sony Capello",
  },
};

export const asset = (p) => `${process.env.PUBLIC_URL || ""}${p}`;
export const telHref = `tel:${COMPANY.phoneRaw}`;
export const logoUrl = (path = COMPANY.logos.main) => `${COMPANY.site}${path.replace(process.env.PUBLIC_URL || "", "")}`;
