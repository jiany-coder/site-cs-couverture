// Photos de chantiers réels du client. Tant que la liste est vide, le site affiche des encadrés réservés (sans fausse photo).
// Pour ajouter une photo : la déposer dans /public/photos/ puis ajouter une ligne ci-dessous.
// Format : { src: "/photos/nom.webp", alt: "Description précise : travaux, commune", w: 1100, h: 825, title: "Titre court", desc: "Une phrase sur le chantier" }
export const PHOTOS = [];

export const HAS_PHOTOS = PHOTOS.length > 0;
