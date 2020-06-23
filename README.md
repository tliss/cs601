Taylor Liss  
CS601 Web Application Development  
Summer 1, 2020  

## Introduction

This README.md file documents the changes and additions done to personal website throughout my CS601 course.

## Project History

### Changes for Assignment 2

* Created the README.md file
* Updated font to use Roboto and Rubik from Google Fonts
* Added new HTML semantic elements including `<main>`, `<section>`, and `<footer>`
* Implemented flexbox to have footer "stick" to the bottom of the page
* Added a new navbar and special `anchor` tags to link throughout the page correctly without section titles being hidden (see note in CSS)
* Added new buttons linking to external sites and added icons from Font Awesome
* `<img>` now scale based on browser window size
* Moved "contents" section into dropdown menu inside nav bar
* Used flexbox to horizontally align `<img>` and `<figcaption>`
* Centered audio and video
* Increased margins on content for a more pleasant reading experience
* Added box-shadows to `<img>`
* Added stylized download button for audio and video
* Added styling to table of favorite boardgames
* Created new pages to host external Links, Contact info, and Resume
* Used CSS Grid to add buttons on Links page
* Created a new stylesheet for printing. Stylesheet has the following features:
    * Uses a more universal font
    * Removes navbar
    * Makes font black and removes background colors
    * Makes images smaller
    * Makes images grayscale (note, this causes a little slowdown when you click "print" - just be patient!)
    * Expands margins
    * Removes video and audio players
    * Removes download buttons
    * On the "links" page, printing will show actual URLs instead of buttons!
    * On the "resume" page, printing will show resume, instead of the download button!
* Please note - I have a "print" button that is currently deactivated as we are not permitted to use JavaScript for this assignment as of yet. Will activate it in a later module!

### Changes after Assignment 2:

* Added a "My Projects" page that uses flexbox to highlight a few of the personal projects I have done in the past.
* Added a "Gallery" page that uses Vue to show interesting photos about myself
* Added a "Guestbook" page that uses Vue, JavaScript, and AJAX to record comments in a JSON file.
* Converted the whole site to use Node.js with Express and Express routing.
* Hosted the site on a Digital Ocean virtual machine to make it available to the internet. Can be accessed at http://danktop.us/