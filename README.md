
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Main tools what was used for this app:
React JS, React-redux, React-router, React-Bootsrap.

This app uses free API for developers with limit of 100 requiers, Unfortunatily its imposible to open it in Gitgub Pages, due to API license, only in local server, in spite of deploy.

In section Contact/School  we have a litle info about author.
For this was used (react-router-dom) in App.js

In Launch-search section, when choosing a specific news sourc,in Network-Responce will show only choosen source, but server will be send responces from other news sources (due to problem in backend)

All main logic of this app located in Body/Index.js and Body/Form/Index.js components

For some components in project was used react-redux  (Services/stateServices)and Store - (data) was added to main render of hole project (index.js) through Provider

In apiServices we use urlSearchParams nodes, for which was necessary create .env file in main structure of project.


Component ErrorModalComponent - responce for errors. In case of a critical error in the project will be alert messege with error description.
Mostly, all styles was taken with  bootstrap and written through in SCSS.


