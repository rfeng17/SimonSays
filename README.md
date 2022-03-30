# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Raymond Feng**

Time spent: **2** hours spent in total

glitch project: https://glitch.com/edit/#!/savory-faceted-air

site: https://savory-faceted-air.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added a playMusic() function that plays a short randomized melody using the notes of the game.
- [x] Editted guess(btn) function to re-play clues when guessed incorrectly.

## Video Walkthrough (GIF)

![Win](https://imgur.com/9FGB3f6)
![Lose](https://imgur.com/UpwqnfV)
![Start/Stop](https://imgur.com/2rtdC2u)
![Music Button](https://imgur.com/VTcbw7P)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://www.w3schools.com/html/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

As a programmer, encountering challenges is a fairly common thing to the point where it is part of the coding process. The main challenge was deciding on what additional functions to add that build or enhance the features of the game. It was essential to have the functions working as intended, or else it would create bugs or undesired results. Therefore, the biggest challenge was implementing the logic into the code. The best approach to a function I am not familiar with was to use built-in functions available in javascript. Numerous examples of those functions (ie. setTimeout()) are provided on the internet and I was able to analyze the results that each of them produces. However, most functions can be implemented differently, so I had choices as to what each line of code should be. From time to time, particular functions may bug out and I had to understand where in the code does it malfunction. To fix this, logging results were efficient and beneficial for pinpointing errors that the compiler cannot detect. Other challenges include deciding on how the website/game should look visually. There are sites like w3schools that provide a variety of different CSS references, which helped me achieve the mold of the site to my personal preference.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

For web development, I want to know the long projects generally take to complete. Are there sections in web development where certain groups specialize in different areas? Do professional programmers use references and the internet to search for code implementations? What are the tips and tricks to make a website better? In regards to the program that I completed I would like to know, how can I improve my code’s efficiency? What are the best alternatives to constructing the game and its functions? How can I implement jQuery and other javascript features that can improve my code?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time to work on this project, I would definitely incorporate a difficulty setting. In this feature, players can choose to make the game harder while having access to the normal settings if they wish. The aspect of a difficulty setting allows players to add or remove gameplay elements to a game without having to edit the game code manually. For this setting, I would create a function that lets players add or take away buttons. Along with the choice of gameboard would be speeding up the clues and adding a time limit. Both of those features can combine to bring the game to a more challenging level.


## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Raymond Feng]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
