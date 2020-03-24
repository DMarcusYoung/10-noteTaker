# Note Taker

## Description
Simple Note taking application allowing for writing, saving, reviewing, and deleting notes.

## Technologies
Entire frontend was given, it uses two HTML pages and CSS for basic display, JS on the front end is used for server calls  mainly consisting of changing the HTML page or accessing the saved note data. Backend uses JS, Node, and express. It's used to mainly create api listeners which return or edit the note data.

## Challenges
The biggest challenge was getting the JSON data correctly from the json.db file. The front end required an array, so it took a lot of tweaking to return the data correctly. This is also the first time I modularized the routes which was super weird but makes sense. In the API routes I made a function that did most of the POST and DELETE requests. This shortened the code by about half, but the function requires a callback, took a lot of time and frustration, and is a little overcomplicated.

## Screenshots
![Generated PDF screenshot](https://github.com/DMarcusYoung/08-devProfileGenerator/blob/master/Generated%20PDF%20Screenshot.PNG)
