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

- Highest votes to lowest.
- Lowest votes to highest.
- Oldest to newest.
- Newest to oldest (default).

# 5. Vote on Competition
Logged-in users can vote on the competition. You can either vote on one of the competitors. Once the vote is cast on one competitor, it cannot be removed. Also, you can cast your vote on only one of the competitors, not on both of them. It is also real-time, as soon as the vote is cast, it will automatically be displayed to all the users and the counter is incremented. The counter displays the number of votes cast on each competitor.

![Votes](screenshots/Votes.png?raw=true "Votes")

# 6. Delete Competition
Competitions can only be deleted by either of the users who created the competition, or by the admin. Once the competition is deleted, all the uploaded images will be deleted too. As soon as the competition is deleted, it will automatically be removed from all the other users too, without having them refresh the page.

# 7. Realtime Update using Sockets
Sockets are used for real-time communication. Instead of fetching the data from the server after regular intervals, sockets attach listeners to the client-side. Listeners are listening to the events sent from the server. The server will emit the event and the client will listen to that event and respond accordingly. In this project, sockets are used for the following features:

- When competition is created.
- When competition is deleted.
- To increase the counter after vote is casted to the competition.
- Notifications.

# 8. Notifications
When a competition is deleted by the admin, the admin will write the reason for the deletion. Thus, a notification will be sent to the user along with the reason why his competition was removed. By default, notification status is “unread” and they are highlighted. As soon as the user clicks on any of the notifications, that notification will be marked as “read” and it will no longer be highlighted.

![Notifications](screenshots/Notifications.png?raw=true "Notifications")

# 9. Load More Button
When the data in the database increases, it is not feasible to load all the data in a single AJAX request. So a “load more” button is created to solve this problem. For example, 10 records are fetched in the first AJAX request. The next 10 records will be fetched when the “load more” button is clicked, and so on.

![Load-More](screenshots/Load-More.png?raw=true "Load-More")

# 10. Admin Panel
Admin panel is created so you (administrator) can delete any competition you find offensive. The default email and password of admin are:

> email = admin@gmail.com
> password = admin

Tutorial:
https://adnan-tech.com/create-a-picture-competition-website-in-express-js-mevn/
