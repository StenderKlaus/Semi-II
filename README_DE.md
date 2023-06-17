<H1 align ="center" > SEMICOLONS_BLOG  </h1>
<h4  align ="center"> 
Fullstack open source blogging application made with MongoDB, Express, React & Nodejs (MERN) </h4>

<h5> 
Dieser Blog / diese Selbstlernplattform hilft Menschen, die daran interessiert sind, WEB DEVELOPMENT selbst zu erlernen, den ersten Schritt in dieses spannende Feld zu machen.</h5>


<h5> 
Für "Selbstlerner" haben wir mit dem Button "Cheat-Sheets" auf der Website eine Reihe von Materialien bereitgestellt, die viel Zeit erspart, da sie keine langen Dokumentationen in <a href="https://www.w3schools.com/" target="_blank">W3School</a> und  oder <a href="https://developer.mozilla.org/en-US/" target="_blank">MDN</a> für jedes HTML-Tag, CSS-Styling-Element oder jeden JavaScript-Befehl enthält.

Sondern stattdessen eine Liste der am häufigsten verwendeten Tags / Befehle im jeweiligen Abschnitt zur Verfügung stellt und sie durch die Integration individueller Sandboxen für jedes HTML-Tag, CSS-Stil-Element oder JS-Befehl einfach und übersichtlich darstellt.</h5>

<h5>
Wir haben den Abschnitt "Story" der Live-Version dieses Blogs / dieser Plattform mit mehreren Beiträgen gefüllt, die Tipps und Vorschläge enthalten, die zukünftigen Webentwicklern auf ihrer Reise des Selbstlernens helfen werden.
Diese wurde mit nützlichen Links zu anderen Ressourcen, die wir selbst genutzt und als sehr hilfreich empfunden haben gefüllt.</h5>

<h5>
Dieser Blog / Diese Lernplattform wurde von einem Team von Entwicklern unter Verwendung moderner agiler Methoden und Werkzeuge erstellt. Weitere Informationen über die Autoren finden Sie in einem späteren Abschnitt der Readme-Datei.</h5>


Eine Live-Version dieses Blogs / dieser Selbstlernplattform finden Sie unter:

<a>
HIER ist die Live-Version zu sehen LINK
</a>



<br>

<h3>Inhaltsstruktur:</h3>

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

Um dieses Projekt lokal auszuführen, klonen Sie einfach das Repository oder laden es als Zip-Datei herunter. Entpacken Sie es auf Ihrem Rechner.

- Öffnen Sie das Projekt in Ihrem bevorzugten Code-Editor.
- Gehen Sie zu Terminal -> Neues Terminal (wenn Sie VS-Code verwenden)
- Teilen Sie Ihr Terminal in zwei auf (führen Sie das Frontend auf einem Terminal und das Backend auf dem anderen Terminal aus)

Im ersten Terminal

```
$ cd Frontend
$ npm install (to install frontend-side dependencies)
$ npm run  start (to start the frontend)
$ or
$ nodemon start (to start the frontend)
```

Im zweiten Terminal

- cd Backend (Enter) und ersetzen/ergänzen der Umgebungsvariablen in config.env unter ./config
- Erstellen Sie Ihre MongoDB-Verbindungsurl, die Sie als MONGO_URI verwenden werden
- Geben Sie die folgenden Anmeldedaten ein

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
Setzen von Umgebungsvariablen in .env unter im Haupt-Backend-Ordner./

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

- Benutzerregistrierung und Anmeldung
- Authentifizierung mit JWT-Tokens
- CRUD-Operationen (Story erstellen, lesen, aktualisieren und löschen)
- Hochladen von Benutzerprofilbildern und Storybildern auf den Cloudinary Server
- Kommentieren der Story und Liken der Kommentare
- Liken von Blog-Posts und Hinzufügen von Blog-Posts zur Leseliste
- Die Möglichkeit, beim Hinzufügen eines neuen Blog-Posts relevante Kategorien hinzuzufügen 
- Durchsuchen von Blog-Posts anhand ihrer Kategorien 
- Blog-Posts-Suche basierend auf Blog-Posts-Titel und mehrseitiger Aufbau
- Hinzufügen zu "Favoriten" zur Leseliste um mit diesem Lesezeichen versehener Blog-Posts zu sortieren
- Skelett-Ladeeffekt / Animation
- An Ausgabe-Bildschirm angepaßtes Design
- und viele andere Funktionen.

<br/>

##   Coming Features (currently in Development)

- das Bearbeiten und Löschen von eigenen Kommentaren
- die Möglichkeit, die Beiträge zu sortieren nach: Datum, Likes und durchschnittliche Lesezeit
- Begrenzung der Größe der hochgeladenen Fotos auf Cloudinary-Servern
- Administratoren-Dashboard, in dem "Admins" alle Beiträge sehen können und befugt sind, unangemessene oder unzusammenhängende und nicht dem Zweck dieses Blogs entsprechende Beiträge und Kommentare zu löschen
- Eine Seite, auf der ein Autor alle seine Geschichten und früheren Aktivitäten auf dem Blog sehen und verwalten kann
- Hinzufügen weiterer "Cheat Sheets" für andere Web-Entwicklungs-Tools wie React, MongooDB, SQL, JAVA, PHP, SAP ... 

<br/>

##  Technologies used

Dieses Projekt wurde unter Verwendung der folgenden Technologien erstellt:

####  Frontend 

