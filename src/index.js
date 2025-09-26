import React from 'react';
import ReactDOM from 'react-dom/client'; //utiliser ReactDOM pour s'attacher à notre HTML.
import {RouterProvider} from "react-router-dom"; 
import router from './router'
import './assets/sass/main.scss';


const root = ReactDOM.createRoot(document.getElementById('root')); //préciser où notre app React va vivre dans notre HTML
root.render(
  <RouterProvider router={router}/> // toutes les routes sont transmises à ce composant pour afficher app
);

