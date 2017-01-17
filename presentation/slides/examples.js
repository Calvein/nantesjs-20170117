import React from 'react'
import {
  Slide,
  Heading,
  Link,
  List,
  ListItem,
  Image,
  Appear,
  Layout,
  Fill,
  Text,
} from 'spectacle'
import Codepen from '../codepen'
import images from '../images'
import formatNotes from '../format-notes'

const v4Notes = `
- Sortie fin juin 2016
- 30 modules, support pour Rollup
- V4 a pris plus d'un an
- Pages: 48; Mots: 12 928; Caractères: 79 384
- Mike a upadté les examples sur son block
- Quand vous allez sur la vielle doc il y a 3 liens:
  + la vielle doc
  + la nouvelle
  + le changelog pour cette API (desfois)
`
const v4 = (
  <Slide
    key="2.1"
    notes={formatNotes(v4Notes)}
  >
    <Heading size={2}>
      D3 V4
    </Heading>
    <List>
      <ListItem>
        Passage d'une structure monolithique vers une découpe en module
      </ListItem>
      <ListItem>
        D3 réécrit presque complètement
      </ListItem>
      <ListItem>
        Liste sur{' '}
        <Link href="https://github.com/d3/d3/blob/master/CHANGES.md">
          CHANGES.md
        </Link>
      </ListItem>
    </List>
  </Slide>
)

const dataNotes = `
- Data = Array
- Apprenez les méthodes array ES3/5 et ES6/2015 (ES7/2016 = includes)
- liens sur mdn
- map/reduce/filter sont immutable, forEach peut être utilisé comme map mais il
muterai l'array
- lodash babel plugin (browserify/webpack) pour inclure que ce qui est requis
`
const data = (
  <Slide
    key="2.2"
    notes={formatNotes(dataNotes)}
  >
    <Heading size={2}>
      Data manipulation
    </Heading>
    <List>
      <ListItem>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2">
          Array methods
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">
          Array.prototype.map()
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">
          Array.prototype.reduce()
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">
          Array.prototype.filter()
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://lodash.com/">
          Lodash
        </Link>
      </ListItem>
    </List>
  </Slide>
)

const patternNotes = `
- Le lien explique General Update Pattern ou Update/Enter/Exit pattern,
lie les données au DOM (HTML/SVG)
- selectAll + data = crée une selection de data.length elements
- update = manipulation d'élements qui sont déjà dans le DOM
- enter = filtre les elems qui sont nouveau dans les données et pas dans le DOM
- merge = enter + update
- exit = opposé de enter
- Three Little Circles de Mike
`
const pattern = (
  <Slide
    key="2.3"
    notes={formatNotes(patternNotes)}
  >
    <Heading size={2}>
      Update/Enter/Exit pattern
    </Heading>
    <Codepen id="ZLpwjg" tabs="js,result" />
    <Link href="https://bost.ocks.org/mike/circles/">
      Explication par Mike Bostock
    </Link>
  </Slide>
)

const dataExampleNotes = `
- J'ai l'habitute de dire d3 à l'anglaise et dire détroit m'a fait directement
pensé à RoboCop, donc j'ai utilisé les données des films pour example
- JSON est une sorte de dataviz au final
`
const dataExample = (
  <Slide
    key="2.4"
    notes={formatNotes(dataExampleNotes)}
    bgImage={images.roboderp}
    bgDarken={0.75}
  >
    <Appear>
      <div>
        <Heading size={2}>
          Data
        </Heading>
        <Codepen id="bgwbom" tabs="js" />
      </div>
    </Appear>
  </Slide>
)

const tableNotes = `
- Les tables sont les visualisations les plus simples
- Pensez à vos données dans excel avant de créer des graph
`
const table = (
  <Slide
    key="2.5"
    notes={formatNotes(tableNotes)}
  >
    <Heading size={2}>
      Exemple - Table
    </Heading>
    <Codepen id="wgzoYQ" tabs="js,result" />
    <Link href="https://github.com/d3/d3-selection">
      d3-selection
    </Link>
  </Slide>
)

const chartsNotes = `
- Les graphs sont à titre d'example, ils ne représentent pas bien les données
- On peut changer le type de graph ou les données
- Article qui montre pourquoi utiliser d3-shape, des formes basiques sont simple
a faire mais par example la courbe est bien plus complexe
`
const charts = (
  <Slide
    key="2.6"
    notes={formatNotes(chartsNotes)}
  >
    <Heading size={2}>
      Exemple - Graphiques
    </Heading>
    <Codepen id="egdvPQ" tabs="js,result" />
    <Link href="https://medium.com/@mbostock/introducing-d3-shape-73f8367e6d12">
      Introducing d3-shape

    </Link>
    <br />
    <Link href="https://github.com/d3/d3-shape">
      d3-shape
    </Link>
  </Slide>
)

