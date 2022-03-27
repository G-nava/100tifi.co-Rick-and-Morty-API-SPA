/*
 *Configuraciones necesarias para poder 
 * probar nuestro código en cualquier navegador 
 * 
 * npm install 
 * @babel/core = Incluye toda la librería de babel.
 * babel-loader = 
 * html-webpack-plugin = recurso necesario para copiar los archivos html s de nuestro proyecto
 * webpack = instala webpack
 * webpack-cli = Nos permite usar ciertos comandos
 * webpack-dev-server = entorno de desarrollo local para probar los cambios que estemos haciendo.
 * --save-dev = instala como depenencia de desarrollo
 * */

 /**
  * Todos estos elementos del repositorio de paquetes y modulos de npm
  * y los va a copiar a nuestro proyecto para que podamos implementarlo 
  * y usarlo sin ning{un problema
  */
const path = require('path'); // trae 'path' (de node) que nos va a permitir acceder ahacia donde estamos o nos estamos moviendo dentro de la carpets
const HtmlWebpackPlugin = require('html-webpack-plugin'); //archivo necesario para trabajar con Html


module.exports = { // se crea un módulo para exportar donde viene cada configuracion de lo que va a suceder
    entry: './src/index.js', // establesco el punto de entrada, aquí se estableceé todo el código inicial y va a partir hacia el desarrollo que se va acrear.
    output:{ // donde se va a poner el proyecto compilado y estructurado listo para mandarse a producción
        path: path.resolve(__dirname,'dist'), // resolve para saber en donde se encuentra y poner una nueva carpeta (dist = distribution)
        filename: 'main.js' // especifico como se va a llamar el archivo (de esta forma el compilado que se va a crear de todo lo que tiene el proyeco en javascript se va a llamar "main.js" cuando esté listo para producción)
    },

    resolve:{ // Establecer las extenciones que se van a utilizar en el proyecto
        extensions: ['.js'],  // espeifico en un arreglo las extenciones que se van a utilizar en el proyecto
    },
    // se crea un módulo con las regglas necesarias con las que trabajar
    // en este caso la regla que se va a crear es la de Babel con la cual se va a preparar el proyecto para que sea compatible con todos los navegadores
    module:{
        rules:[  // se crean reglas que son pasadas por medio de un arreglo
            {
                test: /\.js?$/,  // estructura de babbel (regex): 
                exclude: /node_modules/,  // escluir la carpeta de node modules
                use:{  // utilizar un loader o una configuracion establecida para trabajar todo el código
                    loader: 'babel-loader',
                    options:{
                        presets:[
                            [ '@babel/preset-env',
                            {targets:"defaults"}]
                        ]
                    }
                }
            }
        ]
    },
    plugins:[  // establecer los plugins a utilizar
        new HtmlWebpackPlugin([
            {
                inject: true,
                template: './public/index.html',
                filename:'./index.html'
            }
        ])
    ]

}

// Si el main en dist te crea solo con el console.log(“Hello”), esto se debe a un problema con las versiones de Webpack
// Haz lo siguiente en la terminal (en el current workspace):
// `

// npm uninstall wepback
// npm uninstall wepback-cli

// `

// Lo que pasó fue que borraron las versiones desactualizadas
// Ahora se intalará lo correcto con el siguiente comando:
// `

// npm i webpack@4 webpack-cli@3
/*
1)Tras la actualizacion a webpack 5 debemos instalar las siguientes 
dependdencias de babel:
 “npm install @babel/core babel-loader @babel/preset-env”.

2)Luego debemos generar en la raiz del proyecto el archivo
 “babel.config.json” alli debemos agregar lo siguiente:

{
*/