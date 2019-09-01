import React, { Component } from 'react';
import './App.css';

import Word from './Word.js'

const words = [
  "I have played by the rules for so long.",

  "::Not from where I am sitting.",

  "No, not your rules.",
  "You work at the behest of a system so broken you didn't even notice when it became corrupted at it's very core.",
  "When I first broke your rules, a sitting president had authorized assassination squads in Laos and the head of the FBI had ordered his men to conduct illegal surveillance on his rivals.",
  "Your rules have changed every time that it was convenient for you.",
  "I was talking about my rules.",
  "I have lived by those rules for so long,",
  "believed in them for so long,",
  "believed that if you played by the right rules, eventually you would win.",
  "But I was wrong, wasn't I?",
  "And now all the people I cared about are dead.",
  "Or will be dead,",
  "soon enough.",
  "And we will be gone without a trace.",
  "So now i have to decide.",
  "Decide whether to let my friends die; to let hope die.",
  "To let the world be ground under your heel, all because I played by my rules.",
  "I'm trying to decide.",
  "I'm going to kill you.",
  "But i need to decide how far I'm willing to go;",
  "How many of my own rules I'm willing to break,",
  "to get it done.",

  "::Look, you want to add threatening the life of a federal agent to your file, I will draw those charges right now.",
  "::No waiting is required.",

  "I wasn't talking to you.",

  "::...",
  "::This guy is ours, I don't care who those suits think they are.",
  "::Get him back to holding.",

  "...",
  "Numbers in modified fezian are kind of weird, so I'll include some of those: 1\\\\\\9\\\\8\\4, 2\\7, \\3"
]

class App extends Component {
    render() {

    let lines = []

    for (let i = 0; i < words.length; i++) {
      if (words[i].substr(0,2) === "::") {
          
          lines.push(<Word black text={words[i].substr(2)} />)

      } else {
          
          lines.push(<Word text={words[i]} />)

      }
    }
    
    return (
      <div class="horizontal">
        {lines}
      </div>
    );
  }
}

export default App;