- [React js](https://www.npmjs.com/package/react) - JavaScript-Bibliothek, die für die Erstellung von Benutzeroberflächen speziell für einseitige Anwendungen verwendet wird
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - Zur Verwaltung und Zentralisierung des Anwendungsstatus
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Für das "Routing"
- [axios](https://www.npmjs.com/package/axios) - Für Api-Aufrufe
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS) - Für die Benutzeroberfläche
- [CK-Editor](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html) - Rich Text Editor 
- [uuid](https://www.npmjs.com/package/uuid) - Für den Zufallsgenerator
- [React icons](https://react-icons.github.io/react-icons/) -
 Kleine Bibliothek, die Ihnen hilft, Icons zu Ihren React-Anwendungen hinzuzufügen.
 - [React Select](https://www.npmjs.com/package/react-select) -
 ein NPM-Paket, mit dem Sie in Ihren React-Anwendungen aus einem Eingabefeld für Optionen auswählen können.

####  Backend 

- [Node js](https://nodejs.org/en/) - Eine Laufzeitumgebung für die Erstellung schneller Serveranwendungen mit JS.
- [Express js](https://www.npmjs.com/package/express) - Der Server für die Bearbeitung und Weiterleitung von HTTP-Anfragen.
- [Mongoose](https://mongoosejs.com/) - Zum Modellieren und Abbilden von MongoDB-Daten in JavaScript.
- [express-async-handler](https://www.npmjs.com/package/express-async-handler) - Einfache Middleware für die Behandlung von Ausnahmen innerhalb von asynchronen Express-Routen und deren Übergabe an Ihre Express-Fehlerhandler.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Zur Authentifizierung
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Für die Datenverschlüsselung.
- [Cloudinary](https://https://cloudinary.com/about) - Eine Cloud-Medienverwaltung für den Upload von Benutzerprofilbildern und Story-Bildern.
- [Nodemailer](https://nodemailer.com/about/) - E-Mails aus Node.js versenden.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency Modul, das Umgebungsvariablen lädt.
- [multer](https://www.npmjs.com/package/multer) - Node.js-Middleware für das Hochladen von Dateien.
- [slugify](https://www.npmjs.com/package/slugify) - Zur Kodierung von Titeln in ein URL-freundliches Format.
- [cors](https://www.npmjs.com/package/cors) - Stellt eine Connect/Express-Middleware bereit


####  Database 

 - [MongoDB ](https://www.mongodb.com/) - Bietet einen kostenlosen Cloud-Service zum Speichern von MongoDB-Sammlungen.
 
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

Hiermit wird jeder Person, die eine Kopie dieser Software und der zugehörigen Dokumentationsdateien (die "Software") erwirbt, die kostenlose Erlaubnis erteilt dieser Software und der zugehörigen Dokumentationsdateien (die "Software") erhält, das Recht der Software ohne Einschränkung zu handeln, einschließlich und ohne Einschränkung der Rechte zu verwenden, zu kopieren, zu modifizieren, zusammenzuführen, zu veröffentlichen, zu vertreiben, zu unterlizenzieren und/oder zu verkaufen der Software zu nutzen, zu kopieren, zu modifizieren, zu veröffentlichen, zu vertreiben, zu unterlizenzieren und/oder zu verkaufen, und zu erlauben, dies zu tun, vorbehaltlich der folgenden Bedingungen:

Der obige Copyright-Hinweis und dieser Genehmigungshinweis müssen in allen Kopien oder wesentlichen Teilen der Software enthalten sein.
Kopien oder wesentlichen Teilen der Software enthalten sein.

DIE SOFTWARE WIRD OHNE MÄNGELGEWÄHR UND OHNE JEGLICHE AUSDRÜCKLICHE UND / ODER STILLSCHWEIGENDE, EINSCHLIESSLICHE, ABER NICHT BESCHRÄNKTE AUF DIE GARANTIE DER MARKTGÄNGIGKEIT, EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND NICHTVERLETZUNG VON RECHTEN DRITTER. 
IN KEINEM FALL SIND DIE AUTOREN ODER URHEBERRECHTSINHABER FÜR JEGLICHE ANSPRÜCHE, SCHÄDEN ODER ANDERE HAFTUNG, SEI ES AUS VERTRAG, UNERLAUBTER HANDLUNG ODER ANDERWEITIG, DIE SICH AUS ODER IN VERBINDUNG MIT DER SOFTWARE ODER DER NUTZUNG ODER DEM SONSTIGEN UMGANG MIT DER SOFTWARE.






Alle Rechte vorbehalten.

Die vorliegende Software, einschließlich aller dazugehörigen Dateien, ist durch Urheberrechte und andere geistige Eigentumsrechte geschützt. Diese Software darf nur gemäß den Bestimmungen dieser Vereinbarung verwendet werden.

Jegliche Vervielfältigung, Verbreitung, öffentliche Darstellung oder Modifikation dieser Software, ganz oder teilweise, ohne vorherige schriftliche Genehmigung ist ausdrücklich untersagt.

Diese Software wird "wie sie ist" bereitgestellt, ohne jegliche ausdrückliche oder stillschweigende Gewährleistung. Die Autoren haften nicht für Schäden, die sich aus der Verwendung dieser Software ergeben.

Die Namen und Logos von Dritten, die in dieser Software verwendet werden, können Marken ihrer jeweiligen Eigentümer sein und unterliegen dem Schutz der entsprechenden Rechteinhaber.

Mit der Verwendung dieser Software erklären Sie sich damit einverstanden, die oben genannten Bedingungen einzuhalten und das geistige Eigentum der Autoren zu respektieren.

Bei Fragen oder Erlaubnisanfragen in Bezug auf diese Software wenden Sie sich bitte an [Kontaktinformationen].
