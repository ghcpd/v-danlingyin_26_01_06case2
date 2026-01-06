export interface Artwork {
  id: string;
  title: string;
  year: number;
  description: string;
  image: string;
  alt: string;
}

const descriptionBase =
  "A cultural promotion website introducing Leonardo da Vinci’s life, artistic works, and influence.";

const artworks: Artwork[] = [
  {
    id: "mona-lisa",
    title: "Mona Lisa",
    year: 1503,
    description: descriptionBase,
    image: new URL("../assets/mona-lisa.svg", import.meta.url).href,
    alt: "Mona Lisa, 1503"
  },
  {
    id: "the-last-supper",
    title: "The Last Supper",
    year: 1498,
    description: descriptionBase,
    image: new URL("../assets/last-supper.svg", import.meta.url).href,
    alt: "The Last Supper, 1498"
  },
  {
    id: "vitruvian-man",
    title: "Vitruvian Man",
    year: 1490,
    description: descriptionBase,
    image: new URL("../assets/vitruvian-man.svg", import.meta.url).href,
    alt: "Vitruvian Man, 1490"
  },
  {
    id: "lady-with-an-ermine",
    title: "Lady with an Ermine",
    year: 1490,
    description: descriptionBase,
    image: new URL("../assets/lady-ermine.svg", import.meta.url).href,
    alt: "Lady with an Ermine, 1490"
  }
];

export function getArtworkById(id: string): Artwork | undefined {
  return artworks.find((artwork) => artwork.id === id);
}

export default artworks;
