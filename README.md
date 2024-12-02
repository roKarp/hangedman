# Hangedman with React
![](https://atlus.com/persona5/img/characters/arcana_munehisa.png)
## Outline
The main goal is to create a simple hangedman game with React and Typescript.

## Guide

The application is easy and simple to use for any user. This is a simple guide on how you can get it to deploy and function.

## Prerequisites for localhost deployment
 - node
 - npm
## Setup
### Step 1 
First clone the repo to your device and open the application main folder.
### Step 2. 
Install all the needed application dependencies, which are located in the package.json file.
 ```
npm install
 ```
### Step 3.
To start up the server
 ```
npm run dev
 ```

### Step 4.
Access the application in the given localhost url address

And now you should be done with the Setup. Next up is how the game functions.

## Rules

The game functions similarly to a traditional hangman's game. You are given a random word which you need to find all the letters of that word, in a certain amount of tries. Each successful guess shows all the letters in that word and each unsuccessful guess adds one more piece to the hanged man. You can either use your own keyboard to guess the letters or click on the web pages keyboard. You can't type the same letters again, which are greyed out on the page.

After you either win or lose, you can simply start another game by pressing enter or refreshing the page. Hope you have fun :D


## To do

I might still want to add some side features to it (etc. more variety of words, different language words). Also deploying the app in a another environment so you can try the game out without cloning the repo.
