import router from './routes';


//window  permite saber si está en el contexto de la aplicación + event listener
window.addEventListener('load', router);
window.addEventListener('hashchange',router)