
9.660 Computational Cognitive Science Final Project
Ege Ozgirin and Dishita Turakhia

The link for the game: https://design-game.herokuapp.com

# The Silent Game
### Understanding Visual and Social Cognition

The vision of this study is to understand human social cognition through graphical communication. In order to study these two aspects of human behavior, we designed an experiment called silent game where two players communicate their goals to each other through graphical interface/board. We documented and tracked the changing beliefs of players of other player’s goals based on observation and rational analysis of graphical board at the end of each move. We then designed a computational agent using Bayesian models of inference and documented the inferences developed by that model against the game data collected. The goal of this study was not only to understand human behavior of social cognition and visual cognition, but also test how close can Bayesian computational models get to human-like thinking and intuition development. In short, we wanted to test if computational models develop an abstract understanding of people’s intentions based on visual data?

<p align="center"><img src="https://github.mit.edu/egeozin/Silent-Game/blob/master/images/G3-P2.4.png" width="250"></p>

## The Game

In order to study the role of two aspects of human cognition – social and visual in our intuitive psychology, we designed an experiment – a silent game. The game is played between two participants with alternating chances to place blocks on a common board. Before the start of the game, each participant is assigned a goal (randomly) that they need to achieve before the game ends. Each player is given 4 chances and the game ends after 4 rounds. After each round of move by one player, the other player is asked to interpret or guess that move and along with the confidence level. The changes in beliefs by both players are tracked by recording them after each move/round. However, in order for the participants to win, the participants need to not only accomplish their own goals, but also ensure that other participant also finishes her task.

Thus, this is a collaborative game – but the players are required to interpret the other person’s goal solely by observing their moves on the graphic board. The intent of this game design is multifold – firstly, it motivates each player to clearly communicate their own goals to other player; secondly it incentivizes each player to put in effort to understand each other’s intents for effective collaboration for achieving collective goals; thirdly it validates the assumption that the moves played by both players will be rational and aimed to achieve their goals and; fourthly it also reduces the possibility of foul-play, sabotaging, competitiveness or irrational game-play. Furthermore, tracking of the beliefs of players of each other’s goals by observing corresponding actions helps in understanding how the inference of actions change with more observed data.

We have selected four visual concepts for our game that necessitate the application of specific visual routines. Some concepts demand the application of same visual routines. We argued that the visual manifestations of each move on the graphic board that are based on the selected concepts will be distinct. At the same time, we wanted to allow for ambiguity in the concepts that could result in misinterpretation of moves. We are excited about the possibility that our game can provide salient insights about the individual visual mechanisms. Looking at the dynamic evolution of the board configuration and confidences can help us the identify regularities among the specific visual concepts and routines employed by each individual. Even the idiosyncratic interpretations provide important information regarding the beliefs of those individuals associated with each concept. Furthermore, visual routines - like testing linearity, scattered coloration etc are used to build the computational Bayesian Inference model.

<p align="center"><img src="https://github.mit.edu/egeozin/Silent-Game/blob/master/images/interface.jpg" width="450"></p>

### Instructions

Each game had two randomly chosen players playing remotely without any visual or verbal connection to each other. The players were provided the following instructions before playing the game:

	”This is a collaborative 2 player game. Before the game starts, each payer will be assigned an ”intention” - written in green at the top of your
	web-page. The goal of this game is to: (i) Correctly infer other player’s intention and (ii) Effectively communicate your intention to the other
	player. The mode of communication will be by coloring pixels on a checkered board. We are trying to understand how well people express,
	communicate, infer and assess other people’s intentions and abstract goals by just observation. Each player will have 4 turns to play. In each 
	round, you will be asked to write down your confidence levels of what you believe is other player’s intention by entering a numerical value (1-100)
	in the boxes provided.*

If you are player 1: 

	"In your first turn, you just have to draw by coloring the pixels and submit. Turn 2 onwards, you first numerically guess your confidence levels
	and then play your own intention by coloring pixels."

If you are player 2: 

	"You first numerically guess your confidence levels of what the other player’s goal might be, and then play your own turn."

Finally:

	"In order to win this game, both players have to successfully guess each others’ intention - otherwise both players lose the game."


### Examples

Shown in figure below is an example of a game where player 1’s (in blue) intention was *repetition* and player 2’s (in green) intention was *cluster*. The figure shows turn wise progress of the game and the chart below shows the change in the confidence levels of opponent’s beliefs based on player’s actions. This game was successful in terms of communication, with high confidence in accurate guesses.

<p align="center"><img src="https://github.mit.edu/egeozin/Silent-Game/blob/master/images/boards_1.jpg" width="600"></p>

<p align="center"><img src="https://github.mit.edu/egeozin/Silent-Game/blob/master/images/Game_1_2_confidences.png" width="500"></p>

The next example has player 1’s intention as *cluster* and player 2’s intention as *intersection*. In this game, both players were unable to guess the other player’s intentions.

<p align="center"><img src="https://github.mit.edu/egeozin/Silent-Game/blob/master/images/boards_2.jpg" width="600"></p>

<p align="center"><img src="https://github.mit.edu/egeozin/Silent-Game/blob/master/images/Game_4_confidences.png" width="500"></p>

The figure below shows change in confidence levels from a sample of successful games.

<p align="center"><img src="https://github.mit.edu/egeozin/Silent-Game/blob/master/images/Game_6_7_10_11_confidences.png" width="800"></p>


### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details




