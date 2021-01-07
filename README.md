# day-planner
A simple calendar app for scheduling your work day.  Add or delete your tasks in the desired time slot and click save.


# Link to live site
[day-planner](https://jodybrzo.github.io/day-planner/index.html)


# Mock-up
[day-planner](assets/images/mock-up.jpg)


## Why I made this project
I made this project because I wanted to use utilize a third-party API.  I chose Moment.js to get the current date and format time. I used Jquery to build out the html page through code and JSON to store the users daily tasks locally. When the page loads it displays time slots 9am-5pm and the user is able to type in their tasks and then same them.

## What I learned
I learned that using a third-party API is not that hard! I was able to navigate through the documentation and figure out what I needed to do.  Overall I had a lot of fun with this project.

## Challenges 
I was unsure where to start with this project so I started out by creating the div's to hold the time, tasks and save button. From there I was able to set the styles that were predefined in the css.  The toughest issue I ran into was getting the click event to work on the save div.  At first I added it to the top of the document.ready function and when that did not work I added it to the bottom of the js file.  I finally realized that I was calling the event before all of the div's were created and moved it right after that code completes.  It worked after I moved it after that code was finished.
