var express = require('express');
var router = express.Router();
//var Accounts = require('../fritterModel.js');
var Games = require('../model/game');
var Helper = require('./router_helper');
//var Layer = require('../model/layer');
//var getIP = require('ipware')().get_ip;
var randomstring = require("randomstring");

var currentUser;

router.get('/', function(req, res, next){
	//if (err) console.log(err);
	res.redirect('/game');
	//var player = req.query.player_type;
	
});

router.get('/game', function(req, res){
	if(req.session.game_id){
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
	console.log(newState);
	Helper.submitState(submitPost.id, newState, submitPost.intent, req.session.playerType, res);
});

router.get('/games', function (req, res) {
	Games.getGames(res);
});


router.post('/logout', function(req,res){
	console.log(logoutGet);
	req.session.destroy();
	//Helper.removeIf(logoutGet.id, req, res);
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
