# **Saber Scroll**

![landing-page-photo](./documentation/saber%20scroll%20landing%20page%20(2).png)

Wager your Jedi skills with the retro-designed game Saber Scroll. Developed by Hackathon Team **Burgundy Lightsaber** during the May 2023 Code Institute Hackathon.

Live deployment link can be found [here](https://amylour.github.io/star_wars_hackathon/).

# Table of Contents

1. [Project Goals](#project-goals "ProjectGoals")
2. [User Experience](#user-experience "User Experience")
   + [Target Audience](#target-audience "Target Audience")
   + [User Requirements and Expectations](#user-requirements-and-expectations "User Requirements and Expections")
   + [User Stories](#user-stories "User Stories")
3. [Design](#design "Design") 
   + [Design Choices](#design-choices "Design Choices")
   + [Colour](#colour "Colour")
   + [Fonts](#fonts "Fonts")
   + [Music & Sounds](#music--sounds "Music & Sounds")
   + [Wireframes](#wireframes "Wireframes")
4. [Technologies, Languages & Programs Used](#technologies-languages--programs-used)
5. [Features](#features "Features")
   + [Existing Features](#existing-features "Existing Features")
      + [Start Screen](#start-screen "Start Screen")
      + [Game Screen](#game-screen "Game Screen")
      + [End Screen](#end-screen "End Screen")
   + [Future Features](#future-features "Future Features")
6. [Testing](#testing "Testing")
   + [Bugs](#bugs "Bugs")
   + [Validator Testing](#validator-testing "Validator Testing") 
7. [Deployment, Development & Version Control](#deployment-development--version-control)
8. [Credits](#credits "Credits")


## **Project Goals**

Based on the Code Institute Hackathon May 2023 Theme of "May the 4th be with you", create a Star Wars-themed browser-platform game. The game should be fully functioning with as little bugs as possible, and playable by users of all ages. 


## **User Experience**


This game offers a level-based gaming experience. Players can progress onto the next level in the Star Wars universe by accumulating a set amount of points for each level. Several things can be expected from the game:


* **Star Wars Pop-Culture references:** Throughout the game, various pop-culture references can be understood by the user if they are a Star Wars fans. The use of lightsabers, Clones, Darth Vader helmets as sprites, as well as the beautifully made retro backgrounds are a few examples of these references.

* **Controls:** The user is able to use the arrow keypad to move their lightsaber sprite and make smart, calculated decisions about where to move around the environment.

* **Progressive Challenge:** The player is brought between 3 levels, beginning with level 1, an easier, standard level, then to level 2, more moderate and finally to the 3rd level, which is significantly harder than the previous: thus the user is put under pressure and is challenged to be clever about their strategy.

* **Retro Environment:** Our team specifically chose to develop graphic designs based around a retro-themed environment. All the sprites, backgrounds, items, health containers and general features have been made in an attempt to give a "retro" feel to the application.

* **Immersive Sound:** Original retro audio has been caringly added to the gaming environment to match the retro environment and immerse the player into their gaming experience.

<hr>

## **Target Audience**

Our target audience is a range of absolutely any person that can use a computer, thus any user from a young age to senior.


## **User Stories**
  

#### **First time user**

* As a **first-time user**, I want **to see a landing page that features memorable Star Wars references** so that I **immediately feel immersed in the Star Wars universe**.

* As a **first-time user**, I want **the landing page to be designed to load quickly and smoothly and to include interactive elements** so that I can **see the website is working to prepare the game for me to enjoy**.

* As a **first-time user**, I want **to see the rules of the game** so that **I am clear with what I am doing**.

* As a **first-time user**, I want **to be able to control the audio playing** so that I can **be in control of the game**.

#### **Game Play**

* As a **first-time user**, I want **to be able to control my character's movement using the arrow keys**.

* As a **first-time user**, I want **to progress through the game accumulating the highest score possible with increasing difficulty** so that I **feel challenged and engaged**.

* As a **first-time user**, I want **to have a set number of lives depicted by Yoda icons, which depreciate each time I make a mistake**.


* As a **returning user**, I want **the game play to have a high level of replayability**.


#### **Developer**

* As a **developer**, I want **to ensure that the game's graphics and sound effects are immersive and engaging**.


## **Design**

### **Design Choices**

#### **_Components_**

The components of this project were inspired by classic pixel art and were painted in Procreate. The artwork was resized to be appropriate for the size of the game playing area and as to not present too much of a challenge to the player.

A favicon of the game title is used in the browser tab.<br>
![favicon](assets/media/favicon-32x32.png)<br>
_Favicon_
  

![screenshot of lightsabers](documentation/lightsabers.png)<br>
_Lightsabers_
  
A selection of lightsabers were produced with the intention of producing a feature of allowing the user to select their favourite one to play with. In the interests of project completion to MVP level, and the short time frame (5 days), this feature will be included in a future version of the game.

<br>  

![screenshot baddies](documentation/baddies.png)<br>
_Baddies_
  
A selection of characters, who align with the Dark side, were created in pixel sprite form. The Clone Trooper's helmet provides a points option for the player if they successfully navigate their way through the dangers. 10 points are awarded for each succesful contact made.

We are excited to include the rest of these characters with the future development of the game.

<br>

![screenshot snacks](documentation/snacks.png)<br>
_Snacks & Extra Lives_

A future feature that we discussed, will be to include 'snacks' that will provide power-ups to the player, to help them in their journey.

<br>

![screenshot lives](documentation/lives.png)<br>
_Yoda Lives_

Yoda heads represent the lives at stake if the player is confronted by Darth Vader or a Tie Fighter. Every time Darth touches them, the player loses a life. Lose three lives, lose the game!

<br>

#### **_Level Backgrounds_**

The backgrounds for this project were painted in Procreate. They have been inspired by classic pixel art and the Game Boy Advance game [Star Wars: Episode III - Revenge of the Sith](https://en.wikipedia.org/wiki/Star_Wars:_Episode_III_%E2%80%93_Revenge_of_the_Sith_(video_game)). It was imporatnt to us to create original assets through graphics and sounds to help us to stand out, and to create an engaging and considered user experience.

![level 1 - Death Star](documentation/game-bg.png)<br>
_Level 1 - Death Star_
  

![level 2 - Endor](documentation/endor.png)<br>
_Level 2 - Endor_
  

![level 3 - Mustafar](documentation/mustafar_bg.png)<br>
_Level 3 - Mustafar_

### **Colour**

Colour has been chosen level by level to create an immersive player experience. Traditional C3PO gold is used for the buttons, timer, game area frame and points counter. Bright yellow is used with a chromatic aberration effect and Star Wars font for the main title.

![main title](documentation/sw_title.png)<br>
_Main title_

A starry pixel background has been created with expansive black spaces to make the user feel like they are in space.

<details>
<summary>Click arrow for starry space background experience</summary>

![Starry space background](documentation/sw_bg_big.png)
</details>

<br>

### **Fonts**

The fonts that we used were 'Noto Sans Display' from [Google Fonts](https://www.googlefonts.com) for the body text and 'SF Distant Galaxy' from [DaFont](https://www.dafont.com/sf-distant-galaxy.font) for the title.

### **Music & Sounds**

The music for the game was created using a combination of Rytmik Studio and Rytmik Ultimate. As the art was inspired by a Gameboy Advanced game, it made a lot of sense to keep the retro theme for the music too. So a chiptune style was chosen to match it. We added more to the soundtrack when more levels were created.

The full OST can be found [here](https://soundcloud.com/welshynatorjones/sets/saber-scroll-ost).
  

### **Wireframes**
Some basic wireframes were created so the team could be on the same page when creating the layout during coding sessions.

### **Landing page - Landscape**
![Base Page Landscape](documentation/base-screen.png)

### **In Game Screen**
![In Game](documentation/in-game.png)

### **How To Play Screen**
![How To Play](documentation/how-to-play.png)

### **Game Over Screen**
![Game Over](documentation/game-over.png)

<hr>

## **Technologies, Languages & Programs Used** 

- HTML, CSS + JavaScript 

- Procreate - used to create the Star Wars artwork and edit images .
- Rytmik Studio & Ultimate - used to create the music.
- GitHub - used to save and store all files for this website  .
- Git - used for version control.
- Google Fonts - fonts were imported from here.
- Simple Image Resizer - to resize all artwork.
- Tiny PNG - to compress images .
- Google and OperaGX Dev Tools - to debug and for testing responsiveness. 
- Google Lighthouse - for auditing the website.
- W3C Validator - for validating the HTML and CSS code .
- JSHint - for validating JavaScript.

<hr>

## **Features**

This game includes three pages (levels), each with a:
 + Start Modal
 + Game Screen
 + End Modal
 + Win Modal

### **Existing Features**

### Start Modal

This is the first page that appears on the top of the screen. The Saber Scroll image is added and then the welcome message with the rules of this Game (note the rules change for each level). Instructions for the user to play using the keyboard arrows are shown. There is a button that enables a user to start playing the game. 

- Level 1 start modal screen
![Level 1 start modal screen](readme-assets/start-modal-lv1-fullscreen.png)
- [Level 2 start modal screen](https://github.com/amylour/star_wars_hackathon/blob/main/readme-assets/start-modal-lv2-fullscreen.png)
- [Final level start modal screen](https://github.com/amylour/star_wars_hackathon/blob/main/readme-assets/start-modal-final-level-fullscreen.png)

### Game Screen

When the user wants to play the game using the play button the game screen reveals. On the top of the screen the Saber Scroll image is present, with a timer on the right and a live counter in the left. Underneath the game container, there is a on/off button for audio.
This page also includes footer. On the left side of the page, copyright deatils are present and on the right side, links to developer's GitHub page are added.

- Level 1 game screen
![Level 1 game screen](readme-assets/level-one-gameplay-fullscreen.png)
- [Level 2 game screen](https://github.com/amylour/star_wars_hackathon/blob/main/readme-assets/level-two-gameplay-fullscreen.png)
- [Final level game screen](https://github.com/amylour/star_wars_hackathon/blob/main/readme-assets/final-level-gameplay-fullscreen.png)

### End Modal

This end screen reveals when the player has lost all their lives and the game is over. In this screen a button is added that if the user wanted to play the game again they can start playing again simply by clicking the try again button.

- End Modal 

![End Modal](readme-assets/game-over-modal.png) 

### Win Modal

This win screen reveals when the game is over. In this screen a button is added and it's functionailty depends on the level. For level one and two, the user can click the button to progress to the next level. For level three the button allows the user to restart the game from the beginning.

- Level 1 win modal screen
![Win Modal](readme-assets/level-one-win-modal-fullscreen.png)
- [Level 2 win modal screen](https://github.com/amylour/star_wars_hackathon/blob/main/readme-assets/level-two-win-modal-fullscreen.png)
- [Final level win modal screen](https://github.com/amylour/star_wars_hackathon/blob/main/readme-assets/final-level-win-modal-fullscreen.png)


### **Future Features**

There are a few features that we would like to add in future to reach some of the user stories. These featues are:

- Local multiplayer, both 'hot seat' and 'co-op'.
- Attach some retro sound effects to vairous parts of the game.
- Lightsaber selection at the begining of the game.
- A more responsive site as well as touch controls so mobile/tablet users can play the game.
- More levels! More Art! More Music! More Collectables! More Enemies!

## **Testing**

### **Manual Testing**

Manual testing following the User Stories was carried out throughout the development of the project, with the final results available below.

* As a **user**, I want **to see a landing page that features memorable Star Wars references** so that I **immediately feel immersed in the Star Wars universe**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 1 | User is exposed to Star Wars fonts, colours and artwork upon viewing the landing page | PASS |
  

* As a **user**, I want **the landing page to be designed to load quickly and smoothly and to include interactive elements** so that I can **see the website is working to prepare the game for me to enjoy**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 2 | Start Modal appears onload for user with an interactive 'Play' button | PASS |
  

* As a **user**, I want **to see the rules of the game** so that **I am clear with what I am doing**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 3 | Start modal displays rules and instructions to the user on how to play, component images are used to represent the in game items | PASS |
  

* As a **user**, I want **to be able to control the audio playing** so that I can **be in control of the game**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 4 | The user can control the muting/unmuting of the music using a labelled slider button | PASS |
  

* As a **user**, I want **to be able to control my character's movement using the arrow keys**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 5 | The user can control the movement of the lightsaber using their keyboard arrow keys | PASS |
  

* As a **user**, I want **to progress through the game accumulating the highest score possible with increasing difficulty** so that I **feel challenged and engaged**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 6 | User can identify their time taken and points scored in each level | PASS |
  

* As a **user**, I want **to have a set number of lives depicted by Yoda icons, which depreciate each time I make a mistake**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 7 | Yoda lives icons are clearly displayed for the user with immediate removal of one should they touch Darth Vader or a Tie Fighter | PASS |


* As a **user**, I want **the game play to have a high level of replayability**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 8 | The user can aim to beat their previous play sessions using the timer for each level and by trying to avoid the 'Try again' modal | PASS |
  

* As a **developer**, I want **to ensure that the game's graphics and sound effects are immersive and engaging**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 9 | The game displays engaging content related to Star Wars | PASS |







## **Bugs**

### **Fixed bugs**

To find a list of fixed bugs that were mended during development, please click [here](https://github.com/amylour/star_wars_hackathon/pulls?q=is%3Apr+is%3Aclosed+label%3Abug).

### **Remaining bugs**

* Depending on where the lightsaber sprite + vader sprite spawn, if they by chance spawn in the exact same spot, the gameOver() function will be called until they move away, creating a pseudo-loop.

* The Start button when pressed continuously speeds up the sprite and player movement.

* After the mute/unmute button is clicked, the user can control the slider's movement using the spacebar. 


## **Validator Testing**

### **HTML Validator**

The [W3C Markup Validation Service](https://validator.w3.org/) for the HTML code was passed in as a URL and returned no errors.

![html-validator-results](./documentation/validation_results/HTML%20validation%20results.png)

### **CSS Validator**

The [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) for the CSS code was passed in as source code and returned no errors.

![css-validator-results](./documentation/validation_results/CSS%20validator%20results.png)

### **JSHint**

The [JSHint Validation Service](https://jshint.com/) for the JavaScript code was passed in as source code and returned no errors.


## **Deployment, Development & Version Control**

The development environment used for this project was GitPod.

Each software developer on the team created their own individual branch divergent from main from the get-go and have communicated via Slack to collaborate, pitch ideas, fix bugs and talk about relevant Pull Requests. Regular commits and pushes to Github have been employed to be able to track and trace the development process of the web application.

For local deployments instructions shall be written below, along with instructions with deployment to GitHub Pages, the hosting service used to deploy this particular website.

### **Local Deployment**

This repository can be cloned and run locally with the following steps:

* Login to GitHub.
* Select repository named: amylour/star_wars_hackathon.
* Click code toggle button and copy the url (i.e., https://amylour.github.io/star_wars_hackathon/).
* In your IDE, open terminal and run the git clone command (i.e., git clone https://amylour.github.io/star_wars_hackathon/). The repository will now be cloned in your workspace.

### **Deployment to GitHub**

The live version of the project is deployed at GitHub pages.

The procedure for deployment followed the "Creating your site" steps provided in GitHub Docs.

* Log into Github.
* Select desired GitHub Repository to be deployed live.
* Underneath the repository name, click the “Settings” option.
* In the sub-section list on the left, under “Code and automation”, click “Pages”.
* Within the ”Source” section choose ”main” as Branch and root as folder and click ”Save”.
* The page refreshes and a website shall then deploy via a link.
* The following is the live link deployed: https://amylour.github.io/star_wars_hackathon/


## **Credits**

### **Media**

As mentioned in the Design section, all assets, graphic and audio, were created as original materials. Inspiration from the referenced Star Wars Game Boy Advanced game was researched using Google Images.

### **Acknowledgments**

This project was created in collaboration by [Burgundy Lightsaber](https://hackathon.codeinstitute.net/teams/314/): Amy, Chris, Jacob, Jamie, Keiron, Saleha, Shaun



