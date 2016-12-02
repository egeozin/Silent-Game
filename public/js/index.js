$(document).ready(function(){

	Handlebars.partials = Handlebars.templates;
	
	//var game = Game();
	//GameVis_install($("#widget"), game);

	$.get('/game', function(resp){
    
		if(resp.success){
      if(resp.playerType == 'player_1'){
           var game = resp.game;
           var turn = resp.round;
           if (turn <= 9) {
              var forHtml = {round:turn, playerType: resp.roundPlayer};
              if (turn == 0){
                  var gameSession =  Handlebars.templates.game_session(game[0]);
                  //$('#game-field').data({turn:"12"});
              } else {
                 var gameSession = Handlebars.templates.game_session(game[0]);
              }
              if (turn == 9) {
                 var playerHtml = Handlebars.templates.player_1_final();
                 var finalRemark = Handlebars.templates.player1_final_remark(forHtml);
               } else {
                 var playerHtml = Handlebars.templates.player_1();
                 var round_reminder = Handlebars.templates.round_reminder(forHtml);
               }
			        $(".container").empty();
              $(".container").append(gameSession);
              $(".container").append(playerHtml);
              if (turn == 9){
                 $("#server-message").remove();
                 $('#game-name').after(finalRemark);
                 $("#server-message").removeClass("server-status").addClass("status-show");
              } else if(turn == 0) {
                 $('#player1_buttons').remove();
              } else {
                 $('#server-message').remove();
                 $('#game-name').after(round_reminder);
              }
    
              if(resp.roundPlayer == 'player_1'){
                 var newJson = {intention: game[0].player1_intent};
                 var intent_reminder = Handlebars.templates.intention(newJson);
                 $('#server-message').after(intent_reminder);
                 if (turn < 9) {
                   var dataForD3 = {state: resp.board, playerType: 'player_1', prohibited: 0}; }
                 else {
                   $('#intention-reminder').remove()
                   var dataForD3 = {state: resp.board, playerType: 'player_1', prohibited: 1}; }
                 }
               else {
                 var dataForD3 = {state: resp.board, playerType: 'player_1', prohibited: 1};
              }
              GameWidget_install(dataForD3);
              $('#server-message').removeClass("server-status").addClass("status-show");
           } else {
               var final = Handlebars.templates.end_game_remarks();
               $(".container").empty();
               $(".container").append(final);
             }
      } 
      if(resp.playerType == 'player_2'){
           var game= resp.game;
           var turn = resp.round;
           if (turn <= 8) {
              var forHtml = {round:turn, playerType: resp.roundPlayer};
              var gameSession = Handlebars.templates.game_session(game[0]);
              var playerHtml = Handlebars.templates.player_2();
              var round_reminder2 = Handlebars.templates.round_reminder(forHtml);
              $(".container").empty();
              $(".container").append(gameSession);
              $(".container").append(playerHtml);
              var newJson = {intention: game[0].player2_intent};
              var intent_reminder = Handlebars.templates.intention(newJson);
              $('#server-message').after(intent_reminder);
              if (turn != 0 ){
                 $('#server-message').remove();
                 $('#game-name').after(round_reminder2);
              }
              if(resp.roundPlayer == 'player_2'){
                 var dataForD3 = {state: resp.board, playerType: 'player_2', prohibited: 0};
              } else {
                 var dataForD3 = {state: resp.board, playerType: 'player_2', prohibited: 1};
              }
              
              GameWidget_install(dataForD3);
              $('#server-message').removeClass("server-status").addClass("status-show");

          } else {
               var final = Handlebars.templates.end_game_remarks();
               $(".container").empty();
               $(".container").append(final);
          }
      }

		} else {
			var mainPage = Handlebars.templates.main();
			$(".container").append(mainPage);
			console.log(resp.message);
		}
	});

  /*
  $.get('/games', function(resp){
    if(resp.success){
      var gamesList = Handlebars.templates.games(resp);
      $(".container").empty();
      $(".container").append(gamesList);
    } else {
        console.log(resp.message);
    }
  });

  $.get('/logout', {}, function(resp){
    if(resp.success){
      var mainPage = Handlebars.templates.main();
      $(".container").empty();
      $(".container").append(mainPage);
    } else {
        console.log(resp.message);
    }
  }); */


	$(document).on('click', '#create-button',function() {
		var creatorName = $('#creator-name').val();
   		if (creatorName) {
   		    $.post('/create', {
   		          username: creatorName
   		      }, function(resp) {
   		          if (resp.success) {
                  console.log('here-1');
                  var game = resp.game;
                  var dataForD3 = {state: resp.board, playerType: "player_1", prohibited: 0};
		              var session = Handlebars.templates.game_session(game[0]);
                  var playerHtml = Handlebars.templates.player_1();
                  var newJson = {intention: game[0].player1_intent};
                  var intent_reminder = Handlebars.templates.intention(newJson);
		              $(".container").empty();
		              $(".container").append(session);
                  $(".container").append(playerHtml);
                  $('#player1_buttons').remove();
                  GameWidget_install(dataForD3);
                  $('#server-message').removeClass("server-status").addClass("status-show");
                  $('#server-message').after(intent_reminder);
   		          } else {
                  console.log('here-3');
   		            $('#login-username-02').removeClass("warning-login-username-1").addClass("warning-show").text(resp.message);
   		          }
   		    })
   		} else {
        console.log('here-2');
        $('#login-username-01').removeClass("warning-login-username-1").addClass("warning-show");
    } 
  	
  	});


  	$(document).on('click', '#join-button',function() {
  		var participantName = $('#participant-name').val();
		  var submittedPasscode = $('#passcode').val();
      participantName = participantName.replace(/\s+/g, '');
      submittedPasscode = submittedPasscode.replace(/\s+/g, '');
   		if (submittedPasscode && participantName) {
   		    $.post('/join', {
   		          playername: participantName,
   		          passcode: submittedPasscode
   		      }, function(resp) {
   		          if (resp.success) {
                  console.log('here-28');
                  var game = resp.game;
                  var dataForD3 = {state:resp.board, playerType:"player_2", prohibited:1};
		              var session = Handlebars.templates.game_session(game[0]);
                  var playerHtml = Handlebars.templates.player_2();
                  var newJson = {intention: game[0].player2_intent};
                  var intent_reminder = Handlebars.templates.intention(newJson);
                  console.log(resp.game[0].status);
		              $(".container").empty();
		              $(".container").append(session);
                  $(".container").append(playerHtml);
                  GameWidget_install(dataForD3);
                  $('#server-message').removeClass("server-status").addClass("status-show");
                  $('#server-message').after(intent_reminder);
   		          } else {
                  console.log('here-29');
   		            $('#passcode-warning-2').removeClass("warning-passcode").addClass("warning-show").text(resp.message);
   		          }
   		    })
   		} else {
        console.log('here-30');
        $('#passcode-warning-3').removeClass("warning-passcode").addClass("warning-show");
    } 
  	
  	});

    var sumCheck = function(arr) {
        var sumOf = arr.reduce(function(acc, e){
            return acc + e}, 0);
        return sumOf == 100 ? true : false ;
    };

    $(document).on('click', '#submit-button', function(){
      var state = $('#board').data();
      var id = $('#board').parents('#game-field').data('id');
      var turn = $('#board').parents('#game-field').data('turn');
      console.log(turn);
      if (turn < 9){
          var newState = state.state;
          var intersect = +$('#intersect-conf').val();
          var contain = +$('#contain-conf').val();
          var clustering = +$('#cluster-conf').val();
          var repeating = +$('#repeat-conf').val();
      } else if (turn == 0){
          var newState = state.state;
          var intersect = 25;
          var contain = 25;
          var clustering = 25;
          var repeating = 25;       
      } else {
          var newState = [0];
          var intersect = +$('#intersect-conf').val();
          var contain = +$('#contain-conf').val();
          var clustering = +$('#cluster-conf').val();
          var repeating = +$('#repeat-conf').val();
      }
      console.log(intersect);
      var confArray = [intersect, contain, clustering, repeating];
      var failure = confArray.reduce(function(a, e){
         return a || !Number.isInteger(e) || isNaN(e) || e < 0 || e > 100 ;
      }, false);
      console.log(failure);
      var success = sumCheck(confArray);
      console.log(success);
      console.log(newState);
      if ((!failure && success) || (turn == 0))  {
          if (id) {
            $.post('/submit', {
                id: id,
                newState: JSON.stringify(newState),
                confidences: JSON.stringify(confArray)
            }, function(resp) {
              if (resp.success) {
                var board = resp.board;
                var turn = board[0].round;
                if (turn == 8 && resp.type == 'player_2'){
                  var final = Handlebars.templates.end_game_remarks();
                  $(".container").empty();
                  $(".container").append(final);
                } else {
                var game = resp.game;
                $('#radio-warning-01').removeClass("warning-show").addClass("warning-radio");
                $('#radio-warning-02').removeClass("warning-show").addClass("warning-radio");
                var forHtml = {round:turn, player:resp.oldPlayer};
                var session = Handlebars.templates.game_session(game[0]);
                var reminder = Handlebars.templates.round_reminder2(forHtml);
                if (resp.type == 'player_1'){
                      var playerHtml = Handlebars.templates.player_1();
                      var newJson = {intention: game[0].player1_intent};
                      var intent_reminder = Handlebars.templates.intention(newJson);
                    
                } else if (resp.type == 'player_2'){
                    var playerHtml = Handlebars.templates.player_2();
                    var newJson = {intention: game[0].player2_intent};
                    var intent_reminder = Handlebars.templates.intention(newJson);
                }
                var newBoard = Handlebars.templates.board();
                $(".container").empty();
                $(".container").append(session);
                $(".container").append(playerHtml);
                
                $("#server-message").remove();
                $('#game-name').after(reminder);
                $("#server-message").removeClass("server-status").addClass("status-show");
                
                $('#server-message').after(intent_reminder);
                var board = resp.board[0];
                dataForD3 = {state: board.state, playerType: resp.type, prohibited: 1};
                GameWidget_install(dataForD3);

                }
                } else if (resp.end) {
                    var final = Handlebars.templates.end_game_remarks();
                    $(".container").empty();
                    $(".container").append(final);
                } else {
                  console.log("Can't access data!");
                  $('#server-message').removeClass("server-status").addClass("status-show").text(resp.message);

              }}); 
          } else {
          console.log('here-32');
          $('#radio-warning-01').removeClass("warning-radio").addClass("warning-show");
        }
      } else {
          console.log('here-33');
          $('#radio-warning-02').removeClass("warning-radio").addClass("warning-show");
      }
    });


    $(document).on('click', '#logout-button', function(){
      var id = $('#board').parents('#game-field').data('id');
      $.post('/logout', {id:id}, function(resp){
        if (resp.success) {
          $(".container").empty();
          var mainPage = Handlebars.templates.main();
          $(".container").append(mainPage);
          console.log(resp.message);

        } else {
          $(".container").empty();
          var mainPage = Handlebars.templates.main();
          $(".container").append(mainPage);
          console.log(resp.message);
        }
      })

    });


});

