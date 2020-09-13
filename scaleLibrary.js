var scaleLibrary = {
  major: {
    // 1,2,3,4,5,6,7 == 0,2,4,5,7,9,11
    name: 'Major',
    spelling: [0,2,4,5,7,9,11]
  },
  melodicMinor: {
    // 1,2,b3,4,5,6,7 == 0,2,3,5,7,9,11
    name: 'Melodic Minor',
    spelling: [0,2,3,5,7,9,11],
  },
  harmonicMinor: {
    // 1,2,b3,4,5,b6,7 == 0,2,3,5,7,8,11
    name: 'Harmonic Minor',
    spelling: [0,2,3,5,7,8,11],
  },
  harmonicMajor: {
    // 1,2,3,4,5,b6,7 == 0,2,4,5,7,8,11
    name: 'Harmonic Major',
    spelling: [0,2,4,5,7,8,11],
  },
  wholeTone: {
    // 1,2,3,#4,#5,#6 == 0,2,4,6,8,10
    name: 'Whole Tone',
    spelling: [0,2,4,6,8,10],
  },
  diminished: {
    // 1,2,b3,4,#4,#5,6,7 == 0,2,3,5,6,8,9,11
    name: 'Diminished',
    spelling: [0,2,3,5,6,8,9,11],
  },
  augmented: {
    // 1,#2,3,5,b6,7 == 0,3,4,7,8,11
    name: 'Augmented',
    spelling: [0,3,4,7,8,11],
  },
  majorPentatonic: {
    // 1,2,3,5,6 == 0,2,4,7,9
    name: 'Major Pentatonic',
    spelling: [0,2,4,7,9],
  },
  minorPentatonic: {
    // 1,b3,4,5,b7 == 0,3,5,7,8
    name: 'Minor Pentatonic',
    spelling: [0,3,5,7,8],
  },
  blues: {
    // 1,b3,4,#4,5,b7 == 0,3,5,6,7,10
    name: 'Blues',
    spelling: [0,3,5,6,7,10]
  }
};
