import React from 'react'
import {
  Slide,
  Heading,
  Image,
  Link,
  Text,
  List,
  ListItem,
  Layout,
  Fill,
} from 'spectacle'
import images from '../images'
import formatNotes from '../format-notes'

// Notes are in MD
const introNotes = `
- Moi, j'ai travaillé à Toog pendant 2 ans
- Je suis parti en Australie pendant près de 4 ans ou j'ai fait beaucoup de D3
- Je suis revenu avec Tamara qui est aussi frontend
`
const intro = (
  <Slide
    key="1.1"
    notes={formatNotes(introNotes)}
  >
    <Heading fit caps>
      Introduction à D3
    </Heading>
    <Image
      src={images.d3}
      margin="40px auto 60px"
      height="293px"
    />
    <Text bold>
      <Link href="https://github.com/Calvein">
        Par François Robichet (@Calvein)
      </Link>
    </Text>
    <Text textSize="1.1em" margin="15px 0 0">
      <Link href="http://calvein.github.io/nantesjs-20170117">
        http://calvein.github.io/nantesjs-20170117
      </Link>
    </Text>
  </Slide>
)

const d3Notes = `
- lien vers le blog/liste de lien de Mike
- Mike a travaillé au New York Time et depuis près de 2 ans 100% sur D3
- devise de D3
`
const d3 = (
  <Slide
    key="1.2"
    notes={formatNotes(d3Notes)}
  >
    <Heading size={2}>
      Qu'est-ce D3 ?
    </Heading>
    <List>
      <ListItem>
        Le 4ème repo sur Github avec près de 60,000 stars
      </ListItem>
      <ListItem>
        Créé par
        <Link href="https://bost.ocks.org/mike/">
          {' '}Mike Bostock{' '}
        </Link>
        à Standford
      </ListItem>
      <ListItem>
        "Bring data to life with SVG, Canvas and HTML"
      </ListItem>
    </List>
  </Slide>
)

const myExamplesNotes = `
- Mes exemples
`
const myExamples = (
  <Slide
    key="1.3"
    notes={formatNotes(myExamplesNotes)}
  >
    <Heading
      size={2}
      margin='-20px 0 20px'
    >
      Exemples
    </Heading>
    <Layout>
      <Fill>
        <Image
          src={images.project1}
          width="420px"
          height="310px"
        />
        <Image
          src={images.project2}
          width="420px"
          height="310px"
        />
      </Fill>
      <Fill>
        <Image
          src={images.project3}
          width="420px"
          height="310px"
        />
        <Image
          src={images.project4}
          width="420px"
          height="310px"
        />
      </Fill>
    </Layout>
  </Slide>
)

const d3ExamplesNotes = `
- Les exemples de Mike
- Restriction CORS donc pas d'iframe :(
`
const d3Examples = (
  <Slide
    key="1.3"
    notes={formatNotes(d3ExamplesNotes)}
  >
    <Heading
      size={2}
      margin='-20px 0 20px'
    >
      Exemples
    </Heading>
    <Image
      src={images.blocks}
      height="600px"
    />
    <Link href="http://bl.ocks.org/mbostock">
      http://bl.ocks.org/mbostock
    </Link>
  </Slide>
)

const slides = [
  intro,
  d3,
  myExamples,
  d3Examples,
]

export default slides
