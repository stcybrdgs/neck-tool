/*  --------------------------------------------------------
    GUITAR NECK TOOL
    ------------------------------------------------------------*/
var app = new Vue({
  el: "#app",
  data: {
    guitString: "<svg height='100%' width='100%'><line x1='0' y1='50%' x2='100%' y2='50%' /></svg>",
    guitNote: 	"<svg height='100%' width='100%'><line x1='0' y1='50%' x2='100%' y2='50%' /><circle cx='50%' cy='50%' r='15px' /></svg>",
    fatString: false,  // stroke-width = 2 for strings 1 to 3, else stroke-width = 3
    tuning: [5,12,8,3,10,5],
    chromScale: [0,0,0,0,0,0,0,0,0,0,0,0],  // default status of all notes is off=0
    chromNotes: ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'],
    currScale: [],
    currNoteName: '',
    currNoteValue: 0,
    cMajor: ['C','D','E','F','G','A','B'],
    textAreaMsg: "sasdf",
    // adding new data
    scales: {
      major: [],  // 1,2,3,4,5,6,7 == 0,2,4,5,7,9,11
      melodicMinor: [],  // 1,2,b3,4,5,6,7 == 0,2,3,5,7,9,11
      harmonicMinor: [],  // 1,2,b3,4,5,b6,7 == 0,2,3,5,7,8,11
      harmonicMajor: [],  // 1,2,3,4,5,b6,7 == 0,2,4,5,7,8,11
      wholeTone: [],  //
      diminished: [],  //
      augmented: [],  // 1,#2,3,5,b6,7
      majorPentatonic: [],  // 1,2,3,5,6
      minorPentatonic: [],  // 1,b3,4,5,b7
      blues: []  // 1,b3,4,#4,5,b7
    }
  },
  computed: {},
  methods: {
    calculateNote: function(string, fret){
      this.currNoteValue =
        (this.tuning[ string - 1 ] + fret) > 24 ?
        (this.tuning[ string - 1 ] + fret) - 24 :
        (this.tuning[ string - 1 ] + fret) > 12 ?
        (this.tuning[ string - 1 ] + fret) -12:
        (this.tuning[ string - 1 ] + fret);
      this.currNoteName = this.chromNotes[this.currNoteValue - 1];
      return this.currNoteValue;
    },
    showCurrScale: function(){
      this.currScale = [];
      for( var i in this.chromScale ){
        this.chromScale[i] = 0 ;
      }
      for( var note of this.cMajor ){
        this.currScale.push(this.chromNotes.indexOf(note));
        this.chromScale[this.chromNotes.indexOf(note)] = 1;
      }
      this.textAreaMsg = this.currScale.toString();
    }
  }
});
