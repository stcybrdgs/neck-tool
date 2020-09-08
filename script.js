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

	},
  computations: {},
  methods: {}
});

var app2 = new Vue({
	el: "#app2",
  data: {
    guitString: "<svg height='100%' width='100%'><line x1='0' y1='50%' x2='100%' y2='50%' /></svg>",
		guitNote: 	"<svg height='100%' width='100%'><line x1='0' y1='50%' x2='100%' y2='50%' /><circle cx='50%' cy='50%' r='15px' /></svg>",
		tuning: [5,12,8,3,10,5],  // default tuning is standard tuning E, B, G, D, A, E
		chromScale: [0,0,0,0,0,0,0,0,0,0,0,0],  // default status of all notes is off=0
		chromNotes: ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'],
		fatString: false,  // stroke-width = 2 for strings 1 to 3, else stroke-width = 3
	},
  computations: {},
  methods: {}
});

var cMajor = ['C','D','E','F','G','A','B']
var currScale = function(){
	var scale = [];
	for( note of cMajor ){

	};
	return scale;
}();
