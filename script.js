/*  --------------------------------------------------------
GUITAR NECK TOOL
The neck is an html table, and each <td></td> tag holds a <span></span> tag
that in turn holds a note id and a note property. The note id consists of a string
designation and a fret designation. For instance, the 'E' notes on 6th string are
id="s6f1" and id="s6f12." The note property is a number that represents the note's
placement in a chromatic scale that ranges from C to B. For instance, the 'C' notes
on the neck will all have the property note="1," and the 'D' notes will all have
the property note="3" (ie, 'Db' is the second note, and 'D' is the third).

These ids may be used as handles that allow the user to manually toggle notes
off or on.

To populate the neck with notes in response to preset chords, scales, or intervals,
we will think of the neck output as a set of notes that are reactively bound to
the state of 0 or 1, where 0 is off and 1 is on, and these states are tracked
per a master array that contains all notes of the chromatic scale:
chromScale = [0,0,0,0,0,0,0,0,0,0,0,0]  // all neck notes off
chromScale = [1,1,1,1,1,1,1,1,1,1,1,1]  // all neck notes on

Each index of the chromScale array represents a note, from C at the low end of
the array and B at the high end such that the index of chromScale will map to Value -1
of any scale that is active on the neck:
note:			C  Db  D  Eb  E  F  Gb  G  Ab  A   Bb  B   // the note on the neck
index:		0  1   2  3   4  5  6   7  8   9   10  11  // the index in scale[] == value - 1
value:    1  2   3  4   5  6  7   8  9   10  11  12  // value == index + 1

When the neck is first populated with span elements

Therefore, each scale that is active on the neck is represented by an array
of values that each maps to an index in chromScale array, where the chromScale
value at the index is 0 for off and 1 for on:
scale: [1,2,3,4,5,6,7] == chromScale: [1,0,1,0,1,1,0,1,0,1,0,1]   // C Major
scale: [1,2,b3,4,5,6,7] == chromScale: [1,0,1,1,0,1,0,1,0,1,0,1]  // C Melodic Minor
------------------------------------------------------------*/
var app = new Vue({
	el: "#app",
  data: {
    guitString: "<svg height='100%' width='100%'><line x1='0' y1='50%' x2='100%' y2='50%' /></svg>",
		guitNote: 	"<svg height='100%' width='100%'><line x1='0' y1='50%' x2='100%' y2='50%' /><circle cx='50%' cy='50%' r='15px' /></svg>",
		fatString: false,  // stroke-width = 2 for strings 1 to 3, else stroke-width = 3

	},
  computations: {},
  methods: {}
});

/*


manualToggle: []

*/
