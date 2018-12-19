
import React from 'react';
import PianoKey from './PianoKey';

const PianoOctave = ({instrument, octave}) => {

  const SORTED_PITCHES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

  return (
    <div className='Piano__Octave'>
      {SORTED_PITCHES.map((pitch) =>
        <PianoKey
          key={pitch + octave}
          instrument={instrument}
          pitch={pitch}
          octave={octave}
        />
      )}
    </div>
  );
};

export default PianoOctave;
