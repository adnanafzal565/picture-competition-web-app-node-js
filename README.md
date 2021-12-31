# Picture Competition WebApp - MEVN Stack

Picture Competition is a mobile responsive real-time web application developed in Node JS and Mongo DB. Its frontend is designed in Bootstrap and Vue JS. You can create competition between 2 people and the others can vote on the person based on looks or skills etc.

# 1. Login and Registration
It uses login authentication using JWT (JsonWebToken). It does not use the browser session due to the following reasons:

Sessions are destroyed once your app is restarted from terminal.
Sessions are not linked with the server, they are stored in browser only.
The benefit of using JWT is that you can always log out a user from your Mongo DB. Just go to the "users" collection and find the specific user. Then empty the "accessToken" field of that user's document.

![Login-and-Registration](screenshots/Login-and-Registration.png?raw=true "Login-and-Registration")

# 2. Create Competitions
Registered users can create competitions between 2 users. You can enter name and upload 1 picture of each competitor. There is no limit in the number of competitions to create, you can create as many as you want. You can view your created competitions on your “My Competitions” page.

As soon as you create a competition, it will automatically be displayed to all the users as well as to the admin in real-time. Users do not have to refresh the page to see new competitions. It uses Socket IO to display data in real-time.

![Create-Competition](screenshots/Create-Competition.png?raw=true "Create-Competition")

# 3. Search
Users can search competitions by the name of competitors. Data is filtered and rendered using Vue JS. There is no need to press the enter key, the data is filtered as soon as the user starts typing in the search box.

![Search-and-Sort](screenshots/Search-and-Sort.png?raw=true "Search-and-Sort")

# 4. Sort
Users can also sort the competitions by any of the following for sorting functions:

* Highest votes to lowest.
* Lowest votes to highest.
* Oldest to newest.
* Newest to oldest (default).

Tutorial:
https://adnan-tech.com/create-a-picture-competition-website-in-express-js-mevn/
