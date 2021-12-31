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

![Create-Competition](screenshots/Create-Competition.png?raw=true "Create Competition")

# 3. Search
Users can search competitions by the name of competitors. Data is filtered and rendered using Vue JS. There is no need to press the enter key, the data is filtered as soon as the user starts typing in the search box.

![Search-and-Sort](screenshots/Search-and-Sort.png?raw=true "Search and Sort")

# 4. Sort
Users can also sort the competitions by any of the following for sorting functions:

* Highest votes to lowest.
* Lowest votes to highest.
* Oldest to newest.
* Newest to oldest (default).

# 5. Vote on Competition
Logged-in users can vote on the competition. You can either vote on one of the competitors. Once the vote is cast on one competitor, it cannot be removed. Also, you can cast your vote on only one of the competitors, not on both of them. It is also real-time, as soon as the vote is cast, it will automatically be displayed to all the users and the counter is incremented. The counter displays the number of votes cast on each competitor.

![Votes](screenshots/Votes.png?raw=true "Votes")

# 6. Delete Competition
Competitions can only be deleted by either of the users who created the competition, or by the admin. Once the competition is deleted, all the uploaded images will be deleted too. As soon as the competition is deleted, it will automatically be removed from all the other users too, without having them refresh the page.

# 7. Realtime Update using Sockets
Sockets are used for real-time communication. Instead of fetching the data from the server after regular intervals, sockets attach listeners to the client-side. Listeners are listening to the events sent from the server. The server will emit the event and the client will listen to that event and respond accordingly. In this project, sockets are used for the following features:

* When competition is created.
* When competition is deleted.
* To increase the counter after vote is casted to the competition.
* Notifications.

# 8. Notifications
When a competition is deleted by the admin, the admin will write the reason for the deletion. Thus, a notification will be sent to the user along with the reason why his competition was removed. By default, notification status is “unread” and they are highlighted. As soon as the user clicks on any of the notifications, that notification will be marked as “read” and it will no longer be highlighted.

![Notifications](screenshots/Notifications.png?raw=true "Notifications")

# 9. Load More Button
When the data in the database increases, it is not feasible to load all the data in a single AJAX request. So a “load more” button is created to solve this problem. For example, 10 records are fetched in the first AJAX request. The next 10 records will be fetched when the “load more” button is clicked, and so on.

![Load-More](screenshots/Load-More.png?raw=true "Load More")

# 10. Admin Panel
Admin panel is created so you (administrator) can delete any competition you find offensive. The default email and password of admin are:

> email = admin@gmail.com
> password = admin

# 11. Manage Competitions
Admin can delete competitions that he finds offensive. However, the admin must give the reason why that competition is deleted. A notification will be sent to the user who created that competition and he will be able to view it from the top navigation bar.

# 12. Reset Password
Now you will be able to reset your password if you ever forgot. You just need to enter your email address and an email will be sent to you with a link to reset the password. We are using the nodemailer module to send an email.

![Forgot-Password](screenshots/Forgot-Password.png?raw=true "Forgot Password")
![Reset-Password](screenshots/Reset-Password.png?raw=true "Reset Password")

# 13. Email Verification
When a new user registers, we are sending a verification email to the user’s entered email address. The user will not be able to log in until he verifies his email address. When a user clicks the link on his email address, he will receive a message that says that his account is verified. Then he will be able to log in successfully.

![Email-Verification](screenshots/Email-Verification.png?raw=true "Email Verification")

# 14. SMTP Configurations from Admin Panel
To send an email, you will need an SMTP server. Every SMTP server requires some configurations to set up that include, host, port, email, and password. You can write these values directly hard coded in your code, but to update these values in the future, you have to find these values in the code and update them.

In this project, you can set these configurations directly from the admin panel. Once the values are set, new emails will be sent using the new configurations.

![SMTP-configurations-from-admin-panel](screenshots/SMTP-configurations-from-admin-panel.png?raw=true "SMTP configurations from admin panel")

# 15. Adult Image Validation
This is a must-have feature if you are creating a website that allows users to upload pictures and they will be seen to the world. Anyone can upload an image that contains adult content, and it will not be good for your business. So when the user is uploading pictures while creating competition, the system will automatically check if the image is safe to upload.

If the image is an adult image, then an error will be shown to the user and it will not be uploaded.

# 16. Admin Panel Stats
Admin can see total users, total competitions, and total votes cast so far. They are also real-time, so when a new user is registered, or new competition is created, or event a new vote is a cast, it will automatically be incremented here.

Also, when competition is deleted, the number will automatically get decremented as well, without having the admin refresh the page.

![Admin-Panel-Stats](screenshots/Admin-Panel-Stats.png?raw=true "Admin Panel Stats")

# 17. Real-time Comments
Users can comment on each competition. And they are also real-time as well. Once a new comment is added, it will immediately be displayed to all the other users as well. They do not have to refresh the page to see new comments.

![Real-time-Comments](screenshots/Real-time-Comments.png?raw=true "Realtime Comments")

# 18. User Profile
User can now update their name and profile picture. We are using fs (file system) module to upload the picture. User can also add their bio, date of birth, country, and social media links. Media links includes facebook, instagram, google plus, twitter and linkedIn.

User can also change their account password. In order to change the password, the user must enter the current password. The new password should be entered twice for confirmation.

![User-Profile](screenshots/User-Profile.png?raw=true "User Profile")

# 19. Free Customer Support
This is not a feature of the project, but it is a free service provided for the premium version only. That means if you find any difficulty in installing or configuring the project, we will help you install it. Also, if you encounter any error or a bug in the released version, then it can be fixed too.

Tutorial:
https://adnan-tech.com/create-a-picture-competition-website-in-express-js-mevn/
