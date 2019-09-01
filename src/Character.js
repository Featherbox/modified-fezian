import React from "react"
import './App.css';

const letters = {
  a: ['top right','top','bottom left','bottom right'],
  b: ['left top','top right','bottom','right bottom'],
  c: ['left top','top','left bottom','bottom'],
  d: ['bottom','bottom right','','right'],
  e: ['top','top bottom','left bottom','bottom'],
  f: ['top right','top right','bottom right','bottom right'],

  g: ['left','right top','left top','right bottom'],
  h: ['left top','top right','bottom left','right'],
  i: ['left','right','bottom left','bottom right'],
  j: ['right top','top','right',''],
  k: ['left right','right','left','bottom right'],
  q: ['left right','right','left','bottom right'],
  l: ['left top','right top','left top','right top'],

  m: ['top left','top right','bottom','bottom left'],
  n: ['left top','top','bottom left','right bottom'],
  o: ['top','right top','bottom','right bottom'],
  p: ['left','','top left','top'],
  r: ['top left','top left','bottom left','bottom left'],

  s: ['left top','right bottom','left bottom','right'],
  t: ['left','top right','bottom left','right bottom'],
  u: ['top left','top right','left','right'],

  v: ['left top','top right','bottom','right bottom'],

  w: ['','left','bottom','left bottom'],
  x: ['top left','right','left','right left'],
  y: ['left bottom','right bottom','left bottom','right bottom'],

  z: ['top','right top','bottom top','bottom'],

  0: ['top left','top right','bottom left','bottom right'],
  1: ['top left right','top right','bottom left','bottom right'],
  2: ['top left','top right','bottom left','top bottom right'],
  3: ['top left','top right','bottom left','bottom right left'],
  4: ['top bottom left','top right','bottom left','bottom right'],
  5: ['top left right','top right','top bottom left','bottom right'],
  6: ['top left','top right','top bottom left','top bottom right'],
  7: ['top left','top right','top bottom right left','bottom right'],
  8: ['top right left','top right','top bottom right left','bottom right'],
  9: ['top left','top right','top bottom right left','top bottom right'],
  "\\": ['top right left','top right','top bottom right left','top bottom right'],
  ".": ['','','top','top'],
  "?": ['right','','right',''],
  ",": ['','','top',''],
  ":": ['top','top','top','top'],
  ';': ['top','top','top','']
}

class Character extends React.Component {

  render() {

    let shape = ['','','','']

    if (Object.keys(letters).includes(this.props.letter.toLowerCase())) {
      shape = letters[this.props.letter.toLowerCase()]
    }

    let tl = shape[0]
    let tr = shape[1]

    let bl = shape[2]
    let br = shape[3]

    tl += " character-cell";
    tr += " character-cell";
    bl += " character-cell";
    br += " character-cell";

    return (<div class="character-wrapper">
      <div class={tl} /><div class={bl} /><br /><div class={tr} /><div class={br} />
    </div>)

  }

}

Character.defaultProps = {
  "letter": ""
}

export default Character