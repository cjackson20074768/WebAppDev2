# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

- Name: Connor Jackson
- Student ID: 20074768

## Overview.

This application is a project developed with the goal of creating a password
manager in JS as part of Web App Dev 2. It is based on the 'Hacker News App'
from the lab exercises.


## Features

- Add new entries to the list of managed credentials.
- Add additional 'notes' or reminders to each entry, and display them based on a rating of importance.

## ToDo
- Finalise implementation of hashing function (not currently functioning)
- Create DB to store entered credentials
- Salt stored credentials (if time allows)
- HaveIBeenPwned enrichment to see if linked site is part of data breach
- Fix Routing element from labs

## Setup.

- Ensure that [NodeJS](https://nodejs.org/en/download/) is installed.
- Install required packages with `npm install`.
- The web app can then be launched with `npm start` and optionally specifying a port.

## Data Model Design.

The data model used here when adding new credentials to be managed requires 4 main fields.
- Title : The name that will be displayed for this entry
- Link : A link to the desired webpage
- Username : The stored username for this entry
- Password : The password to be used for this entry

An example can be seen below:

~~~
{
    id: 1,
    title: "GitHub",
    link: "https://www.GitHub.com/TheresAFewConors",
    username: "TheresAFewConors",
    rating: 1
},
~~~

## UI Design.

#### Main App Page

![][main]

> Above gif shows adding a new entry to the application.

![][reminders]

> Image above shows adding additional reminders to the 'PayPal' entry, and increasing importance of entry.


## Routing.

- /posts/:id (public)- displays additional notes posted to an entry.


## Storybook.

The storybook has been heavily drawn from the HackerApp lab work.


![][stories]

## Independent learning.

- [JS Hashing](https://www.npmjs.com/package/crypto-js)


[main]: ./imgs/mainpage.gif
[reminders]: ./imgs/reminders.gif
[stories]: ./imgs/stories.png
