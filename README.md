# Picture Competition WebApp - MEVN Stack

Picture Competition is a mobile responsive real-time web application developed in Node JS and Mongo DB. Its frontend is designed in Bootstrap and Vue JS. You can create competition between 2 people and the others can vote on the person based on looks or skills etc.

1. Login and Registration
It uses login authentication using JWT (JsonWebToken). It does not use the browser session due to the following reasons:

Sessions are destroyed once your app is restarted from terminal.
Sessions are not linked with the server, they are stored in browser only.
The benefit of using JWT is that you can always log out a user from your Mongo DB. Just go to the "users" collection and find the specific user. Then empty the "accessToken" field of that user's document.

![Login-and-Registration](screenshots/Login-and-Registration.png?raw=true "Login-and-Registration")

Tutorial:
https://adnan-tech.com/create-a-picture-competition-website-in-express-js-mevn/
