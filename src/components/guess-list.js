import React from 'react';

import './guess-list.css';

export default function GuessList(props) {
  const { guesses } = props;



  return (
    <ul id="guessList" className="guessBox clearfix">
      { guesses.map((guess, index) => (<li key={index}>{guess}</li>))  }
    </ul>
  );
}

