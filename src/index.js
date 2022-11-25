import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Services/stateService';
import { BrowserRouter } from 'react-router-dom';
// document.getElementById : beret html element s id root iz DOM (document Object Model)
// DOM eto vsja struktura html v js objekte
// DOM hranitsa v globalnoj peremennoj kotoraja nazivaetsa 'document'

// ReactDOM eto vspomogatelnij paket Reacta dlja vzaimodejstvija s obichnim DOM
// createRoot sozdajet glavnuju directoriju gde budet zapuskatsja vse nashe prilozenie
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render = functsija otrisovki React komponentov
// Otrisovka znachit obrabotka komponenta i perevodit iz JSX ili React element v chistij DOM
root.render(
    <Provider store ={store}> 
    <BrowserRouter> 
    <App />
    </BrowserRouter>
    </Provider>
);


