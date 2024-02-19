import * as fs from 'fs';

// Leer el archivo JSON
fs.readFile('tweets.json', { encoding: 'utf8' }, (err: NodeJS.ErrnoException | null, jsonString: string) => {
    if (err) {
        console.log("Error al leer el archivo del disco:", err);
        return;
    }
    try {
        // Analizar los datos JSON
        const data: any[] = JSON.parse(jsonString);

        /* En este espacio realizarás la lógica de tu programa */

        
    } catch(err) {
        console.log('Error al analizar la cadena JSON:', err);
    }
});
