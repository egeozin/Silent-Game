$(document).ready(function(){

	Handlebars.partials = Handlebars.templates;
	
	//var game = Game();
	//GameVis_install($("#widget"), game);

	$.get('/game', function(resp){
    
		if(resp.success){
      if(resp.playerType == 'player_1'){
           var game = resp.game;
           var forHtml = {round:resp.round, playerType: resp.roundPlayer};
			     var gameSession = Handlebars.templates.game_session(game[0]);
           var playerHtml = Handlebars.templates.player_1();
           var round_reminder = Handlebars.templates.round_reminder(forHtml);
			     $(".container").empty();
           $(".container").append(gameSession);
           $(".container").append(playerHtml);
           if (resp.round != 0 ){
              $('#server-message').remove();
              $('#game-name').after(round_reminder);
           }
           if(resp.roundPlayer == 'player_1'){ 
              var dataForD3 = {state: resp.board, playerType: 'player_1', prohibited: 0};
           } else {
              var dataForD3 = {state: resp.board, playerType: 'player_1', prohibited: 1};
           }
           GameWidget_install(dataForD3);
           $('#server-message').removeClass("server-status").addClass("status-show");
      }
      if(resp.playerType == 'player_2'){
           var game= resp.game;
           var forHtml = {round:resp.round, playerType: resp.roundPlayer};
           var gameSession = Handlebars.templates.game_session(game[0]);
           var playerHtml = Handlebars.templates.player_2();
           var round_reminder2 = Handlebars.templates.round_reminder(forHtml);
           $(".container").empty();
           $(".container").append(gameSession);
           $(".container").append(playerHtml);
           if (resp.round != 0 ){
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
                  //game[0].dataForD3 = {state: resp.board, playerType: "player_1"};
                  var dataForD3 = {state: resp.board, playerType: "player_1", prohibited: 0};
		              var session = Handlebars.templates.game_session(game[0]);
                  var playerHtml = Handlebars.templates.player_1();
		              $(".container").empty();
		              $(".container").append(session);
                  $(".container").append(playerHtml);
                  //var states = game[0].states;
                  GameWidget_install(dataForD3);
                  $('#server-message').removeClass("server-status").addClass("status-show"); //.text(resp.status);
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
                  console.log(resp.game[0].status);
		              $(".container").empty();
		              $(".container").append(session);
                  $(".container").append(playerHtml);
                  GameWidget_install(dataForD3);
                  $('#server-message').removeClass("server-status").addClass("status-show");
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


    $(document).on('click', '#submit-button', function(){
      var state = $('#board').data();
      var id = $('#board').parents('#game-field').data('id');
      var newState = state.state;
      console.log(newState);
      var intent = $('input:radio:checked').next('label:first').html();
      if ($('[name="intent"]').is(':checked')) {
          if (id) {
            $.post('/submit', {
                id: id,
                newState: JSON.stringify(newState),
                intent: intent
            }, function(resp) {
              if (resp.success) {
                $('#radio-warning-01').removeClass("warning-show").addClass("warning-radio");
                $('#radio-warning-02').removeClass("warning-show").addClass("warning-radio");
                var forHtml = {round:resp.board[0].round, player:resp.oldPlayer};
                var reminder = Handlebars.templates.round_reminder2(forHtml);
                var newBoard = Handlebars.templates.board();
                $('input:radio:checked').prop('checked', false);
                $("#server-message").remove();
                $('#game-name').after(reminder);
                $("#server-message").removeClass("server-status").addClass("status-show");
                $('#board').remove();
                $('#widget').prepend(newBoard);
                var board = resp.board[0];
                dataForD3 = {state: board.state, playerType: resp.type, prohibited: 1};
                GameWidget_install(dataForD3);
                //$('#server-message').removeClass("server-status").addClass("status-show").text(board.player);
              } else {
                  console.log("Can't access data!");
                  $('#server-message').removeClass("server-status").addClass("status-show").text(resp.message);

              } }); 
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
          var mainPage = Handlebars.templates.main();
          $(".container").append(mainPage);
          console.log(resp.message);

        } else {
          var mainPage = Handlebars.templates.main();
          $(".container").append(mainPage);
          console.log(resp.message);
        }
      })

    });


});