const hierarchyNotes = `
- Ces layouts acceptent les mêmes données, les examples utilisent tous flare,
une vielle lib de dataviz en flash
- ils ont l'air impresionnant mais sont en verité plutot simple
- Sont difficile à customiser (sauf treemap)
- Ce sont des liens vers les block
`
const hierarchy = (
  <Slide
    key="2.7"
    notes={formatNotes(hierarchyNotes)}
  >
    <Heading size={2}>
      Exemple - Hiérarchie
    </Heading>
    <Link href="http://bl.ocks.org/mbostock/4063570">
      <Image src={images.diagonal} />
    </Link>
    <Link href="http://bl.ocks.org/mbostock/4063582">
      <Image src={images.treemap} />
    </Link>
    <Link href="http://bl.ocks.org/mbostock/4063423">
      <Image src={images.partition} />
    </Link>
    <Link href="http://bl.ocks.org/mbostock/4063269">
      <Image src={images.bubble} />
    </Link>
    <Link href="http://bl.ocks.org/mbostock/4063530">
      <Image src={images.pack} />
    </Link>
    <Link href="http://bl.ocks.org/mbostock/4063550">
      <Image src={images.cluster} />
    </Link>
    <br />
    <Link href="https://github.com/d3/d3-hierarchy">
      d3-hierarchy
    </Link>
  </Slide>
)

const mapNotes = `
- Carte de toutes les villes ou j'ai habité
- Le radius est le nombre d'année vécu, la couleur est pas importante
- code pas top, fait vite fait
- Projection = type de carte
- Path = comme line, mais pour une carte, tous les elements sont dessiné avec
- sphere, graticule, terre, frontières
- Les données sont en GeoJSON (TopoJSON est mieux)
`
const map = (
  <Slide
    key="2.8"
    notes={formatNotes(mapNotes)}
  >
    <Heading size={2}>
      Exemple - Map
    </Heading>
    <Codepen id="NdbbwM" tabs="js,result" />
    <Link href="https://github.com/d3/d3-geo">
      d3-geo
    </Link>
    <br />
    <Link href="https://github.com/d3/d3-geo-projection">
      d3-geo-projection
    </Link>
  </Slide>
)

const randomNotes = `
- Interpolation de couleur en d3
- gradient html en css
- d3-timer en tant que loop (requestAnimationFrame)
- 2 modules standalone, peuvent être utilisé pour autre que de la dataviz
`
const random = (
  <Slide
    key="2.9"
    notes={formatNotes(randomNotes)}
  >
    <Heading size={2}>
      Exemple - Scale + Timer
    </Heading>
    <Codepen id="EZNZpX" tabs="js,result" />
    <Link href="https://medium.com/@mbostock/introducing-d3-scale-61980c51545f">
      Introducing d3-scale
    </Link>
    <br />
    <Link href="https://github.com/d3/d3-scale">
      d3-scale
    </Link>
    <br />
    <Link href="https://github.com/d3/d3-timer">
      d3-timer
    </Link>
  </Slide>
)

const othersNotes = `
- liste de 18 modules qui peuvent être utilisé pour autre que de la dataviz
- helpers de nombre (median, moyenne, min/max)
- formattage de nombre/date
- ajax
- drag and drop
- selection à la jQuery
- manipulation de données
- etc
`
const others = (
  <Slide
    key="2.10"
    notes={formatNotes(othersNotes)}
  >
    <Heading size={2}>
      Modules non specifique
    </Heading>
    <Layout>
      <Fill>
        <List>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#arrays-d3-array">
              Array
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#collections-d3-collection">
              Collections
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#colors-d3-color">
              Colors
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#dispatches-d3-dispatch">
              Dispatches
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#dragging-d3-drag">
              Dragging
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#delimiter-separated-values-d3-dsv">
              Delimiter-Separated Values
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#easings-d3-ease">
              Easings
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#number-formats-d3-format">
              Number Formats
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#interpolators-d3-interpolate">
              Interpolators
            </Link>
          </ListItem>
        </List>
      </Fill>
      <Fill>
        <List>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#queues-d3-queue">
              Queues
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#random-numbers-d3-random">
              Random Numbers
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#requests-d3-request">
              Requests
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#scales-d3-scale">
              Scales
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#selections-d3-selection">
              Selections
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#time-formats-d3-time-format">
              Time Formats
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#time-intervals-d3-time">
              Time Intervals
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#timers-d3-timer">
              Timers
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/d3/d3/blob/master/API.md#transitions-d3-transition">
              Transitions
            </Link>
          </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
)

const outroNotes = `
`
const outro = (
  <Slide
    key="2.11"
    notes={formatNotes(outroNotes)}
  >
    <Heading size={2}>
      Questions ?
    </Heading>
    <Image
      src={images.robokay}
      margin="50px 0 100px"
    />
    <Text bold>
      <Link href="https://github.com/Calvein">
        François Robichet (@Calvein)
      </Link>
    </Text>
    <Text textSize="1.1em" margin="15px 0 0">
      <Link href="http://calvein.github.io/nantesjs-20170117">
        http://calvein.github.io/nantesjs-20170117
      </Link>
    </Text>
  </Slide>
)

const slides = [
  v4,
  data,
  pattern,
  dataExample,
  table,
  charts,
  hierarchy,
  map,
  random,
  others,
  outro,
]

export default slides
