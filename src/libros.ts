// Este codigo posee errores asociados a incorrecta declaración del contexto de la variable o tipos de datos
// Es necesario que realice lo siguiente:
// 1. Recuerde que los archivos .ts son supertipos de .js por lo que nodejs no puede ejecutar directamente archivos .ts.
//    por esto, es necesario compilar los archivos .ts en .js antes de ejecutarlos con nodejs. Para chequear que tiene el
//    compilador de typescript instalado ejecute `tsc -v`. Si no arroja numero de versión, ejecute npm install -g ts-node.
// 2. Ejecute en la linea de comandos `ts-node libros.ts`. Este comando compila el archivo .ts y luego ejecuta el .js resultante
// 3. Observe los errores en la consola y corrija cada uno de los errores hasta lograr que todo funcione correctamente.


// Declaración de una interfaz para los libros
interface Libro {
    titulo: string;
    autor: string;
    publicado: number;
}

// Declaración de una variable para almacenar los libros
let libros: Libro[] = [
    {titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', publicado: 1967},
    {titulo: '1984', autor: 'George Orwell', publicado: 1949},
    {titulo: 'Moby-Dick', autor: 'Herman Melville', publicado: 1851}
];

// Declaración de una variable para almacenar el autor a buscar
const autorABuscar: number = 'Gabriel García Márquez';

// Búsqueda de libros por autor
let librosDelAutor = [];
for (let libro of libros) {
    if (libro.autor === autorABuscar) {
        librosDelAutor.push(libro);
    }
}

// Impresión de los libros del autor
console.log(librosDelAutor.titulo);

// Cambio del autor de un libro
libros[0].autor = 'Julio Cortázar';
