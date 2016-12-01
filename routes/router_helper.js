var express = require('express');
var Board = require('../model/board');
var Game = require('../model/game');
var Layer = require('../model/layer');

var Helper = function() {

	var that = Object.create(Helper.prototype);

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
	};

	var formatBoards2 = function(b){
	return {
		_id: b._id,
		state: b.state,
		player: b.player,
		round: b.round
	};
}


	that.joinGame = function(passcode, player, req, res){
		Game.findOne({passcode: passcode}, 'creator completed occupancy _id', function(err, game){
			if(game){
				console.log('success! A game is found!');
				if(game.creator == player){
					console.log('here-21');
					res.json({
						'success':false,
						'message':'Creator is already in the game!'
					});
	
				}
				else if(game.completed) {
					console.log('here-22');
					res.json({
						'success':false,
						'message':'This game has been completed!'
					});
	
				}
				else if(game.occupancy >= 1) {
					console.log('here-23');
					res.json({
						'success':false,
						'message':'This game is full!'
					});
	
				} else {
					console.log('here-24');
					if(game.occupancy == 0) {
						req.session.name = player;
						req.session.game_id = game._id;
						req.session.playerType = 'player_2';
						req.session.save();
						playerType = 'player_2';
						var status = "You are good to go! It's Player 1's turn";
						that.updateOccupancy(game._id, player, status, playerType, res);
						//res.json({
						//	'success':true,
						//	'participant':'player_2',
						//	'game':[game].map(formatGames2)
						//});
					} else {
						console.log('here-25');
						res.json({
							'success':false,
							'message':"Something's wrong, you shouldn't be here!"
						});	
						//Implement the observer here!
						//req.session.name = player;
						//req.session.passcode = passcode;
						//req.session.save();
						//playerType = 'observer';
						//Game.updateOccupancy(game._id, playerType);
						//res.json({
						//	'success':true,
						//	'participant':'observer',
						//	'game':[game].map(formatGames2)
						//});
					}
				}
	
			} else if (game === null) {
				console.log('here-26');
				var message = 'No game found';
				res.json({
					'success': false,
					'message': message
				});
			} else {
				console.log(err);
				console.log('here-27');
				res.json({
					'success': false,
					'message': "There are no games matching the given passcode!"
				});
			}
	
		});
	
	};
	
	
	that.createGame = function(name, passcode, req, res){
		var status = "Game is created, waiting for Player 2 to join!";
		console.log('here-7');
		var firstState = Layer.initial();
		Game.create({creator:name, status:status, passcode: passcode}, 
			function(err, game){
				if(err){
					console.log('here-8');
					res.json({
						'success':false,
						'message':'Username has wrong characters'
					});
				} else {
					console.log('here-9');
					req.session.name = name;
					req.session.game_id = game._id;
					req.session.playerType = 'player_1';
					req.session.save();
					Board.create({state:firstState, player:'', round:0, intent:'none'}, function(err, board){
						if(err){
							console.log('here-10');
							res.json({
								'success':false,
								'message':'Something wrong with the Board!'
							});
						} else {
							console.log('here-11');
							var board = board;
							Game.findByIdAndUpdate(game._id, {$push:{'states': board._id}}, {new: true}, function(err, game){
								if(err){
									console.log('here-12');
									res.json({
										'success':false,
										'message':'update is unsuccessful!'
									});
								} else {
									console.log('here-13');
									res.json({
										'success':true,
										'game': [game].map(formatGames),
										'board':board.state
									});
								}
							})

						}

					});
					
					
			}
		});
	}; 



	that.submitState = function(id, newState, intent, type, res) {
		Game.findOne({'_id':id}).populate('states').select({"states": {"$slice": -1}}).select('occupancy').exec(function(err, game){
			Board.findOne({'_id': game.states[0]._id}).select('state player round').exec(function(err, prevBoard){
				if(err){
					console.log('error in bringing previous state!');
					res.json({
						'success':false,
						'message':'Error in bringing previous state'
					})
				} else {
					if (game.occupancy != 0) {
					console.log('Brought previous state!');
					var oldState = prevBoard.state;
					if(oldState !== newState){
						var prevRound = prevBoard.round;
						if (prevRound == 0) { var newRound = prevRound + 2; }
						else { var newRound = prevRound + 1; }
						var stateToSubmit = Layer.merge(oldState, newState);
						console.log(stateToSubmit);
						if ((prevBoard.player == 'player_2') || (prevBoard.player == '')){
							var newPlayer = 'player_1';
							var oldPlayer = 'player_2';

						} else {
							//var newIntent = intent;
							var newPlayer = 'player_2';
							var oldPlayer = 'player_1';
							
						}
						that.createBoard(id, stateToSubmit, oldPlayer, newPlayer, newRound, intent, type, res);
					} else {
						res.json({
							'success':false,
							'message': 'You need to play your move before submitting!'
						})
					}
				} else {
					res.json({
						'success': false,
						'message':'Wait for player 2 to join!'
					})
				}
				}
			})
			
		})
	};

	that.bringGame = function(id, type, res) {
		Game.findOne({'_id':id}).populate('states').select({"states": {"$slice": -1}}).exec(function(err, game){
			console.log(game.states[0]._id);
			Board.findOne({'_id': game.states[0]._id}).select('state player round').exec(function(err, board){
				if(err) {
					console.log('error in bringing the game!')
					res.json({
							'success':false,
							'message':'Error in bringing the game'
					})
				} else {
					console.log('success in bringing the game!')
					if (board.player == 'player_1' ) {
						res.json({
							'success':true,
							'game': [game].map(formatGames),
							'playerType': type,
							'board': board.state,
							'round': board.round,
							'roundPlayer': "player_2"
						}) } 
					if (board.player == 'player_2' || board.player == '') {
						res.json({
							'success':true,
							'game': [game].map(formatGames),
							'playerType': type,
							'board': board.state,
							'round': board.round,
							'roundPlayer': "player_1"
					})

					}
				}

			});
		});
	};


	that.createBoard = function(id, array, oldplayer, player_name, round, intent, type, res){
		Board.create({state:array, player: player_name, round: round, intent: intent}, 
			function(err, board){
				if(err){
					res.json({
						'success':false,
						'message':'Something wrong with the Board!'
					});
				} else {
					Game.findByIdAndUpdate(id, {$push:{'states': board._id}}, {new: true}, function(err, game){
						if(err){
							console.log('here-12');
							res.json({
								'success':false,
								'message':'update is unsuccessful!'
							});
						} else {
							console.log('here-13');
							res.json({
								'success':true,
								'board':[board].map(formatBoards2),
								'oldPlayer':oldplayer,
								'type': type
							});
						}
					});
				}
			});
	};


	that.updateOccupancy = function(id, name, status, type, res){
	if (type == 'player_2') {
		console.log(status);
		Game.findByIdAndUpdate(id, {occupancy: 1, status:status, player2:name}, {new: true}, function(err, game){
			if (err) {
				res.json({
					'success':false,
					'message':"Can't update the occupancy!"
				}) } else {
					var firstState = Layer.initial();
					res.json({
						'success':true,
						'game':[game].map(formatGames),
						'board':firstState
					})
				}
		});  
	 } else {
			res.json({
				'success':false,
				'message':"Live observer is not supported in this version!"
			})
		}
	
	};

	that.removeIf = function (id, req, res){
		req.session.destroy();
		Game.findOne({'_id':id}).populate('states').select({"states": {"$slice": -1}}).select('occupancy').exec( function(err, game){
			console.log(game.states[0]._id);
			Board.findOne({'_id': game.states[0]._id}).remove(function(err){
			if (err){
				res.json({
					'success':false,
					'message':"Can't find the game during Logout!"
				})
			} else {
				console.log('The game to delete has been found!');
				console.log(game.occupancy);
				if (game.occupancy != 1) {
					Game.findOne({'_id':id}).remove(function(err){
						if (err){
							res.json({
								'success':false,
								'message':"Can't remove the game!"
							})} else {
								res.json({
									'success':true,
									'message':"The game is removed as there weren't enough players!"
								})
							
						}
					})
				} else {
					res.json({
						'success':true,
						'message':"See you next time!"
					});
				}
			}
		})
	})
	};




	Object.freeze(that);
	return that;

}

module.exports = Helper();

