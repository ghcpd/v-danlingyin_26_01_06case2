export interface Artwork {
  id: string
  title: string
  year: number
  description: string
  imageUrl: string
}

export const artworks: Artwork[] = [
  {
    id: 'mona-lisa',
    title: 'Mona Lisa',
    year: 1503,
    description: 'The Mona Lisa is one of the most recognizable paintings in the world, celebrated for its subject\'s enigmatic expression and Leonardo\'s masterful use of sfumato technique. Painted between 1503 and 1519, this portrait of Lisa Gherardini showcases Leonardo\'s deep understanding of human anatomy and psychology. The subtle modeling of forms and atmospheric illusionism demonstrate his scientific approach to art, making this work a pinnacle of Renaissance portraiture.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
  },
  {
    id: 'the-last-supper',
    title: 'The Last Supper',
    year: 1498,
    description: 'The Last Supper is a monumental mural painting depicting Jesus and his disciples at their final meal together. Created between 1495 and 1498 for the Convent of Santa Maria delle Grazie in Milan, this masterpiece captures the dramatic moment when Jesus announces that one of his disciples will betray him. Leonardo\'s innovative use of perspective draws the viewer\'s eye to Christ at the center, while each apostle\'s individual reaction reveals Leonardo\'s psychological insight and narrative genius.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1280px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg'
  },
  {
    id: 'vitruvian-man',
    title: 'Vitruvian Man',
    year: 1490,
    description: 'The Vitruvian Man is Leonardo\'s iconic drawing that perfectly illustrates the correlation between the human body and geometry. Created around 1490, this work demonstrates Leonardo\'s belief that the workings of the human body are analogous to the workings of the universe. The figure is inscribed within both a circle and a square, representing the blend of art and science that characterized Leonardo\'s work and the Renaissance humanist ideal of man as the measure of all things.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/800px-Da_Vinci_Vitruve_Luc_Viatour.jpg'
  },
  {
    id: 'lady-with-an-ermine',
    title: 'Lady with an Ermine',
    year: 1490,
    description: 'Lady with an Ermine is a portrait of Cecilia Gallerani, painted around 1489-1490 during Leonardo\'s time in Milan. The subject holds a white ermine, which may symbolize purity and also serves as a play on her surname. This painting exemplifies Leonardo\'s ability to capture both physical likeness and inner character. The dynamic pose and the subject\'s gaze create a sense of movement and psychological presence rarely seen in portraits of this era.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg/800px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg'
  }
]
