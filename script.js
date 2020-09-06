/*  --------------------------------------------------------
GUITAR NECK TOOL
- The notes are identified by String and Fret, ie the 'E' notes
	on the 6th string are:
		- s6f1
		- s6f12

------------------------------------------------------------*/
var app = new Vue({
	el: "#app",
  data: {
    guitString: "<svg height='100%' width='100%'><line x1='0' y1='50%' x2='100%' y2='50%' /></svg>",
		guitNote: 	"<svg height='100%' width='100%'><line x1='0' y1='50%' x2='100%' y2='50%' /><circle cx='50%' cy='50%' r='14px' /></svg>"
  },
  computations: {},
  methods: {}
});
