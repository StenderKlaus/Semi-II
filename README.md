<H1 align ="center" > SEMICOLONS_BLOG  </h1>
<h4  align ="center"> 
Fullstack open source blogging application made with MongoDB, Express, React & Nodejs (MERN) </h4>

<h5> 
This Blog / Self-Learning Platform helps people who are interested in learning WEB DEVELOPMENT by themselves to take the first step in this exciting field.</h5>


<h5> 
For self-learners, we provided under the Cheat-Sheets section of the website a lot of materials that would save them a lot of time by avoiding the reading of long documentation in <a href="https://www.w3schools.com/" target="_blank">W3School</a> and <a href="https://developer.mozilla.org/en-US/" target="_blank">MDN</a> for each HTML Tag or CSS Styling Element and JavaScript commands.

But instead browsing the extensive list of the most used tags and commands through this section and trying them for themselves through the integration of individual Sandboxes for each HTML Tag, CSS Styling Elements or JS. Command.</h5>

<h5>
We filled the Story section of the Live Version of this Blog / Platform with multiple Posts that contain tips and suggestions that will help guide Future Web Developers on their journey of Self-Learning.
and also with useful links to other resources that we used and found to be very helpful ourselves.</h5>

<br>

<h5>
This Blog / Learning-Platform was built by a Team of Developers using Modern Agile Methods and Tools. More information about the authors is provided in a later section of the readme file. or Visit the Following Link to see our Project Presentation </h5>

[Presentation ](https://www.canva.com/design/DAFmV9hxfrA/Q6aLlE0pw4T5boDh9KU1kg/view?utm_content=DAFmV9hxfrA&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel)

<br>

<h5> A Live Version of this Blog /  Self-Learning Platform can be found under:</h5


[Live Website](https://semifrontend.vercel.app/)


<br>

<h3>Table of Contents:</h3>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [📸 Screenshots](#screenshots)
  * [Authors](#authors)
  * [License](#license)


## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your preferred code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the Frontend on one terminal and the Backend on the other terminal)

In the first terminal

```
$ cd Frontend
$ npm install (to install frontend-side dependencies)
$ npm run  start (to start the frontend)
$ or
$ nodemon start (to start the frontend)
```

In the second terminal

- cd Backend and Set environment variables in .env under in the main Backend Folder ./
- Create your mongoDB connection url, which you'll use as your MONGO_URI
- Supply the following credentials

```
#  ---  .env  ---

NODE_ENV = development
PORT =5000
URI =http://localhost:3000
MONGO_URI =
JWT_SECRET_KEY =
JWT_EXPIRE = 60m
RESET_PASSWORD_EXPIRE = 3600000 


# Cloudinary


CLOUD_NAME= your Cloudinary NAME
API_KEY=  your Cloudinary API Key
API_SECRET=  your Cloudinary API Secret

# Nodemailer

SMTP_HOST =smtp.gmail.com
SMTP_PORT =587
EMAIL_USERNAME = example@gmail.com
EMAIL_PASS = your_password
```

# --- Terminal ---

$ npm install (to install backend-side dependencies)
$ npm start (to start the backend)
$ or
$ nodemon start (to start the backend)
```

##  Key Features

- User registration and login
- Authentication using JWT Tokens
- CRUD operations (Story create, read, update and delete)
- Upload user Profile Images and story Images to the Cloudinary Server
- Commenting on the story and Liking of the Comments
- Liking  stories and adding stories to the Reading list
- The Ability to add relevant Categories when adding a new Story 
- Browse Stories Based on story Categories 
- Story searching Based on Story Title and pagination
- An add to Favorites or to Reading List of bookmarked stories
- Skeleton loading effect / Animation
- Responsive Design
- and many other features.

<br/>

##   Coming Features (currently in Development)

- the Edit and Delete of own Comments
- the ability to sort the stories by: Date, Likes and average read-time
- limiting the size of the uploaded Photos to cloudinary servers
- Administrators Dashboard were admins can see all posts and are authorized to delete inappropriate or unrelated and non-compliant (to the purpose of this blogs) Stories and Comments,
- A page where an Author can see all his stories and Previous Activity on the Blog and Manage them
- Adding other Cheat Sheets for other Web Development tools like React, MongooDB, SQL ... 

<br/>

##  Technologies used

This project was created using the following technologies.

####  Frontend 

- [React js](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS) - For User Interface
- [CK-Editor](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html) - Rich Text Editor 
- [uuid](https://www.npmjs.com/package/uuid) - For random id generator
- [React icons](https://react-icons.github.io/react-icons/) -
 Small library that helps you add icons  to your react apps.
 - [React Select](https://www.npmjs.com/package/react-select) -
 an NPM Package that helps you select from an option input-Field in your react apps.

####  Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests.
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript.
- [express-async-handler](https://www.npmjs.com/package/express-async-handler) - Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - For data encryption.
- [Cloudinary](https://https://cloudinary.com/about) - a Cloud media management For the upload of User Profile Images and Story Images.
- [Nodemailer](https://nodemailer.com/about/) - Send e-mails from Node.js.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables.
- [multer](https://www.npmjs.com/package/multer) - Node.js middleware for uploading files. 
- [slugify](https://www.npmjs.com/package/slugify) - For encoding titles into a URL-friendly format.
- [cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware


####  Database 

 - [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.
 
 ##  Screenshots 

 <h5>To take a look & have a better idea of how everything look like on our Blog go to the screenshots Folder in the Root of this Repository.  </h5>


## Authors


<h5  align ="center">Lea Prem<h5>


<h6>Styling & animation<h6>

- Github: [Lea Prem](https://github.com/Anyanka17)

- Linkedin: [Lea Prem](https://www.linkedin.com/me?trk=p_mwlite_profile_self-secondary_nav)

- Email: [Lea Prem](mailto:Prem.produktion@gmail.com)


<h5  align ="center">George Beyrouti<h5>

<h6>Development of Front /Back-end functionality<h6>


- Portfolio: [George Beyrouti](https://react-portfolio-george-beyrouti.vercel.app/)

- Github: [George-Beyrouti](https://github.com/George-Beyrouti)

- Linkedin: [@George-Beyrouti](https://de.linkedin.com/in/george-beyrouti)

- Email: [georges.beyrouti@gmail.com](mailto:georges.beyrouti@gmail.com)


<h5  align ="center">Marvin Hampe<h5>

<h6> Cheat-Sheets section of the website <h6>

- Github: [Marvin Hampe](https://github.com/MarvinHampe)


- Email: [Marvin Hampe](mailto:viewsfamily6@gmail.com)


<h5  align ="center">Klaus Stender<h5>

<h6>Development of Front /Back-end functionality<h6>

- Portfolio: [StenderKlaus](https://react-portfolio-ii.vercel.app/)

- Github: [StenderKlaus](https://github.com/StenderKlaus)

- Linkedin: [StenderKlaus](https://www.linkedin.com/in/klaus-stender-7ba879266/)

- Email: [stender.klaus@yahoo.de](mailto:stender.klaus@yahoo.de)




<br>

## License 

MIT License

Copyright (c) 2023 Lea Prem, George Beyrouti, Marvin Hampe, Klaus Stender.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.