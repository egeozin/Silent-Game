/* Part of the code has been adapted from the Chuck Grimmet's "Let's Make a Grid with D3.js" example in bl.ocks.org.
 *
 */

/* Stuff that I brought up from my previous implementation
 * We are reading from a JSON object that looks like:
 * {state: [1, 0, 2, 1, 0 ... ,2, 0], playerType: 'player_1'} or [1, 2, 0, 0, 2, 1 .. 1]
 * 0 for empty, 1 for player_1 move and 2 for player_2 move
 * with array.length = 256 
 */ 

var AnalysisWidget_install = function(dataJSON, round) {
	
	console.log('D3 is loud and clear!');
	//var dataForD3 = $('#board').parents('#game-field').data('json');
	var oldState = dataJSON.state;
	var newState = oldState;
	/* 
	 * Board Data will be updated with every model call,
	 * It's good that we can update the field of an object
	 * so we'll have to assign booleans and player types into the data cells
	 * @method boardData
	 */
	
	function boardData() {
		var data = new Array();
		var xpos = 0; 
		var ypos = 0;
		var width = 16;
		var height = 16;
		var click = 0;
		//var preventer = false;
		
		// iterate for rows	
		for (var row = 0; row < 16; row++) {
			data.push( new Array() );
			
			// iterate for cells/columns inside rows
			for (var column = 0; column < 16; column++) {
	
				ind = row*16+column;
	
				if(oldState[ind] == 2){
					var player_type = 'player_2';
					var filled = 1;
				} else if (oldState[ind] == 1) {
					var player_type = 'player_1';
					var filled = 1;
				} else {
					player_type = '';
					var filled = 0;
				}
	
				data[row].push({
					x: xpos,
					y: ypos,
					width: width,
					height: height,
					click: click,
					index: ind,
					type: player_type,
					filled: filled
				})
				// increment the x position. I.e. move it over by 16 (width variable)
				xpos += width;
			}
			// reset the x position after a row is complete
			xpos = 0;
			// increment the y position for the next row. Move it down 16 (height variable)
			ypos += height;	
		}
		return data;
	}
	
	
	var boardData = boardData();
	
	console.log(boardData);
	
	roundHtml = "#board_in_"+round;

	var grid = d3.select(roundHtml)
		.append("svg")
		.attr("width","522px")
		.attr("height","522px");
		
	var row = grid.selectAll(".row")
		.data(boardData)
		.enter().append("g")
		.attr("class", "row");
		
	var column = row.selectAll(".square")
		.data(function(d) { return d; })
		.enter().append("rect")
		.attr("class","square")
		.attr("x", function(d) { return d.x; })
		.attr("y", function(d) { return d.y; })
		.attr("width", function(d) { return d.width; })
		.attr("height", function(d) { return d.height; })
		.style("fill", function(d) {
			if(d.type == 'player_1') {return "#6baed6";}
			else if(d.type == 'player_2') {return "#74c476";}
			else {return "#EFEFEF";}
		})
		.style("stroke","#565656" )
		.style("stroke-width", 0.4);

}
