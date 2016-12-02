var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

var GameSchema = mongoose.Schema({
	creator: {type: String, required: true},
	passcode: {type: String, required: true},
	player2: {type: String, required: false},
	player1_intent: {type: String, required: true},
	player2_intent: {type: String, required: true},
	occupancy: {type:Number, default:0},
	status:{type:String, required:false},
	completed: {type:Boolean, default:false},
	states:[{type:ObjectId, ref:"Board", required:false}],
	created_at: {type: Date, default: Date.now}
});


GameSchema.methods.getDescription = function() {
  return this.text;
};

GameSchema.path("creator").validate(function(value) {
	return /^[a-zA-Z0-9._-]/.test(value)},"Wrong characters!");


var formatGames = function(g){
	return {
		_id: g._id,
		creator: g.creator,
		occupancy: g.occupancy,
		player2: g.player2,
		status: g.status,
		passcode: g.passcode,
		states: g.states,
		completed: g.completed
	};
}

var formatGames2 = function(g){
	return {
		_id: g._id,
		creator: g.creator,
		player2: g.player2,
		passcode: g.passcode,
		status:g.status
	};
}


GameSchema.statics.getGames = function(res) {
	var that = this;
	that.find({}, function(err, games){
		if (err){
			res.json({
				'success':false,
				'message':"Games can't be fetched"
			})
		} else {
			res.json({
				'success':true,
				'games': games.map(formatGames)
			})
		}
	});
};


GameSchema.statics.logoutUpdate = function(res){
	var that = this;
	that.update({})
};



GameSchema.statics.addPlayer = function(name, id, res){
	var that = this;
	that.update({'_id':id}, {player2:name}, function(err, game){
		if(err){
			res.json({
				'success':false,
				'message': 'Something'
			})
		}
	})
};

var GameModel = mongoose.model("Game", GameSchema);

module.exports = GameModel;
