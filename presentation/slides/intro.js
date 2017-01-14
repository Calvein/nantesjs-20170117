import React from 'react'
import {
  Slide,
  Heading,
  Appear,
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
- François Robichet, dev frontend
- J'ai travaillé à Toog pendant 2 ans avec Thomas et Ronan
- Je suis parti en Australie pendant près de 4 ans ou j'ai fait beaucoup de D3
dans un studio de dataviz qui s'appele Small Multiples
- Je suis revenu avec Tamara qui est aussi frontend
- La preso est en React avec Spectacle sur GitHub
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
- Documents conduit par les données, comme content-first les données/contenus
sont rois
- devise de D3 sur Github, c'est les "Documents"
- Créé par Mike Bostock pour son doctorat
- lien vers le blog/liste d'article de Mike, anciens post (pas sur Medium)
e.g: celui des algos avec randomisation (La Nuit étoilée) et sorting
- Mike a travaillé au New York Time et depuis près de 2 ans 100% sur D3
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
      <Appear>
        <ListItem>
          <b>D</b>ata-<b>D</b>riven <b>D</b>ocuments
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          "Bring data to life with SVG, Canvas and HTML"
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Le 4ème repo sur Github avec{' '}
          <b id="stargazers-count">près de 60,000</b>
          {' '}stars
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Créé par
          <Link href="https://bost.ocks.org/mike/">
            {' '}Mike Bostock{' '}
          </Link>
          à Standford
        </ListItem>
      </Appear>
    </List>
  </Slide>
)

const myExamplesNotes = `
- Globe choroplèthe
- Force-directed graph collaboration entre pays
- Bar
- Random canvas
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
- Les exemples de Mike, restriction CORS donc pas d'iframe :(
- exemples sur blocks, gists
- si vous remontez, vous pouvez voir ses essaies sur cartes ou la
visualisation d'algos
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
