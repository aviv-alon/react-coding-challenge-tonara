import React from 'react';


const PianoKey = ({instrument, octave, pitch}) => {

  const KEY_NATURAL_WIDTH = 100 / 7,
    KEY_ACCIDENTAL_WIDTH_RATIO =  0.65,
    PITCHES_ACCIDENTAL = ['Db', 'Eb', 'Gb', 'Ab', 'Bb'],
    PITCHES_POSITIONS = {
      C: 0,
      Db: 0.55,
      D: 1,
      Eb: 1.8,
      E: 2,
      F: 3,
      Gb: 3.5,
      G: 4,
      Ab: 4.7,
      A: 5,
      Bb: 5.85,
      B: 6
    };

  const note = pitch + octave,
    isAccidental = PITCHES_ACCIDENTAL.includes(pitch);

  const handleClick = (e, instrument, note) => {
    instrument.then(function (ins) {
      ins.play(note);
    });
  };

  return (
    <div
      className={
        'Piano__Key ' +
        (isAccidental ? 'Piano__Key--accidental' : 'Piano__Key--natural')
      }
      style={{
        left: ratioToPercentage(PITCHES_POSITIONS[pitch] * KEY_NATURAL_WIDTH),
        width: ratioToPercentage(
          isAccidental ? KEY_ACCIDENTAL_WIDTH_RATIO * KEY_NATURAL_WIDTH : KEY_NATURAL_WIDTH,
        )
      }}
      onClick = {e => handleClick(e, instrument, note)}
    >
      <div className={
        'Piano__Key__Label ' +
        (isAccidental ? 'Piano__Key__Label--accidental' : 'Piano__Key__Label--natural')
      }>
        {note}
      </div>
    </div>
  );
};

function ratioToPercentage(ratio) {
  return `${ratio }%`;
}

export default PianoKey;
