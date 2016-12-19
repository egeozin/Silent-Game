(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['analysis_session'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<div id=\"game-field\" data-id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n\n	<h2 class=\"explain\" id=\"game-name\">This is game: <span id=\"passcode-copy\">"
    + alias4(((helper = (helper = helpers.passcode || (depth0 != null ? depth0.passcode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"passcode","hash":{},"data":data}) : helper)))
    + "<span></h2>\n	<h3 class=\"suggest\">Player 1's intention was: "
    + alias4(((helper = (helper = helpers.player1_int || (depth0 != null ? depth0.player1_int : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"player1_int","hash":{},"data":data}) : helper)))
    + "</h3>\n	<h3 class=\"suggest\">Player 2's intention was: "
    + alias4(((helper = (helper = helpers.player2_int || (depth0 != null ? depth0.player2_int : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"player2_int","hash":{},"data":data}) : helper)))
    + "</h3>\n\n	<div id=\"boards-list\">\n\n	</div>\n\n	<div class=\"rules\" id=\"player_info\">\n		\n	</div>\n\n</div>";
},"useData":true});
templates['board'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"board_in_"
    + alias4(((helper = (helper = helpers.round || (depth0 != null ? depth0.round : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"round","hash":{},"data":data}) : helper)))
    + "\" class=\"smallBoard\"></div>\n<h3 class=\"suggest\">Turn:"
    + alias4(((helper = (helper = helpers.round || (depth0 != null ? depth0.round : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"round","hash":{},"data":data}) : helper)))
    + "</h3>\n<h3 class=\"suggest\">Player:"
    + alias4(((helper = (helper = helpers.player || (depth0 != null ? depth0.player : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"player","hash":{},"data":data}) : helper)))
    + "</h3>\n<h3 class=\"suggest\">Confidences:"
    + alias4(((helper = (helper = helpers.confidences || (depth0 != null ? depth0.confidences : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confidences","hash":{},"data":data}) : helper)))
    + "</h3>";
},"useData":true});
templates['boards_list'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"boards-list\"></div>";
},"useData":true});
templates['end_game_remarks'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "    <div id=\"end-section\" class=\"intro\">\n        <h1 id=\"goodbye\">Thank you for participating in our game.</h1>\n        <h2 id=\"farewell\">Your contribution will help us to design a computational model that will try to predict players' intentions.</h2>\n        <h3 id=\"final-remarks\">Check this webpage after two weeks to see a comparison of human predictions and our model's predictions.</h3>\n   </div>";
},"useData":true});
templates['game'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<button id=\""
    + alias4(((helper = (helper = helpers.passcode || (depth0 != null ? depth0.passcode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"passcode","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"games-list-item\">"
    + alias4(((helper = (helper = helpers.passcode || (depth0 != null ? depth0.passcode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"passcode","hash":{},"data":data}) : helper)))
    + "</a> ";
},"useData":true});
templates['game_session'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	\n<div id=\"game-field\" data-id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-turn=\""
    + alias4(((helper = (helper = helpers.turn || (depth0 != null ? depth0.turn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"turn","hash":{},"data":data}) : helper)))
    + "\">\n\n	<h2 class=\"explain\" id=\"game-name\">This is game: <span id=\"passcode-copy\">"
    + alias4(((helper = (helper = helpers.passcode || (depth0 != null ? depth0.passcode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"passcode","hash":{},"data":data}) : helper)))
    + "<span></h2>\n	<span id=\"server-message\" class=\"server-status\">"
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n\n	<div id=\"widget\">\n\n\n		<div id=\"board\"></div>\n		<!-- <script src=\"/js/board_d3.js\" type=\"text/javascript\"></script> -->\n\n		<button class=\"btn\" id=\"submit-button\">Submit</button>\n		<!-- <button class=\"btn\" id=\"clear-button\">Clear</button> -->\n		\n	</div>\n\n	<div class=\"rules\" id=\"player_info\">\n		\n	</div>\n\n</div>";
},"useData":true});
templates['game_session2'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	\n<div id=\"game-field\" data-id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-turn=\""
    + alias4(((helper = (helper = helpers.turn || (depth0 != null ? depth0.turn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"turn","hash":{},"data":data}) : helper)))
    + "\">\n\n	<h2 class=\"explain\" id=\"game-name\">This is game: <span id=\"passcode-copy\">"
    + alias4(((helper = (helper = helpers.passcode || (depth0 != null ? depth0.passcode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"passcode","hash":{},"data":data}) : helper)))
    + "<span></h2>\n	<span id=\"server-message\" class=\"server-status\">"
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n\n	<div id=\"widget\">\n\n\n		<div id=\"board\"></div>\n		<!-- <script src=\"/js/board_d3.js\" type=\"text/javascript\"></script> -->\n\n		<button class=\"btn\" id=\"submit-button\">Submit</button>\n		<!-- <button class=\"btn\" id=\"clear-button\">Clear</button> -->\n		\n	</div>\n\n	<div class=\"rules\" id=\"player_info\">\n		\n	</div>\n\n</div>";
},"useData":true});
templates['games'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.game,depth0,{"name":"game","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.games : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['games_list'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"games-list\"></div>";
},"useData":true});
templates['intention'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span id=\"intention-reminder\" class=\"status-show\">Your intention is "
    + container.escapeExpression(((helper = (helper = helpers.intention || (depth0 != null ? depth0.intention : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"intention","hash":{},"data":data}) : helper)))
    + ".</span>";
},"useData":true});
templates['main'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"introduce\">\n\n    <div id=\"create-section\" class=\"intro\">\n        <h1 id=\"welcome\">Welcome to the Game of Design.</h1>\n        <h2 class=\"explain\">In order to start playing you need to find two other players.</h2>\n        <h3 class=\"suggest\">If your group is ready, one of you can enter her/his name(any valid name) and create a game. Let other users join the game by sharing the code that will be printed on the top of the game page.</h3>\n        <div>\n            <input placeholder=\"Your Name\" id=\"creator-name\" type=\"text\">\n            <span id='login-username-01' class=\"warning-login-username-1\">You entered an empty string in the name field!</span>\n            <span id='login-username-02' class=\"warning-login-username-1\"></span>\n        </div>\n        <button class=\"btn\" id=\"create-button\">Create</button>\n    </div>\n\n    <div id=\"join-section\" class=\"intro\">\n        <h3 class=\"suggest\">If you want to participate in a game that is already initiated, enter your name and the passcode for the game:</h3>\n        <div>\n            <input placeholder=\"Your Name\" id=\"participant-name\" type=\"text\">\n            <span id='login-username-2' class=\"warning-login-username-1\">You entered an empty string in the namefield!</span>\n            <input placeholder=\"Passcode\" id=\"passcode\" type=\"text\">\n            <span id='passcode-warning-1' class=\"warning-passcode\">There are no games in the database associated with the given Passcode. Check if you have typed it wrong.</span>\n            <span id='passcode-warning-2' class=\"warning-passcode\">Sorry the game is full.</span>\n            <span id='passcode-warning-3' class=\"warning-passcode\">You entered an empty string in one or more ofthe fields above!</span>\n        </div>\n        <button class=\"btn\" id=\"join-button\">Join</button>\n    </div>\n\n</div>";
},"useData":true});
templates['observer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"observer\">\n	<ul class=\"selections\">\n		<li>\n    		<input type=\"radio\" id=\"boundary-making\" name=\"intent\"/>\n    		<label for=\"boundary-making\">Boundary Making</label>\n		</li>\n		<li>\n    		<input type=\"radio\" id=\"containment\" name=\"intent\"/>\n    		<label for=\"containment\">Containment</label>\n		</li>\n		<li>\n    		<input type=\"radio\" id=\"marking\" name=\"intent\"/>\n    		<label for=\"marking\">Marking</label>\n		</li>\n		<li>\n    		<input type=\"radio\" id=\"repetition\" name=\"intent\"/>\n    		<label for=\"repetition\">Repetition</label>\n		</li>\n	</ul>\n	<p> Rules of the Game(Instructions) for <span class=\"player_3\">Player 3 / Observer</span>:</p>\n	<ul>\n		<li> In each round of the game try to guess the intention behind the move of each player.</li>\n		<li> Select only one intention from the list above.</li>\n		<li> Submit your response. </li>\n	</ul\n</div>";
},"useData":true});
templates['player1_final_remark'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span id=\"server-message\" class=\"server-status\">Turn "
    + alias4(((helper = (helper = helpers.round || (depth0 != null ? depth0.round : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"round","hash":{},"data":data}) : helper)))
    + ", It's "
    + alias4(((helper = (helper = helpers.playerType || (depth0 != null ? depth0.playerType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerType","hash":{},"data":data}) : helper)))
    + "'s turn. In this final turn, just try to guess other player's intention. Provide confidence values for each of the intentions below. </span>";
},"useData":true});
templates['player_1'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"player-1\">\n	<div id=\"player1_buttons\">\n	<div class = \"warnings\">\n		<span id=\"radio-warning-01\" class=\"warning-radio\">No id is found!</span>\n		<span id=\"radio-warning-02\" class=\"warning-radio\">You need to provide a value for each box and they should sum up to 100. Also, they should be integer.</span>\n		<span id=\"radio-warning-03\" class=\"warning-radio\">You have to find a second player!</span>\n	</div>\n	<ul class=\"selections\">\n		<li>\n    		<input type=\"radio\" id=\"intersection\" name=\"intent\"/>\n    		<label for=\"intersection\">Intersection</label>\n		</li>\n		<li>\n    		<input type=\"radio\" id=\"containment\" name=\"intent\"/>\n    		<label for=\"containment\">Containment</label>\n		</li>\n		<li>\n    		<input type=\"radio\" id=\"clustering\" name=\"intent\"/>\n    		<label for=\"clustering\">Clustering</label>\n		</li>\n		<li>\n    		<input type=\"radio\" id=\"repetition\" name=\"intent\"/>\n    		<label for=\"repetition\">Repetition</label>\n		</li>\n	</ul>\n	<ul class=\"confidences\">\n		<li>\n    		<input placeholder=\"Confidence\" id=\"intersect-conf\" type=\"text\" pattern=\"[0-9]*\">\n		</li>\n		<li>\n    		<input placeholder=\"Confidence\" id=\"contain-conf\" type=\"text\" pattern=\"[0-9]*\">\n		</li>\n		<li>\n    		<input placeholder=\"Confidence\" id=\"cluster-conf\" type=\"text\" pattern=\"[0-9]*\">\n		</li>\n		<li>\n    		<input placeholder=\"Confidence\" id=\"repeat-conf\" type=\"text\" pattern=\"[0-9]*\">\n		</li>\n	</ul>\n	</div>\n	</ul>\n	<div class=\"general-rules\">\n	<p class=\"rules-intro\"> Rules of the Game for <span class=\"player_1\">Player 1</span> :</p>\n	<ul class=\"rules-list\">\n		<li>Play at most 5 cells following the intention that is assigned to you (It's at the top of the page).</li>\n		<li>After the first round, guess the Player 2's intention. State your confidence by providing a number between 0 and 100 for each of the intentions above. Don't forget: Sum of numbers must be equal to 100!</li>\n		<li>When you are done press the <em>Submit</em> button to move to the next turn.</li>\n		<li>You cooperate with the other player in order to produce a design together. Try to be clear as possible with your intentions.</li>\n	</ul>\n	</div>\n</div>";
},"useData":true});
templates['player_1_final'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"player-1\">\n	<div id=\"player1_buttons\">\n	<div class = \"warnings\">\n		<span id=\"radio-warning-01\" class=\"warning-radio\">No id is found!</span>\n		<span id=\"radio-warning-02\" class=\"warning-radio\">You need to provide a value for each box and they should sum up to 100. Also, they should be integer.</span>\n		<span id=\"radio-warning-03\" class=\"warning-radio\">You have to find a second player!</span>\n	</div>\n	<ul class=\"selections\">\n		<li>\n    		<input type=\"radio\" id=\"intersection\" name=\"intent\"/>\n    		<label for=\"intersection\">Intersection</label>\n		</li>\n		<li>\n    		<input type=\"radio\" id=\"containment\" name=\"intent\"/>\n    		<label for=\"containment\">Containment</label>\n		</li>\n		<li>\n    		<input type=\"radio\" id=\"clustering\" name=\"intent\"/>\n    		<label for=\"clustering\">Clustering</label>\n		</li>\n		<li>\n    		<input type=\"radio\" id=\"repetition\" name=\"intent\"/>\n    		<label for=\"repetition\">Repetition</label>\n		</li>\n	</ul>\n	<ul class=\"confidences\">\n		<li>\n    		<input placeholder=\"Confidence\" id=\"intersect-conf\" type=\"text\" pattern=\"[0-9]*\">\n		</li>\n		<li>\n    		<input placeholder=\"Confidence\" id=\"contain-conf\" type=\"text\" pattern=\"[0-9]*\">\n		</li>\n		<li>\n    		<input placeholder=\"Confidence\" id=\"cluster-conf\" type=\"text\" pattern=\"[0-9]*\">\n		</li>\n		<li>\n    		<input placeholder=\"Confidence\" id=\"repeat-conf\" type=\"text\" pattern=\"[0-9]*\">\n		</li>\n	</ul>\n	</div>\n	</ul>\n	<div class=\"general-rules\">\n	<p class=\"rules-intro\"> Rules of the Game for <span class=\"player_1\">Player 1</span> :</p>\n	<ul class=\"rules-list\">\n		<li>In this final round, guess the Player 2's intention. State your confidence by providing a number between 0 and 100 for each of the intentions above. Don't forget: Sum of numbers must be equal to 100!</li>\n		<li>When you are done press the <em>Submit</em> button to move to the next turn.</li>\n	</ul>\n	</div>\n</div>";
},"useData":true});
templates['player_2'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"player-2\">\n	<span id=\"radio-warning-01\" class=\"warning-radio\">No id is found!</span>\n	<span id=\"radio-warning-02\" class=\"warning-radio\">You need to select one intention.</span>\n	<ul class=\"selections\">\n		<li>\n    		<input type=\"radio\" id=\"intersection\" name=\"intent\"/>\n    		<label for=\"intersection\">Intersection</label>\n		</li>\n		<li>\n    		<input type=\"radio\" id=\"containment\" name=\"intent\"/>\n    		<label for=\"containment\">Containment</label>\n		</li>\n		<li>\n    		<input type=\"radio\" id=\"clustering\" name=\"intent\"/>\n    		<label for=\"clustering\">Clustering</label>\n		</li>\n		<li>\n    		<input type=\"radio\" id=\"repetition\" name=\"intent\"/>\n    		<label for=\"repetition\">Repetition</label>\n		</li>\n	</ul>\n	<ul class=\"confidences\">\n		<li>\n    		<input placeholder=\"Confidence\" id=\"intersect-conf\" type=\"text\" pattern=\"[0-9]*\">\n		</li>\n		<li>\n    		<input placeholder=\"Confidence\" id=\"contain-conf\" type=\"text\" pattern=\"[0-9]*\">\n		</li>\n		<li>\n    		<input placeholder=\"Confidence\" id=\"cluster-conf\" type=\"text\" pattern=\"[0-9]*\">\n		</li>\n		<li>\n    		<input placeholder=\"Confidence\" id=\"repeat-conf\" type=\"text\" pattern=\"[0-9]*\">\n		</li>\n	</ul>\n	<div class=\"general-rules\">\n	<p class=\"rules-intro\"> Rules of the Game for <span class=\"player_2\">Player 2</span>:</p>\n	<ul class=\"rules-list\">\n		<li>When it's your turn, Play at most 5 cells following the intention that is assigned to you (It's at the top of the page).</li>\n		<li>Guess the Player 1's intention. State your confidence by providing a number between 0 and 100 for each of the intentions above. Don't forget: Sum of numbers must be equal to 100!</li>\n		<li>You are cooperating for this design.</li>\n		<li>Submit your response</li>\n	</ul>\n	</div>\n</div>";
},"useData":true});
templates['round_reminder'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span id=\"server-message\" class=\"server-status\">Turn "
    + alias4(((helper = (helper = helpers.round || (depth0 != null ? depth0.round : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"round","hash":{},"data":data}) : helper)))
    + ", It's "
    + alias4(((helper = (helper = helpers.playerType || (depth0 != null ? depth0.playerType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerType","hash":{},"data":data}) : helper)))
    + "'s turn</span>";
},"useData":true});
templates['round_reminder2'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span id=\"server-message\" class=\"server-status\">Turn "
    + alias4(((helper = (helper = helpers.round || (depth0 != null ? depth0.round : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"round","hash":{},"data":data}) : helper)))
    + ", It's "
    + alias4(((helper = (helper = helpers.player || (depth0 != null ? depth0.player : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"player","hash":{},"data":data}) : helper)))
    + "'s turn</span>";
},"useData":true});
})();