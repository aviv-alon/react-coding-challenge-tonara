import React from 'react';

import PianoOctave from './PianoOctave';

const PianoKeyboard = ({instrument, octaves}) => {
  return (
    <div className="Piano__Keyboard">
      {octaves.map((o) =>
        <PianoOctave
          key={o}
          instrument={instrument}
          octave={o}
        />
      )}
    </div>
  );
};

export default PianoKeyboard;
