require("regenerator-runtime/runtime");
// importar los templates y las páginas que se hayan creado y el manejo de las rutas
import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


const routes = { // objeto para establecer las rutas
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};

//manejador
const router = async()=>{
/*Establecer los templates que se tienen hacia un elemento del DOM*/
const header = null || document.getElementById('Header');
const content = null || document.getElementById('content');

// para saber que está funcionando:
header.innerHTML = await Header();// Permite mandar el template de header hacia la vista dentro del HTML

// Faltaría manipular para actualizar el archivo de entrada = index.js

let hash = getHash(); // hará el llamado a getHash

let route = await resolveRoutes(hash); // manejar la ruta
let render = routes[route] ? routes[route] : Error404;
content.innerHTML = await render();

};


export default router;