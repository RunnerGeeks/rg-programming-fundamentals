// Este script convierte archivos CSV a formato JSON.
// Necesitarás tener instaladas la librería 'csvjson-csv2json'.
// Puedes instalarlas usando npm con los siguientes comandos:
// npm install csvjson-csv2json

const fs = require('fs');
const csv2json = require('csvjson-csv2json');

// Leer los datos del archivo CSV
const csvData = fs.readFileSync('tweets.csv', 'utf8');

// Convertir los datos del CSV a formato JSON
const jsonData = csv2json(csvData, {parseNumbers: true});

// Escribir los datos en formato JSON a un archivo
fs.writeFileSync('tweets.json', JSON.stringify(jsonData, null, 2));

console.log('El archivo CSV ha sido convertido a JSON.');
