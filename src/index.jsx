import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Noticias from './Pagina1.jsx';
import Programacion from './Pagina2.jsx';
import Chismes from './Pagina4.jsx';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Noticias saludo="BIENVENIDOS "/>
    <Programacion canal="VeintiDOs" novedades="musicales" horoscopo="piscis" comisaria="santa cruz"  />
    <Musica canal="Musica"  numero="VeintiDos" balada="The Greatest" album="Hit Me Hard and Soft" celebrando="show" primer="concierto" tres="noches" tiene="final" para="lanzar" era="Moon Music" />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

