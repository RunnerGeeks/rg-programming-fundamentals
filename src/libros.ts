// Este codigo posee errores asociados a incorrecta declaración del contexto de la variable o tipos de datos
// Es necesario que realice lo siguiente:
// 1. Recuerde que los archivos .ts son supertipos de .js por lo que nodejs no puede ejecutar directamente archivos .ts.
//    por esto, es necesario compilar los archivos .ts en .js antes de ejecutarlos con nodejs. Para chequear que tiene el
//    compilador de typescript instalado ejecute `tsc -v`. Si no arroja numero de versión, ejecute npm install -g ts-node.
// 2. Ejecute en la linea de comandos `ts-node libros.ts`. Este comando compila el archivo .ts y luego ejecuta el .js resultante
// 3. Observe los errores en la consola y corrija cada uno de los errores hasta lograr que todo funcione correctamente.


// Declaración de un tipo para los libros
type Book = {
    title: string;
    author: string;
    published: number;
}

// Declaración de una variable para almacenar los libros
let books: Book[] = [
    {title: 'Cien años de soledad', author: 'Gabriel García Márquez', published: 1967},
    {title: '1984', author: 'George Orwell', published: 1949},
    {title: 'Moby-Dick', author: 'Herman Melville', published: 1851}
];

// Declaración de una variable para almacenar el autor a buscar
const authorToSearch: number = 'Gabriel García Márquez';

// Búsqueda de libros por autor
let authorBooks = [];
for (let book of books) {
    if (book.author === authorToSearch) {
        authorBooks.push(book);
    }
}

// Impresión de los libros del autor
console.log(authorBooks.title);

// Cambio del autor de un libro
books[0].author = 'Julio Cortázar';
