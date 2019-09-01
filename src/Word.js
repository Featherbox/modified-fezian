import React from "react"
import './App.css';

import Character from "./Character.js"

class Word extends React.Component {

  render() {

    let chars = []

    for (let i = 0; i < this.props.text.length; i++) {

      chars.push(<Character letter={this.props.text[i]} />)

    }

    let classes ="word-wrapper"

    if (this.props.black) classes = "black word-wrapper"

    return <div class={classes}>
      {chars}
    </div>

  }

}

Character.defaultProps = {
  "text": "",
  "black": false
}

export default Word