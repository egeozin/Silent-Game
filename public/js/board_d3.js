
/* This function reads from a JSON object that looks like:
 * {state: [1, 0, 2, 1, 0 ... ,2, 0], playerType: 'player_1'} or [1, 2, 0, 0, 2, 1 .. 1]
 * 0 for empty, 1 for player_1 move and 2 for player_2 move
 * with array.length = 256 
 */ 

var GameWidget_install =  function(dataJSON) {
	
	console.log('D3 is loud and clear!');
	//var dataForD3 = $('#board').parents('#game-field').data('json');
	var player = dataJSON.playerType;
	var oldState = dataJSON.state;
	var newState = oldState;
	var remainClick = 5;
	var prohibited = dataJSON.prohibited;

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
		var width = 32;
		var height = 32;
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
				// increment the x position. I.e. move it over by 50 (width variable)
				xpos += width;
			}
			// reset the x position after a row is complete
			xpos = 0;
			// increment the y position for the next row. Move it down 50 (height variable)
			ypos += height;	
		}
		return data;
	}
	
	
	var boardData = boardData();
	
	console.log(boardData);
	
	d3.selection.prototype.moveToFront = function() {  
	      return this.each(function(){
	        this.parentNode.appendChild(this);
	      });
	    };
	d3.selection.prototype.moveToBack = function() {  
	    return this.each(function() { 
	        var firstChild = this.parentNode.firstChild; 
	        if (firstChild) { 
	            this.parentNode.insertBefore(this, firstChild); 
	        } 
	    });
	};
	
	var grid = d3.select("#board")
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
		.style("stroke-width", 0.4)//"#565656"
		.on('click', function(d) {
			if (!prohibited) {
				if (!d.filled) {
		   if (remainClick > 0) {
		   		d.click ++;
	       		if ((d.click)%2 == 0) { 
	       			d3.select(this).style("fill","#EFEFEF");
	       			newState[d.index] = 0;
	       			remainClick = remainClick + 1;
	       			//d.filled = 0;
	       		}
		   		if (player == 'player_1' && (d.click)%2 == 1) { 
		   			d3.select(this).style("fill","#6baed6");
		   			remainClick = remainClick - 1;
		   			newState[d.index] = 1;
		   			//d.filled = 1;
		   			
		   		}
		   		if (player == 'player_2' && (d.click)%2 == 1) { 
		   			d3.select(this).style("fill","#74c476");
		   			remainClick = remainClick - 1;
		   			newState[d.index] = 2;
		   			//d.filled = 1;
		   			
		   		}
		   		//d3.select("#board").datum({state:newState})
		   		$( "#board" ).data( {state:newState} );

		   		//d3.select('#counter').datum
		   } else if ((d.click)%2 == 1) {
		   			d.click ++;
		   			d3.select(this).style("fill","#EFEFEF");
		   			newState[d.index] = 0;
		   			remainClick = remainClick + 1;
		   			$( "#board" ).data( {state:newState} );
		   		}
		   		//d3.select("#board").datum({state:newState})
		   		
		   		}
			}

	    })
	    .on('mouseover', function(d) {
	    	d3.select(this).moveToFront().style("stroke-width", 2).style("stroke", function(d){
	    		if(player == 'player_1') {return "#6baed6";}
	    		if(player == 'player_2') {return "#74c476";}
	    	});
	    })
	    .on('mouseout', function(d) {
	    	d3.select(this).moveToBack().style("stroke", "#565656").style("stroke-width", 0.4);
	    });

}


