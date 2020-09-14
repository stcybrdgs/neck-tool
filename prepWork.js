/*  GUITAR NECK TOOL */
var app = new Vue({
  el: "#app",
  data: {
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
    scaleLibrary: scaleLibrary  // imported per <script></script> in html
  },
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
    toggleNote: function(event){
        var note = event.currentTarget.querySelector('circle');
        var nuRadius = note.getAttribute('r') == 0 ? 15 : 0;
        note.setAttribute('r', nuRadius);
    },
    showScale: function(){
      // set the current scale vals and notes
      var spelling = this.scaleLibrary[this.currScale].spelling;  // get default spelling in C
      var currRootOffset = this.chromNotes.indexOf(this.currRoot);  // get offset from C of current root
      this.currScaleVals = [];  // clear the scale values
      this.currScaleNotes = [];  // clear the scale notes
      for( var val in spelling ){
        var nuVal = spelling[val] + currRootOffset;
        nuVal = nuVal > 11 ? nuVal - 12 : nuVal;  // reset note values that exceed the octave
        this.currScaleVals.push(nuVal);  // set scale values
        this.currScaleNotes.push(this.chromNotes[nuVal]);  // set scale notes
      }

      // update chromVals and populate neck
      this.chromVals.fill(0);  // reset chromVals array
      for( var val of this.currScaleVals ){
        Vue.set(app.chromVals, val, 15);  // flip scale values to 'on'
      }

      // test messages to console
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
