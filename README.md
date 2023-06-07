<H1 align ="center" > SEMICOLONS_BLOG  </h1>
<h3  align ="center"> 
Fullstack open source blogging application made with MongoDB, Express, React & Nodejs (MERN) </h3>

<h5> 
This Blog / Self-Learning Platform helps people who are interested in learning WEB DEVELOPMENT by themselves to take the first step in this exciting field.</h5>


<h5> 
For self-learners, we provided under the Cheat-Sheets section of the website a lot of materials that would save them a lot of time by avoiding the reading of long documentation in <a href="https://www.w3schools.com/" target="_blank">W3School</a> and <a href="https://developer.mozilla.org/en-US/" target="_blank">MDN</a> for each HTML Tag or CSS Styling Element and JavaScript commands but instead browsing the extensive list of the most used tags and commands through this section and trying them for themselves through the integration of individual Sandboxes for each HTML Tag, CSS Styling Elements or JS. Command.</h5>

<h5>
We filled the Story section of the Live Version of this Blog / Platform with multiple Posts that contain tips and suggestions that will help guide Future Web Developers on their journey of Self-Learning.
and also with useful links to other resources that we used and found to be very helpful ourselves.</h5>

<h5>
This Blog / Learning-Platform was built by a Team of Developers using Modern Agile Methods and Tools. More information about the authors is provided in a later section of the readme file.</h5>


A Live Version of this Blog /  Self-Learning Platform can be found under:

<a>
HERE will be the live version LINK
</a>



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

- cd Backend and Set environment variables in config.env under ./config
- Create your mongoDB connection url, which you'll use as your MONGO_URI
- Supply the following credentials

```
#  ---  Config.env  ---

NODE_ENV = development
PORT =5000
URI =http://localhost:3000
MONGO_URI =
JWT_SECRET_KEY =
JWT_EXPIRE = 60m
RESET_PASSWORD_EXPIRE = 3600000 


# Cloudinary

cloudinary.config({ 
CLOUD_NAME: your Cloudinary NAME
API_KEY:  your Cloudinary API Key
API_SECRET:  your Cloudinary API Secret
});

# Nodemailer

SMTP_HOST =smtp.gmail.com
SMTP_PORT =587
EMAIL_USERNAME = example@gmail.com
EMAIL_PASS = your_password
```
Set environment variables in .env under in the main Backend Folder ./

                      #  ---  .env  ---



#Cloudinary 

CLOUD_NAME: your Cloudinary NAME
API_KEY:  your Cloudinary API Key
API_SECRET:  your Cloudinary API Secret



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
- Upload user Profile Images and story Images  to the Cloudinary Server
- Commenting on the story and Liking of the Comments
- Liking  stories and adding stories  to the Reading list
- the Ability to add Relevant Categories When adding a new Story 
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

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS.
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
 

![1](https://user-images.githubusercontent.com/111676859/226197211-8abc5de5-7659-4811-b28a-ef885de64267.png)
---- -
![2](https://user-images.githubusercontent.com/111676859/226197288-1f0cf951-dd30-464f-b70a-10c449fe33b4.png)
--- - 
![3](https://user-images.githubusercontent.com/111676859/226197295-e9525dd5-1346-4951-a1c8-d5620166d7aa.png)
--- - 
![4](https://user-images.githubusercontent.com/111676859/226197298-ca0f5b6e-f523-4040-98a8-b92a17bbe22e.png)
--- - 
![5](https://user-images.githubusercontent.com/111676859/226197303-5d8a1a39-07f7-409f-8614-12d0ca0b2836.png)
--- - 
![6](https://user-images.githubusercontent.com/111676859/226197307-1d95a1f6-147a-4edb-b899-449c90c07713.png)
--- - 
![7](https://user-images.githubusercontent.com/111676859/226197312-b7bf6ae6-2c05-4b1d-bc25-4262af3f04f2.png)
--- - 
![8](https://user-images.githubusercontent.com/111676859/226197316-eb387e87-9690-44ca-b138-f15b03bed7d4.png)
--- - 
![9](https://user-images.githubusercontent.com/111676859/226197324-dcbad05b-2283-4ef5-bae9-2da8d09d55c9.png)
--- - 
![10](https://user-images.githubusercontent.com/111676859/226197329-025091a0-642b-4d68-ac4e-f365e0e78e82.png)
--- - 
![11](https://user-images.githubusercontent.com/111676859/226197338-3e530bc6-e7bf-4e4a-9284-165f85be47d2.png)

## Authors


<h5  align ="center">Lea Prem<h5>

- Portfolio: [berthutapea](https://berthutapea.vercel.app/)

- Github: [@bert-hutapea](https://github.com/berthutapea)

- Linkedin: [@gilbert-hutapea](https://www.linkedin.com/in/gilberthutapea/)

- Email: [berthutapea@gmail.com](mailto:berthutapea@gmail.com)


<h5  align ="center">George Beyrouti<h5>

- Portfolio: [George Beyrouti](https://react-portfolio-george-beyrouti.vercel.app/)

- Github: [George-Beyrouti](https://github.com/George-Beyrouti)

- Linkedin: [@George-Beyrouti](https://de.linkedin.com/in/george-beyrouti)

- Email: [georges.beyrouti@gmail.com](mailto:georges.beyrouti@gmail.com)


<h5  align ="center">Marvin Hampe<h5>

- Portfolio: [berthutapea](https://berthutapea.vercel.app/)

- Github: [@bert-hutapea](https://github.com/berthutapea)

- Linkedin: [@gilbert-hutapea](https://www.linkedin.com/in/gilberthutapea/)

- Email: [berthutapea@gmail.com](mailto:berthutapea@gmail.com)


<h5  align ="center">Klaus Stender<h5>

- Portfolio: [StenderKlaus](https://react-portfolio-ii.vercel.app/)

- Github: [StenderKlaus](https://github.com/StenderKlaus)

- Linkedin: [@gilbert-hutapea](https://www.linkedin.com/in/klaus-stender-7ba879266/)

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