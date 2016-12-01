var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;


var BoardSchema = mongoose.Schema({
	state: [ Number ],
	player: String,
	round: Number,
	intent: String,
	observer_label: {type:Number, required:false},
	created_at: {type: Date, default: Date.now}
});


var formatBoards = function(b){
	return {
		_id: b._id,
		state: b.state,
		player: b.player,
		round: b.round,
		intent: b.intent,
		observer_label: b.observer_label,
	};
}

var formatBoards2 = function(b){
	return {
		_id: b._id,
		state: b.state,
		player: b.player,
		round: b.round
	};
}


BoardSchema.methods.getDescription = function() {
  return this.state;
};

BoardSchema.statics.createBoard = function(array, player_name, round, intent, res){
	var that = this;
	that.create({state:array, player: player_name, round: round, intent: intent}, 
		function(err, board){
			if(err){
				res.json({
					'success':false,
					'message':'Something wrong with the Board!'
				});
			} else {
				res.json({
					'success':true,
					'board':[board].map(formatBoards2)
				});
			}
		});
};


var BoardModel = mongoose.model("Board", BoardSchema);

module.exports = BoardModel;
