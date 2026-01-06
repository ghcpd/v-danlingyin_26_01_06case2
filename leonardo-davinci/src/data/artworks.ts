export interface Artwork {
  id: string
  title: string
  year: number
  image: string
  description: string
}

export const artworks: Artwork[] = [
  {
    id: 'mona-lisa',
    title: 'Mona Lisa',
    year: 1503,
    image: '/images/mona-lisa.jpg',
    description: 'The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world." The painting\'s novel qualities include the subject\'s enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.'
  },
  {
    id: 'the-last-supper',
    title: 'The Last Supper',
    year: 1498,
    image: '/images/last-supper.jpg',
    description: 'The Last Supper is a late 15th-century mural painting by Italian artist Leonardo da Vinci housed by the refectory of the Convent of Santa Maria delle Grazie in Milan, Italy. It is one of the Western world\'s most recognizable paintings. The work is assumed to have been started around 1495–96 and was commissioned as part of a plan of renovations to the church and its convent buildings by Leonardo\'s patron Ludovico Sforza, Duke of Milan.'
  },
  {
    id: 'vitruvian-man',
    title: 'Vitruvian Man',
    year: 1490,
    image: '/images/vitruvian-man.jpg',
    description: 'The Vitruvian Man is a drawing by Leonardo da Vinci made around 1490. It is accompanied by notes based on the work of the architect Vitruvius. The drawing, which is in ink on paper, depicts a man in two superimposed positions with his arms and legs apart and inscribed in a circle and square. The drawing and text are sometimes called the Canon of Proportions or, less often, Proportions of Man.'
  },
  {
    id: 'lady-with-an-ermine',
    title: 'Lady with an Ermine',
    year: 1490,
    image: '/images/lady-ermine.jpg',
    description: 'Lady with an Ermine is a portrait painting by Italian artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. The subject of the portrait is Cecilia Gallerani, a mistress of Ludovico Sforza, Duke of Milan. The painting is one of only four portraits of women painted by Leonardo, the others being the Mona Lisa, the portrait of Ginevra de\' Benci, and La Belle Ferronnière.'
  }
]

export function getArtworkById(id: string): Artwork | undefined {
  return artworks.find((artwork) => artwork.id === id)
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.slice(0, 3)
}
