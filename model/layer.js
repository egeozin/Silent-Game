var _= require('underscore');


/* Stuff that I brought up from my previous implementation
 * We are reading from a JSON object that looks like:
 * {state: [1, 0, 2, 1, 0 ... ,2, 0], playerType: 'player_1'} or [1, 2, 0, 0, 2, 1 .. 1]
 * 0 for empty, 1 for player_1 move and 2 for player_2 move
 * with array.length = 256 
 */ 

/*
var sampleJSON = {state:[
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], 
				playerType: 'player_2'} */


var Layer = function(){

	var that = Object.create(Layer.prototype);
	var cells = [];
	var rowso = 16;
	var columnso = 16;
	
	 /*
	  * Function that calculates row and column index from index.
	  * @method getXandY
	  * @param {Number}
	  * @return {Array}
	  */ 
	
	var getXandY = function(index) {
		ro = Math.floor(index / columnso);
		col = index % columnso;
		return [col, ro];
	};
	
	/*
	 * Simple iteration abstraction for populating an array with a custom function
	 * @method arrayFromTo
	 * @param {Integer} start index
	 * @param {Integer} end index
	 * @param {Array} array to be filled.
	 * @param {method} Function for specifying the value of an array element
	 * @return {Array} New array
	 */ 
	
	var arrayFromTo = function (from, to, array, f) {
	 	if (from > to) return array;
	 	f(array); arrayFromTo(from+1, to, array, f);
	};
	
	 /*
	  * Function that adds clean elements to an array.
	  * @param {Array} Array to be appended.
	  */ 
	 var initiate = function(a) {
	 	a.push(0);
	 }
	
	/* 
	 * Initiate the cells with random values(1 or 0).
	 * Update neighbors.
	 * @method arbitrary
	 * @return {Void}
	 */
	
	that.initial = function() {
		console.log('here-14');
		var empty = [];
		var size = rowso*columnso; 
		arrayFromTo(0, size-1, empty, initiate);
		//Future-work: cells can be aware of their surroundings
		//cells.forEach(function(e, i, a) {neighbors[i] = 0;});
		return empty;
	};
	
	
	that.clean = function(){
		cells = cells.map(function(e){ return e && 0});
	};


	that.difference = function(a, b){
		exist = _.isEqual(a, b) ? false : true;
		return exist
	};

	that.merge = function(a, b){
		var merged = a.map(function(e, i){
			return ((e == 0) && (b[i] != 0)) ?  b[i] : e; 
		});
  
        return merged;
	};



	Object.freeze(that);
	return that;

}

module.exports = Layer();