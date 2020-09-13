/*  --------------------------------------------------------
    GUITAR NECK TOOL
    ------------------------------------------------------------*/
var app = new Vue({
  el: "#app",
  data: {
    guitString: "<svg height='100%' width='100%'><line x1='0' y1='50%' x2='100%' y2='50%' /></svg>",
    guitNote: "<svg height='100%' width='100%'><line x1='0' y1='50%' x2='100%' y2='50%' /><circle cx='50%' cy='50%' r='15px' /></svg>",
    fatString: false,  // stroke-width = 2 for strings 1 to 3, else stroke-width = 3
    tuning: [4,11,7,2,9,4],  // default tuning is [4,11,7,2,9,4]
    chromVals: [0,0,0,0,0,0,0,0,0,0,0,0],  // default status of all notes is off=0
    chromNotes: ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'],
    currRoot: '',  // v-model binding to root drop menu
    currScale: '',  // v-model binding to scale drop menu
    currMode: '',  // v-model binding to mode drop menu
    currScaleVals: [],  // note vals for currScale, ie 0,2,4,5,7,9,11
    currScaleNotes: [],  // note name, ie C,D,E,F,G,A,B
    currNoteName: '',  // temp name to create name attribute on neck
    currNoteValue: 0,  // temp val to create value attribute on neck
    scaleLibrary: scaleLibrary
  },
  computed: {},
  methods: {
    calculateNote: function(string, fret){
      var openNote = this.tuning[ string - 1 ];
      var currNote = openNote + fret;
      this.currNoteValue =
        currNote >= 12 ?
        ( currNote >= 24 ? currNote - 24 : currNote - 12 ) :
        currNote;
      this.currNoteName = this.chromNotes[this.currNoteValue];
      return this.currNoteValue;
    },
    showGb: function(){
      this.chromVals[6] = 1;
      console.log('chromVals: ' + this.chromVals.toString());
    },
    showScale: function(){
      // set the current scale vals and notes
      var spelling = this.scaleLibrary[this.currScale].spelling;  // get default spelling in C
      var currRootOffset = this.chromNotes.indexOf(this.currRoot);  // get offset from C of current root
      this.currScaleVals = [];
      this.currScaleNotes = [];
      for( var val in spelling ){
        var nuVal = spelling[val] + currRootOffset;
        nuVal = nuVal > 11 ? nuVal - 12 : nuVal;
        this.currScaleVals.push(nuVal);
        this.currScaleNotes.push(this.chromNotes[nuVal]);
      }

      // update chromVals and populate neck
      this.chromVals.fill(0);
      for( var val of this.currScaleVals ){
        //this.chromVals[val] = 1;
        Vue.set(app.chromVals, val, 1);
      }

      // display the new chromVals on the neck
      console.log('currRoot: ' + this.currRoot);
      console.log('currScale: ' + this.currScale);
      // console.log('spelling: ' + spelling.toString());
      // console.log('scaleLibrarySpelling: ' + this.scaleLibrary[this.currScale].spelling.toString());
      console.log('currScaleVals: ' + this.currScaleVals.toString());
      console.log('currScaleNotes: ' + this.currScaleNotes.toString());
      console.log('chromVals: ' + this.chromVals.toString());
    }
  }
});
