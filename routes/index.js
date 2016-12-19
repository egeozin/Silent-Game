var express = require('express');
var router = express.Router();
var Games = require('../model/game');
var Helper = require('./router_helper');
var randomstring = require("randomstring");

var currentUser;

router.get('/', function(req, res, next){
	res.redirect('/game');
	
});

router.get('/game', function(req, res){
	if(req.session.game_id){
		console.log("why?");
		console.log(req.session.game_id);
		Helper.bringGame(req.session.game_id, req.session.playerType, res);
	} else {
		res.json({
			'success': false,
			'message':'join or create a game!'
		})

	}


});

router.post('/create', function(req, res, next){
	var createPost = req.body;
	var creatorName = createPost.username;
	var passcode = randomstring.generate(7);
	Helper.createGame(creatorName, passcode, req, res);
});


router.post('/join', function(req, res, next){
	var joinPost = req.body;
	var passcodeCheck = joinPost.passcode;
	var playerToAdd = joinPost.playername;
	Helper.joinGame(passcodeCheck, playerToAdd, req, res);
});



router.post('/submit', function(req, res, next){
	var submitPost = req.body;
	var newState = JSON.parse(submitPost.newState);
	var confArray = JSON.parse(submitPost.confidences);
	if (newState.length != 1){
		Helper.submitState(submitPost.id, newState, confArray, req.session.playerType, res);
	} else {
		Helper.endGame(submitPost.id, newState, confArray, req.session.playerType, res);
	}
});

//TODO FOR ANALYSIS
router.get('/games', function (req, res) {
	Games.getGames(res);
});

//TODO FOR ANALYSIS
router.post('/boards', function(req, res) {
	var boardsPost = req.body;
	console.log(boardsPost.id);
	Helper.bringBoards(boardsPost.id, res);
})

router.post('/logout', function(req,res){
	req.session.destroy();
	console.log("successful logout!");
	res.json({
		'success':true,
		'message':"See you next time!"
				});
});


/*
router.delete('/freets', function(req, res, next){
	console.log(req.body);
	if (req.body) {
		Accounts.deleteFreet(req.body);
		var updatedFreets = Accounts.getFreets();
		res.json({
			'success':true,
			'freets': updatedFreets
			});
	}
	else {
		res.json({
			'err':"No req.body!"
		});
	}

}); */


module.exports = router;
