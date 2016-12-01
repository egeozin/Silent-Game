Conway's Game of Life Interpretation for Software Studio, 2016.
Ege Ozgirin

Initially, I have started writing functions for the game logic. 
I created a Game object in "game.js" and implemented my functions within it. 
I created cells array and neighbors array that contain
values, and functions that manipulate them accordingly.

Inspired by Micheal Bostock's implementation, I have decided to use "cells" array that comprises of binary integers representing whether a cell is alive("1") or dead("0").
I would have integrate 'cells' and 'neighbors' in one object. But in the end I have decided to keep them separate as neigbors array is used only in Game model.
I believe this is still a simple but effective representation that could establish a clean interface with the view-controller file. 

As the view and controller was defined in the same file in gradebook example, I also haven't separated them in my "gamevis.js" file.
In "gamevis.js", I selected canvas element that I have defined in my html to add elements into it. I have created four buttons for game functionality. 
These are "Play", "Pause", "Randomize" and "Clean". User can create your own starting configuration by clicking on the canvas above in Pause or Clean mode. 
Randomize initiates a random configuration.

I implemented a subscriber pattern that draws/updates pixels in the canvas whenever relevant functions are called in "game.js".

I used functionals in the Game object for copying new array(map() in game.update), for cleaning into 'O's(map() in game.clean), for extracting alive cells(reduce() in arbitrary).
I have defined my own iteration abstraction: 'arrayFromTo' in order to populate an array with custom functions.

I have decided to enable editing during the 'Pause' mode in order to let the user to intervene during the game.


