# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


V prilozenii ispolzuetsa besplatnij API dlja razrabotchikov s limitom v 100 zaprosov. Takze on rabotaet tolko na lokal hoste, nesmotrja na deploy. 

V  razdele Contact/School - kratkaja informacija ob avtore.
Dlja etogo ispolzovalsa marshrutizator (react-router-dom) v App.js

V razdele Launch-search, pri vibore konkretnogo istochnika novostej, v Network-Responce budet pokazan tolko vibrannij istochnik, no server  vseravno budet prisilat statji iz drugih novostnih istochnikov ( eto problema v backende)

Vsja osnovnaja logika prilozenija bila napisanna v Body/Index.js i  v Body/Form/Index.js

Dlja nekotorih componentov v proekte ispolzovalsa react-redux  (Services/stateServices) a takze store -(hraniliwe dannih) bilo dobavlenno v glavnij render vsego proekta (index.js) cherez Provider 

V apiServices ispolzujutsa nodi urlSearchParams dlja kotorih bilo neobhodimo sozdat papku .env v osnovnom dereve proekta.

Component ErrorModalComponent - otvechaet za oshibki v proekte i pri criticheskom izmenenii v proekte budet vivedena owibka v okne alert

Vosnovnom vse stili bili vzati takze cherez bootstrap i propisanni v scss

