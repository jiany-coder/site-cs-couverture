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
  radiusKm: 30,
  logos: {
    main: "/logo-cs-couverture-512.webp",
    icon: "/logo-cs-couverture-192.webp",
  },
  social: {
    gbp: "https://www.google.com/maps/place/?q=place_id:ChIJXXNMmIPKD0ARObhgGYiNXpo",
    reviewLink: "https://search.google.com/local/writereview?placeid=ChIJXXNMmIPKD0ARObhgGYiNXpo",
  },
  // Avis Google relevés dans l'audit du 13 octobre 2026 (à mettre à jour avec la fiche).
  rating: { value: "5", count: 18, asOf: "octobre 2026" },
  // Domaine : un seul endroit à changer. [À COMPLÉTER] domaine définitif.
  site: "https://www.cs-couverture-caen.fr",
  // Informations à fournir par le client : tant qu'elles sont nulles, elles ne sont pas affichées sur le site.
  labels: [],
  experienceYears: null,
  urgence: null,
  legal: {
    name: "[À COMPLÉTER]",
    form: "[À COMPLÉTER]",
    siret: "[À COMPLÉTER]",
    tva: "[À COMPLÉTER]",
    publisher: "[À COMPLÉTER]",
  },
};

export const telHref = `tel:${COMPANY.phoneRaw}`;
export const logoUrl = (path = COMPANY.logos.main) => `${COMPANY.site}${path}`;
