// Photos de chantiers réels du client : à ajouter dans PHOTOS (déposer le fichier dans /public/photos/).
// Format : { src: "/photos/nom.webp", alt: "Description précise : travaux, commune", w: 1100, h: 825, title: "Titre court", desc: "Une phrase sur le chantier" }
// Tant que PHOTOS est vide, le site affiche des images d'illustration de toitures (voir ILLUSTRATIONS), à remplacer par les vraies photos.
import { asset } from "./company";

export const PHOTOS = [];
export const HAS_PHOTOS = PHOTOS.length > 0;

const img = (f, alt) => ({ src: asset(`/photos/${f}.webp`), alt, w: 1200, h: 800 });

export const ILLUSTRATIONS = [
  img("tuiles-rouges", "Toiture en tuiles terre cuite avec cheminée (illustration)"),
  img("tuiles-bleues", "Toiture en tuiles bleu ardoise vernissées (illustration)"),
  img("ardoise", "Couverture en ardoises naturelles (illustration)"),
  img("faitage", "Faîtage d'une toiture en tuiles (illustration)"),
  img("gouttiere", "Gouttière zinc en bas de toiture (illustration)"),
  img("velux", "Fenêtre de toit posée dans une couverture en ardoises (illustration)"),
  img("zinc", "Couverture en zinc à joints debout (illustration)"),
  img("tuiles-brunes", "Toiture en tuiles brunes avec souche de cheminée (illustration)"),
  img("hydrofuge", "Tuiles traitées avec un hydrofuge (illustration)"),
  img("demoussage-apres", "Toiture en tuiles après démoussage (illustration)"),
];

export const SERVICE_IMAGES = {
  "reparation-toiture-caen": img("tuiles-rouges", "Réparation de toiture en tuiles (illustration)"),
  "renovation-toiture-caen": img("tuiles-bleues", "Rénovation de toiture en tuiles (illustration)"),
  "remplacement-tuiles-ardoises-caen": img("ardoise", "Remplacement de tuiles et d'ardoises (illustration)"),
  "reparation-faitage-caen": img("faitage", "Réparation de faîtage (illustration)"),
  "demoussage-toiture-caen": img("demoussage-apres", "Démoussage et nettoyage de toiture (illustration)"),
  "hydrofuge-toiture-caen": img("hydrofuge", "Traitement hydrofuge de toiture (illustration)"),
  "couvreur-zingueur-caen": img("zinc", "Couverture et zinguerie en zinc (illustration)"),
  "gouttieres-caen": img("gouttiere", "Gouttières en zinc (illustration)"),
  "etancheite-toiture-caen": img("etancheite", "Étanchéité d'une toiture plate (illustration)"),
  "traitement-charpente-caen": img("charpente", "Charpente en bois sous toiture (illustration)"),
  "pose-velux-caen": img("velux", "Pose de fenêtre de toit (illustration)"),
};

export const DEMOUSSAGE = { before: img("demoussage-avant", "Toiture envahie par la mousse (illustration)"), after: img("demoussage-apres", "Toiture nettoyée après démoussage (illustration)") };

// Choisit n illustrations différentes, décalées selon une graine (pour varier d'une page à l'autre).
export const pickIllustrations = (n, seed = 0) => Array.from({ length: n }, (_, i) => ILLUSTRATIONS[(seed + i * 3) % ILLUSTRATIONS.length]);
export const seedOf = (str = "") => Array.from(str).reduce((a, c) => a + c.charCodeAt(0), 0);
